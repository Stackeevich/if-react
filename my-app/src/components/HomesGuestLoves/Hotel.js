/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Hotel = ({
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
        {/* eslint-disable-next-line react/prop-types */}
        <img src={src} alt={alt} className={homesLinkImageClassName} />
      </div>
      <div className={homesListContentClassName}>
        <div className={homesListHeadingClassName}>
          {/* eslint-disable-next-line react/prop-types */}
          <span className={homesListTitleClassName}>{homesListTitleContent}</span>
          <span className={homesListSubtitleClassName}>
            {/* eslint-disable-next-line react/prop-types */}
            {homesListSubtitleContentCity}, {homesListSubtitleContentCountry}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
