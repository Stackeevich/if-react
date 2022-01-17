import React from 'react';

const HomesGuestLovesBtn = ({className}) => {
  return (
    <>
      <button id="hgl-leftBtn" className={className}>
        &#x3c;
      </button>
      <button id="hgl-rightBtn" className={className}>
        &#x3e;
      </button>
    </>
  );
};

export default HomesGuestLovesBtn;
