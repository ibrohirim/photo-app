import React, { useEffect, useState, useRef } from 'react';
import useFirestoreHome from '../../hooks/useFirestoreHome';
import { motion } from 'framer-motion';

import './Home.css';

const Home = () =>{

    const [err, setErr] = useState('');

    const { doc } = useFirestoreHome('images');

    let count = useRef(0);

    useEffect(() => {
        if(doc.length === 0) {
            count.current = count.current + 1;
        }
        if(count.current >=2 ) {
            setErr('There has been an issue. Please try agin later.');
        } else {
            setErr('');
        }
    }, [doc]);

    return(
        <div className="home-wrap">
        { doc.length !== 0 ? doc.map(d => (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delkay: 1 }} key={d.id} className="card">
                <span className="created-by">{d.displayName}</span>
                <div className="home-image-wrap">
                    <img src={d.url} alt="uploaded pic"/>
                </div>
            </motion.div>
        )) : <div className="error">{err}</div>}
        </div>
    )
}

export default Home;