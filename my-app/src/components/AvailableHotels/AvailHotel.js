/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';

// eslint-disable-next-line react/prop-types
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
}) => {
  return (
    <div className={homesListCardClassName}>
      <div className={homesListImagesClassName}>
        <img src={src} alt={alt} className={homesLinkImageClassName} />
      </div>
      <div className={homesListContentClassName}>
        <div className={homesListHeadingClassName}>
          <span className={homesListTitleClassName}>{homesListTitleContent}</span>
          <span className={homesListSubtitleClassName}>
            {homesListSubtitleContentCity}, {homesListSubtitleContentCountry}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AvailHotel;
