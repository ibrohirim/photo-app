import React, { useState, useContext } from 'react';

import Title from '../Title/Title';
import UploadForm from '../UploadForm/UploadForm';
import ImageGrid from '../ImageGrid/ImageGrid';
import Modal from '../Modal/Modal';
import { Redirect } from 'react-router-dom';
import { userContext } from '../../context/UserProvider';

const Profile = () => {

  const [selectedImage, setSelectedImage] = useState(null)
  const user = useContext(userContext);

  if(!user) {
    return <Redirect to="/login" />
  }

  return(
      <div className="App">
        <Title/>
        <UploadForm />
        <ImageGrid setSelectedImage={ setSelectedImage } />
        { selectedImage && <Modal selectedImage= { selectedImage } setSelectedImage= { setSelectedImage }/>}
      </div>
  )
}

export default Profile;