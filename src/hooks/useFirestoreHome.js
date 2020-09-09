const { useState, useEffect } = require("react");
const { projectFirestore } = require("../firebase/config");


const useFirestoreHome = (collection) => {
    const [doc, setDoc] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection).orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDoc(documents);
        });

        return () => unsub();
    }, [collection]);

    return { doc } 
}

export default useFirestoreHome;