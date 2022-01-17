import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { decrementChildren, incrementChildren } from '../../../actionCreator';
import FilterSelect from './FilterSelect';

const Children = ({ labelText, endNumber, select }) => {
  const children = useSelector((state) => state.children);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const decrementChildrenHandler = (e) => {
    e.preventDefault();
    dispatch(decrementChildren());

    if (select && children === 1) {
      setSelected(false);
    }
  };

  const incrementChildrenHandler = (e) => {
    e.preventDefault();
    dispatch(incrementChildren());

    if (select) {
      setSelected(true);
    }
  };

  return (
    <>
      <div className="item">
        <span>{labelText}</span>
        <div className="choose">
          <button
            onClick={decrementChildrenHandler}
            className={children === 0 ? 'disabled-btn btn' : 'btn'}
            type="button"
            disabled={children === 0}
          >
            -
          </button>
          <span>{children}</span>
          <button
            onClick={incrementChildrenHandler}
            className={children === endNumber ? 'disabled-btn btn' : 'btn'}
            type="button"
            disabled={children === endNumber}
          >
            +
          </button>
        </div>
      </div>
      <FilterSelect selected={selected} quantity={children} />
    </>
  );
};

Children.propTypes = {
  endNumber: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
  select: PropTypes.bool,
};

Children.defaultProps = {
  select: false,
};
export default Children;
