import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './component/login/login';
import fire from './fire';
import React, { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = () => {
    clearErrors();
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err=>{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignUp = () => {
    clearErrors();
    fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const authListner = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }else {
        setUser('');
      }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut();   
  }

  useEffect(()=>{
    authListner();
  }, []);

  
  const stateObject = {
    email, setEmail, emailError, setEmailError, password, setPassword, passwordError, setPasswordError, hasAccount, setHasAccount, user, setUser, handleLogin, handleSignUp
  }

  return (
      <div className="App">
        <Login props={stateObject} />
      </div>
  );
}

export default App;
