import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase/config';
import './Auth.css';
import { userContext } from '../../context/UserProvider';
import Loader from '../Loader/Loader';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const user = useContext(userContext);

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(validateForm()) {
            try {
                setLoading(true);
                await auth.createUserWithEmailAndPassword(email, password).then(user => {
                    user.user.updateProfile({
                        displayName: userName
                    })
                });
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        }

    }

    const validateForm = () => {
        let valid = true;
        if(userName.length < 3) {
            setError('Username must be minimum 3 characters.');
            valid = false;
        }

        if(password.length < 6) {
            setError('Password must be minimum 6 characters');
            valid = false;
        }

        return valid;
    }

    if(user) return <Redirect to="/home" />

    return (
        <div className="auth-wrap">
            { !loading ?
                <form onSubmit={ handleSubmit }>
                    <span>Sign up</span>
                    <label htmlFor="userName">Username:</label>
                    <input type="text" name="userName" required onChange={ e => setUserName(e.currentTarget.value)} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" onChange={ e => {
                        setEmail(e.currentTarget.value);
                        setError('');
                    }} required/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" required onChange={ p => setPassword(p.currentTarget.value)} />
                    <button type="submit" className="button button-primary">Sign up</button>
                </form> :
                <Loader />
            }
            { error && <div className="error">{error}</div> }
        </div>
    )
}

export default Signup;