import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { decrementRooms, incrementRooms } from '../../../actionCreator';

const Rooms = ({ labelText, endNumber }) => {
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  const decrementRoomsHandler = (e) => {
    e.preventDefault();
    dispatch(decrementRooms());
  };

  const incrementRoomsHandler = (e) => {
    e.preventDefault();
    dispatch(incrementRooms());
  };

  return (
    <>
      <div className="item">
        <span>{labelText}</span>
        <div className="choose">
          <button
            onClick={decrementRoomsHandler}
            className={rooms === 1 ? 'disabled-btn btn' : 'btn'}
            type="button"
            disabled={rooms === 1}
          >
            -
          </button>
          <span>{rooms}</span>
          <button
            onClick={incrementRoomsHandler}
            className={rooms === endNumber ? 'disabled-btn btn' : 'btn'}
            type="button"
            disabled={rooms === endNumber}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

Rooms.propTypes = {
  endNumber: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default Rooms;
