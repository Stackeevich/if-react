import React from 'react';

import HomesGuestLovesBtn from './HomesGuestLovesBtn';

const HomesGuestLovesButtons = (props) => {
  return (
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    <div className={props.className}>
      <HomesGuestLovesBtn className="homes-nav-btn" />
    </div>
  );
};

export default HomesGuestLovesButtons;
