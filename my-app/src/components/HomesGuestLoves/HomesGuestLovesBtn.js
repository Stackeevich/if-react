import React from 'react';

const HomesGuestLovesBtn = (props) => {
  return (
    <>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types,react/button-has-type */}
      <button id="hgl-leftBtn" className={props.className}>
        &#x3c;
      </button>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types,react/button-has-type */}
      <button id="hgl-rightBtn" className={props.className}>
        &#x3e;
      </button>
    </>
  );
};

export default HomesGuestLovesBtn;
