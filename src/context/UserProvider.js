import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';

export const userContext = createContext({
    user: null
});

const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(async userAuth => {
            setUser(userAuth);
        });
    },[]);

    return (
        <userContext.Provider value={ user }>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider;