import React, { useEffect, useContext } from 'react';
import useStorage from '../../hooks/useStorage';
import { motion } from 'framer-motion';
import './Progress.css'
import { userContext } from '../../context/UserProvider';

const ProgressBar = ({file, setFile}) => {

    const user = useContext(userContext);
    const { url, progress } = useStorage(file, user.uid);
    
    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
        initial={{ width: 0}}
        animate={{ width: progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar;