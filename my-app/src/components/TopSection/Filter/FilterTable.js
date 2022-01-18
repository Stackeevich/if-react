import React from 'react';
import { useSelector } from 'react-redux';

const FilterTable = () => {
  const adult = useSelector((state) => state.adult);
  const rooms = useSelector((state) => state.rooms);
  const children = useSelector((state) => state.children);

  return (
    <div>
      <span id="roomsSpan">{adult} Adults</span>
      <span id="roomsSpan">&nbsp;—&nbsp; {rooms} Room</span>
      <span id="childrenSpan">&nbsp;—&nbsp; {children} Children</span>
    </div>
  );
};

export default FilterTable;
