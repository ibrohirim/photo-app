import React, { useContext } from 'react';

import './Title.css'
import { userContext } from '../../context/UserProvider';

const Title = () => {

  const user = useContext(userContext);

  return (
    <div className="title">
      <h2>{user.displayName}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;