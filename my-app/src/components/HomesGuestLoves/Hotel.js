import React from 'react';

// eslint-disable-next-line react/prop-types
const Hotel = ({ item }) => {
  return (
    <li className="homes-list-item col-3 col-md-6 col-sm-3">
      <div className="homes-list-card">
        <div className="homes-list-images">
          {/* eslint-disable-next-line react/prop-types */}
          <img src={item.imageUrl} alt={item.name} className="homes-link-image" />
        </div>
        <div className="homes-list-content">
          <div className="homes-list-heading">
            {/* eslint-disable-next-line react/prop-types */}
            <span className="homes-list-title">{item.name}</span>
            <span className="homes-list-subtitle">
              {/* eslint-disable-next-line react/prop-types */}
              {item.city}, {item.country}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Hotel;
