import React, { useState, useContext } from 'react'
import { auth } from 'firebase';
import { userContext } from '../../context/UserProvider'

import './Auth.css'
import { Redirect, Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const user = useContext(userContext);

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(email, password);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }
    if(user) return <Redirect to="/home" />

    return (
        <div className="auth-wrap">
            { !loading ?
            <form onSubmit={ handleSubmit }>
                <span>Log in</span>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={ e => setEmail(e.currentTarget.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={ p => setPassword(p.currentTarget.value)} />
                <div className="button-wrap">
                    <button type="submit" className="button button-primary">Log in</button>
                    <Link to="/signup" className="button button-secondary">Sign up</Link>
                </div>
            </form> :
            <Loader />
            }
            { error && <div className="error">{error}</div> }
        </div>
    )
}

export default Login;