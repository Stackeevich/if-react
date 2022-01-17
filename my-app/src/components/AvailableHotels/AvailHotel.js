import React from 'react';

function AvailHotel({
  homesListCardClassName, homesListImagesClassName, homesLinkImageClassName, homesListContentClassName, homesListHeadingClassName, homesListTitleClassName, homesListSubtitleClassName, homesListTitleContent, homesListSubtitleContentCity, homesListSubtitleContentCountry, src, alt,
}) {
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
}

export default AvailHotel;
