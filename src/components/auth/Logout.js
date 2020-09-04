import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/config'
import { Redirect } from 'react-router-dom';


const Logout = () => {

    const [loggedOut, setLoggedOut] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        auth.signOut().then(() => {
            setLoggedOut(true)
        }).catch(setError(error));
    }, [error])

    if (loggedOut) {
        return <Redirect to="/home" />
    }

    return (
        <div>{error.message}</div>
    )
}

export default Logout;