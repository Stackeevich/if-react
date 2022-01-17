import React from 'react';
import PropTypes from 'prop-types';
import Adult from './Adult';
import Children from './Children';
import Rooms from './Rooms';

const Filter = ({ isClicked }) => {
  if (isClicked) {
    return (
      <div className="block">
        <div className="box">
          <Adult endNumber={30} labelText="Adults" />
          <Rooms endNumber={30} labelText="Rooms" />
          <Children endNumber={10} labelText="Children" select />
        </div>
      </div>
    );
  }
  return null;
};

Filter.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};

export default Filter;
