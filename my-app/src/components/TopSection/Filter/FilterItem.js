import React, { useState } from 'react';
import '../intro.css';
import PropTypes from 'prop-types';
import FilterSelect from './FilterSelect';

const FilterItem = ({ startNumber, endNumber, labelText, select, sendData }) => {
  const [quantity, setQuantity] = useState(startNumber);
  const [selected, setSelected] = useState(false);

  const decreaseQuantityRemoveSelect = () => {
    setQuantity((prev) => prev - 1);

    if (select && quantity === 1) {
      setSelected(false);
    }
    sendData(quantity - 1);
  };

  const increaseQuantityAddSelect = () => {
    setQuantity((prev) => prev + 1);

    if (select) {
      setSelected(true);
    }
    sendData(quantity + 1);
  };

  return (
    <>
      <div className="item">
        <span>{labelText}</span>
        <div className="choose">
          <button
            className={quantity === 0 ? 'disabled-btn btn' : 'btn'}
            id="btnAdultMinus"
            type="button"
            disabled={quantity === 0}
            onClick={decreaseQuantityRemoveSelect}
          >
            <span>-</span>
          </button>
          <span>{quantity}</span>
          <button
            className={quantity === endNumber ? 'disabled-btn btn' : 'btn'}
            id="btnAdultPlus"
            type="button"
            disabled={quantity === endNumber}
            onClick={increaseQuantityAddSelect}
          >
            <span>+</span>
          </button>
        </div>
      </div>
      <FilterSelect selected={selected} quantity={quantity} />
    </>
  );
};

FilterItem.propTypes = {
  startNumber: PropTypes.number.isRequired,
  endNumber: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
  select: PropTypes.bool,
};

FilterItem.defaultProps = {
  select: false,
};

export default FilterItem;
