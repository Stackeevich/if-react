import React from 'react';

import Hotels from './Hotels';

const HomesGuestLovesUl = (props) => {
  return (
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    <ul className={props.className}>
      <Hotels />
    </ul>
  );
};

export default HomesGuestLovesUl;
