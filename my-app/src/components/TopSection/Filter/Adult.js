import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { decrementAdult, incrementAdult } from '../../../actionCreator';

const Adult = ({ labelText, endNumber }) => {
  const adult = useSelector((state) => state.adult);
  const dispatch = useDispatch();

  const decrementAdultHandler = (e) => {
    e.preventDefault();
    dispatch(decrementAdult());
  };

  const incrementAdultHandler = (e) => {
    e.preventDefault();
    dispatch(incrementAdult());
  };

  return (
    <>
      <div className="item">
        <span>{labelText}</span>
        <div className="choose">
          <button
            onClick={decrementAdultHandler}
            className={adult === 1 ? 'disabled-btn btn' : 'btn'}
            type="button"
            disabled={adult === 1}
          >
            -
          </button>
          <span>{adult}</span>
          <button
            onClick={incrementAdultHandler}
            className={adult === endNumber ? 'disabled-btn btn' : 'btn'}
            type="button"
            disabled={adult === endNumber}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

Adult.propTypes = {
  endNumber: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default Adult;
