import React from 'react';

const AvailHotel = ({ props }) => {
  return props.map((el, index) => {
    return (
      <li className="homes-list-item col-3 col-md-6 col-sm-3" key={index.toString()}>
        <div className="homes-list-card">
          <div className="homes-list-images">
            <img src={el.imageUrl} alt={el.name} className="homes-link-image"/>
          </div>
          <div className="homes-list-content">
            <div className="homes-list-heading">
              <span className="homes-list-title">{el.name}</span>
              <span className="homes-list-subtitle">
            {el.city}, {el.country}
          </span>
            </div>
          </div>
        </div>
      </li>
    );
  });
};

export default AvailHotel;
