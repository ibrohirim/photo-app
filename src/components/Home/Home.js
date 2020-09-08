import React from 'react';
import useFirestoreHome from '../../hooks/useFirestoreHome';
import { motion } from 'framer-motion';

import './Home.css';

const Home = () =>{

    const { doc } = useFirestoreHome('images');

    return(
        <div className="home-wrap">
        { doc.length !== 0 ? doc.map(d => (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delkay: 1 }} key={d.id} className="card">
                <span className="created-by">{d.displayName}</span>
                <div className="home-image-wrap">
                    <img src={d.url} alt="uploaded pic"/>
                </div>
            </motion.div>
        )) : <div className="error">There has been an issue. Please try agin later.</div>}
        </div>
    )
}

export default Home;