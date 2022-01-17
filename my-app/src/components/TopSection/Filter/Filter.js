import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './FilterItem';

const Filter = ({ isClicked, sendAdultData, sendRoomsData, sendChildrenData }) => {
  if (isClicked) {
    return (
      <div className="block">
        <div className="box">
          <FilterItem startNumber={1} endNumber={30} labelText="Adults" sendData={sendAdultData} />
          <FilterItem
            startNumber={0}
            endNumber={10}
            labelText="Children"
            select
            sendData={sendChildrenData}
          />
          <FilterItem startNumber={1} endNumber={30} labelText="Rooms" sendData={sendRoomsData} />
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
