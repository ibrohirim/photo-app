import React, { useEffect, useContext, useState } from 'react';
import useStorage from '../../hooks/useStorage';
import { motion } from 'framer-motion';
import './Progress.css'
import { userContext } from '../../context/UserProvider';

const ProgressBar = ({file, setFile}) => {

    const user = useContext(userContext);
    const { url, progress, error } = useStorage(file, user.uid, user.displayName);
    const [err, setErr] = useState('');
    
    useEffect(() => {
        if(url) {
            setFile(null);
        }
        if(error) {
            setErr('Something went wrong. Please try again later!')
        }
    }, [url, setFile, error]);

    return (
        <>
        { !err ? 
            <motion.div className="progress-bar"
                initial={{ width: 0}}
                animate={{ width: progress + '%'}}>
            </motion.div> :
            <div className="error">{err}</div>
        }

        </>
    )
}

export default ProgressBar;