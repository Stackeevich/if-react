import React, { useState , useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import HomesGuestLovesHeader from './HomesGuestLovesHeader';
import Carousel from './Carousel';
import 'swiper/swiper-bundle.css';
import '../../style.css';
import Hotel from './Hotel';

function Container({className}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
      .then(response => response.json())
      .then(data => {
        setData(data);
        });
  }, []);

  return (
       <div className={className}>
      <HomesGuestLovesHeader className="homes-block-header" />
      <Carousel
        slides={data.map((el, index) => (
          <SwiperSlide
            key={index.toString()}
            tag="li"
            className="homes-list-item col-3 col-md-6 col-sm-3"
          >
            <Hotel
              homesListCardClassName="homes-list-card"
              homesListImagesClassName="homes-list-images"
              homesLinkImageClassName="homes-link-image"
              homesListContentClassName="homes-list-content"
              homesListHeadingClassName="homes-list-heading"
              homesListTitleClassName="homes-list-title"
              homesListSubtitleClassName="homes-list-subtitle"
              homesListTitleContent={`${el.name},`}
              homesListSubtitleContentCity={`${el.city}`}
              homesListSubtitleContentCountry={`${el.country}`}
              src={el.imageUrl}
              alt={el.name}
            />
          </SwiperSlide>
        ))}
      />
    </div>
  );
};

export default Container;