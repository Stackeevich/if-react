import React from 'react';

import HomesGuestLovesUl from './HomesGuestLovesUl';

const HomesGuestLovesCards = (props) => {
  return (
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    <div className={props.className}>
      <HomesGuestLovesUl className="homes-list" />
    </div>
  );
};

export default HomesGuestLovesCards;
