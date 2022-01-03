import React from 'react';
import HomesGuestLovesHeader from './HomesGuestLovesHeader';
import HomesGuestLovesCards from './HomesGuestLovesCards';
import HomesGuestLovesButtons from './HomesGuestLovesButtons';

const Container = (props) => {
  return (
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    <div className={props.className}>
      <HomesGuestLovesHeader className="homes-block-header" />
      <HomesGuestLovesCards className="homes-block-cards" />
      <HomesGuestLovesButtons className="homes-block-nav" />
    </div>
  );
};

export default Container;
