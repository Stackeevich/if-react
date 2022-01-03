/* eslint-disable prettier/prettier */
import React from 'react';
import '../intro.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const FilterSelect = ({ selected, quantity }) => {
  const ages = [];

  for (let i = 1; i <= 17; i += 1) {
    ages.push(i);
  }

  const options = [];
  for (let i = 0; i < quantity; i += 1) {
    options.push(
      <select key={i} className="select-child-age">
        {ages.map((option) => (
          <option key={option} value={option}>{`${option} years old`}</option>
        ))}
      </select>
    );
  }

  if (selected) {
    return (
      <div className="child-age">
        <p className="child-age-span">What is the age of the child you’re travelling with?</p>
        <div className="child-age-selection">{options}</div>
      </div>
    );
  }
  return null;
};

FilterSelect.propTypes = {
  selected: PropTypes.bool.isRequired,
  quantity: PropTypes.number,
};

FilterSelect.defaultProps = {
  quantity: 0,
};

export default FilterSelect;
