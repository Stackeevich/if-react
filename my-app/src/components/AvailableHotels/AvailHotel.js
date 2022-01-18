import React from 'react';
import { NavLink } from 'react-router-dom';

const AvailHotel = ({
  homesListCardClassName,
  homesListImagesClassName,
  homesLinkImageClassName,
  homesListContentClassName,
  homesListHeadingClassName,
  homesListTitleClassName,
  homesListSubtitleClassName,
  homesListTitleContent,
  homesListSubtitleContentCity,
  homesListSubtitleContentCountry,
  src,
  alt,
  id,
}) => {
  return (
    <div className={homesListCardClassName}>
      <div className={homesListImagesClassName}>
        <NavLink to={`hotels/${id}`}>
          <img src={src} alt={alt} className={homesLinkImageClassName} />
        </NavLink>
      </div>
      <div className={homesListContentClassName}>
        <div className={homesListHeadingClassName}>
          <span className={homesListTitleClassName}>
            <NavLink to={`hotels/${id}`}>{homesListTitleContent}</NavLink>
          </span>
          <span className={homesListSubtitleClassName}>
            {homesListSubtitleContentCity}, {homesListSubtitleContentCountry}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AvailHotel;
