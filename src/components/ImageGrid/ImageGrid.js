import React, { useContext } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
import './ImageGrid.css'
import { userContext } from '../../context/UserProvider';

const ImageGrid = ({ setSelectedImage }) => {

    const user = useContext(userContext);
    const { docs } = useFirestore('users', user.uid);

    return (
        <div className="img-grid">
            { docs && docs.map( doc => (
                <motion.div whileHover={{ opacity: 1 }} layout className="img-wrap" key={ doc.id } onClick={ () => setSelectedImage(doc.url) }>
                    <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition= {{ delay: 1 }}
                    src={ doc.url } alt="uploaded pic" />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;