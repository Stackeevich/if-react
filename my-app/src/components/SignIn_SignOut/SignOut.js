import React from 'react';
import { useHistory } from 'react-router-dom';
import './SignOut.css';

const SignOut = ({ isClicked }) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.go(0);
    localStorage.clear();
  };

  if (isClicked) {
    return (
      <div className="sign-out">
        <button
          type="button"
          className="sign-out-btn"
          onClick={handleClick}
        >
          Sign out
        </button>
      </div>
    );
  }
  return null;
};

export default SignOut;
