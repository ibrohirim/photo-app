import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Providers

// Components
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Signup from './components/auth/Signup';
import Home from './components/Home/Home';
import UserProvider from './context/UserProvider';



function App() {


  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Route exact path="/logout" component={ Logout } />
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/signup" component={ Signup }/>
        <Route exact path="/profile" component={ Profile }/>
        <Route exact path="/" component={ Home } />
        <Route exact path="/home" component={ Home } />
      </UserProvider>

    </Router>
  );
}

export default App;
