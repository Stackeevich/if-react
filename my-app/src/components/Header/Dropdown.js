import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Filter from '../TopSection/Filter/Filter';

const Dropdown = ({ isVisible }) => {
  if (isVisible) {
    return (
      <div className="sign-in-dropdown">
        <ul className="dropdown-list">
          <NavLink to="/signin" className="sign-in-link">
            <li className="dropdown-list-item">Sign In</li>
          </NavLink>
          <NavLink to="/" className="sign-in-link">
            <li className="dropdown-list-item">Sign Out</li>
          </NavLink>
        </ul>
      </div>
    );
  }
  return null;
};

Filter.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Dropdown;
