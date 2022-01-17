import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import bgImage from '../../bg-image.jpg';
import './SignIn.css';
import userData from '../../constants/userData';
import getIsSignIn from '../../services';

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [passwordError, setPasswordError] = useState('Password cannot be empty');
  const [formValid, setFormValid] = useState(false);
  // const [isSignedIn, setIsSignedIn] = useState(false);
  const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState('');

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Wrong email');
    } else {
      setEmailError('');
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 8) {
      setPasswordError('The password must include from 4 to 8 characters');
      if (!e.target.value) {
        setPasswordError('Password cannot be empty');
      }
    } else {
      setPasswordError('');
    }
  };
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        return null;
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    history.push('/');
  };

  const handleSignedIn = (e) => {
    e.preventDefault();
    if (email === userData.email && password === userData.password) {
      setWrongEmailOrPassword(`Welcome, ${userData.userName}!`);
      setTimeout(() => {
        localStorage.setItem('email', email);
        localStorage.setItem('userName', userData.userName);
        history.goBack();
      }, 2000);
    } else {
      setWrongEmailOrPassword('There is no such email address or password.');
    }
  };

  return (
    <section className="registration-block" style={{ backgroundImage: `url(${bgImage})` }}>
      <form action=" /" className="registration-form" onSubmit={handleSignIn}>
        <h2 className="registration-header">Sign in to Your Account</h2>
        {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
        <input
          onChange={(e) => emailHandler(e)}
          onBlur={blurHandler}
          name="email"
          type="text"
          className="registration-input"
          placeholder="Enter your email..."
          value={email}
        />
        {passwordDirty && passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        <input
          onChange={(e) => passwordHandler(e)}
          onBlur={blurHandler}
          name="password"
          type="password"
          className="registration-input"
          placeholder="Enter your password..."
          value={password}
        />
        <div style={{ color: 'red' }}>{wrongEmailOrPassword}</div>
        <button
          type="submit"
          className="registration-button"
          disabled={!formValid}
          onClick={handleSignedIn}
        >
          Sign in
        </button>
      </form>
    </section>
  );
};

export default SignIn;
