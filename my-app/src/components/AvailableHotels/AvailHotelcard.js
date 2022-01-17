import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './AvailHotelCard.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import bgImage from '../../bg-image.jpg';
import TopSection from '../TopSection/TopSection';
import 'swiper/swiper-bundle.css';

const AvailHotelCard = () => {
  const history = useHistory();
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  useEffect(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${id}`)
      .then((response) => response.json())
      .then((response) => setHotel(response));
  }, []);

  const handleGoBack = (e) => {
    e.preventDefault();
    history.push(`/`);
  };

  if (hotel === null) {
    return <TopSection />;
  }
  return (
    <>
      <section className="avail-hotel-block" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container">
          <a href='#' onClick={handleGoBack} className="avail-hotel-link">&#8656; Go back</a>
          <div className="avail-hotel-cards">
            <div className="avail-hotel-header">
              <h3>{hotel.name}</h3>
            </div>
            <div className="avail-hotel-stars">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  tabIndex="-1"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                >
                  <path
                    className="svg-color--primary"
                    fill="#F6AB3F"
                    d="M11.988 5.21a.667.667 0 00-.545-.534l-3.604-.6L6.63.455a.666.666 0 00-1.262.001L4.16 4.076l-3.603.6a.667.667 0 00-.233 1.228L3.2 7.63l-1.165 3.493a.67.67 0 00.25.758.672.672 0 00.798-.026L6 9.52l2.917 2.333a.66.66 0 00.796.027.665.665 0 00.252-.758L8.8 7.63l2.876-1.725a.667.667 0 00.312-.696z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  tabIndex="-1"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                >
                  <path
                    className="svg-color--primary"
                    fill="#F6AB3F"
                    d="M11.988 5.21a.667.667 0 00-.545-.534l-3.604-.6L6.63.455a.666.666 0 00-1.262.001L4.16 4.076l-3.603.6a.667.667 0 00-.233 1.228L3.2 7.63l-1.165 3.493a.67.67 0 00.25.758.672.672 0 00.798-.026L6 9.52l2.917 2.333a.66.66 0 00.796.027.665.665 0 00.252-.758L8.8 7.63l2.876-1.725a.667.667 0 00.312-.696z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  tabIndex="-1"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                >
                  <path
                    className="svg-color--primary"
                    fill="#F6AB3F"
                    d="M11.988 5.21a.667.667 0 00-.545-.534l-3.604-.6L6.63.455a.666.666 0 00-1.262.001L4.16 4.076l-3.603.6a.667.667 0 00-.233 1.228L3.2 7.63l-1.165 3.493a.67.67 0 00.25.758.672.672 0 00.798-.026L6 9.52l2.917 2.333a.66.66 0 00.796.027.665.665 0 00.252-.758L8.8 7.63l2.876-1.725a.667.667 0 00.312-.696z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  tabIndex="-1"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                >
                  <path
                    className="svg-color--primary"
                    fill="#F6AB3F"
                    d="M11.988 5.21a.667.667 0 00-.545-.534l-3.604-.6L6.63.455a.666.666 0 00-1.262.001L4.16 4.076l-3.603.6a.667.667 0 00-.233 1.228L3.2 7.63l-1.165 3.493a.67.67 0 00.25.758.672.672 0 00.798-.026L6 9.52l2.917 2.333a.66.66 0 00.796.027.665.665 0 00.252-.758L8.8 7.63l2.876-1.725a.667.667 0 00.312-.696z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  tabIndex="-1"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                >
                  <path
                    className="svg-color--primary"
                    fill="#F6AB3F"
                    d="M11.988 5.21a.667.667 0 00-.545-.534l-3.604-.6L6.63.455a.666.666 0 00-1.262.001L4.16 4.076l-3.603.6a.667.667 0 00-.233 1.228L3.2 7.63l-1.165 3.493a.67.67 0 00.25.758.672.672 0 00.798-.026L6 9.52l2.917 2.333a.66.66 0 00.796.027.665.665 0 00.252-.758L8.8 7.63l2.876-1.725a.667.667 0 00.312-.696z"
                  />
                </svg>
              </span>
            </div>
            <div className="avail-hotel-item">
              <div>
                <img src={hotel.imageUrl} alt={hotel.name} className="avail-hotel-img" />
                <div className="avail-hotel-photos">
                  <Swiper
                    spaceBetween={3}
                    slidesPerView={null} >
                    <SwiperSlide>
                      <img
                        src="https://media.canal3.md/image/201608/full/albergo-reception_39762200.jpg"
                        alt="reception"
                        className="swiper-photo"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://docklands.ru/assets/images/gallery/parking-gallery/01.jpg"
                        alt="Parking"
                        className="swiper-photo"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://go.imgsmail.ru/imgpreview?key=237ac7621027516&mb=imgdb_preview_exp"
                        alt="Swimming pool"
                        className="swiper-photo"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://sovremennik.info/up/slider/plaza/photo_30_big.jpg"
                        alt="Billiard"
                        className="swiper-photo"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://wallpaperaccess.com/full/3014609.jpg"
                        alt="Restaurant"
                        className="swiper-photo"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="avail-hotel-text">
                <span>City: {hotel.city}</span>
                <span>Country: {hotel.country}</span>
                <span>Address: ul. Kosmonavtov 35-11</span>
                <span>Tel.number: +1 234 567 89 01</span>
                <div className="about-hotel">
                  <p>
                  Ideal for those who appreciate quality service at an affordable price.
                  Based on the purpose of your trip to Gagarin and in accordance with the budget, you can
                  choose a suitable accommodation option for you. The refined interior of the hotel is decorated
                  in classic style in warm colors. In each room at your service
                  TV and fridge, and some rooms have a private bathroom.

                  Due to the convenient location of the new hotel building (built in 2016), our
                  A quiet hotel in the center of Gagarin guarantees you a wonderful stay in a comfortable and
                  relaxed atmosphere that combines first-class service of the European level and
                  truly homely comfort.
                  </p>
                  <div className="amenities-hotel">
                    <span>Top amenities</span>
                    <ul className="amenities-hotel-list">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                          tabIndex="-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g className="svg-color--primary" fill="#37454D">
                            <path d="M12.1 5C8.2 5 4.7 6.6 2.2 9.1l.7.7C5.3 7.5 8.5 6 12.1 6s6.8 1.5 9.2 3.8l.7-.7C19.5 6.6 16 5 12.1 5z" />
                            <path d="M4.3 11.2l.7.7C6.8 10.1 9.3 9 12.1 9s5.3 1.1 7.1 2.9l.7-.7c-2-2-4.7-3.2-7.8-3.2s-5.8 1.2-7.8 3.2z" />
                            <path d="M6.5 13.4l.6.6c1.3-1.3 3-2 5-2s3.7.8 5 2l.7-.7c-1.4-1.5-3.4-2.4-5.6-2.4s-4.3 1-5.7 2.5zm2.1 2.1l.7.7c.7-.7 1.7-1.2 2.8-1.2s2.1.5 2.8 1.2l.7-.7c-.9-.9-2.2-1.5-3.5-1.5s-2.6.6-3.5 1.5z" />
                            <circle cx="12.1" cy="18" r="1" />
                          </g>
                        </svg>
                        Free WiFi in rooms
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                          tabIndex="-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M4.71 4.29a.989.989 0 00-1.18-.17.69.69 0 00-.2.13l-.04.04a1 1 0 00-.06 1.35l7.07 8.48c.04.05.09.1.14.14a1.012 1.012 0 001.34-.07l.7-.71 6.66 6.37c.2.2.51.2.71 0 .2-.2.2-.51 0-.71L4.71 4.29zM4 5l7.78 7.77-.71.71L4 5zm5.08 9.22l-4.93 4.94c-.2.19-.2.51 0 .69.18.2.5.2.69 0l4.89-4.89-.21-.21-.44-.53zm11.78-8.29c-.2-.19-.5-.19-.7 0l-3.48 3.48c-.2.2-.5.2-.69 0-.2-.2-.2-.5 0-.7l3.47-3.48c.2-.19.2-.5 0-.69-.19-.2-.5-.2-.69 0l-3.48 3.47c-.2.2-.5.2-.7 0-.2-.19-.2-.49 0-.69l3.48-3.48c.19-.2.19-.5 0-.7a.501.501 0 00-.7 0l-3.82 3.83c-.77.77-.77 2.02 0 2.78l-.91.91.7.68.01.01.9-.9c.76.77 2.01.77 2.78 0l3.83-3.82c.19-.2.19-.51 0-.7z"
                            fill="#37454D"
                          />
                        </svg>
                        Restaurant
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                          tabIndex="-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M16.2 16.1c.2.2.5.2.7 0 .2-.2.2-.5 0-.7-1.2-1.1-2.5-1.1-3.7 0-.8.8-1.5.8-2.3 0-1.2-1.2-2.5-1.2-3.7 0-.2.2-.2.5 0 .7s.5.2.7 0c.8-.8 1.5-.8 2.3 0 .6.6 1.2.9 1.9.9.6 0 1.2-.3 1.8-.9.7-.8 1.4-.8 2.3 0zm-6.1 2.3c-.8.8-1.5.8-2.3 0-1.2-1.2-2.5-1.2-3.7 0-.2.2-.2.5 0 .7s.5.2.7 0c.8-.8 1.5-.8 2.3 0 .7.6 1.3.9 1.9.9.6 0 1.2-.3 1.8-.9.2-.2.2-.5 0-.7-.1-.2-.5-.2-.7 0zm9.7 0c-1.2-1.1-2.5-1.1-3.7 0-.8.8-1.5.8-2.3 0-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7.6.6 1.2.9 1.9.9.6 0 1.2-.3 1.8-.9.8-.8 1.5-.8 2.3 0 .2.2.5.2.7 0 .3-.2.2-.5 0-.7zM7.5 14c.3 0 .5-.2.5-.5V12h7v1.5c0 .3.2.5.5.5s.5-.2.5-.5v-9c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.8-.7-1.5-1.5-1.5S15 3.7 15 4.5V8H8V4.5c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2C10 3.7 9.3 3 8.5 3S7 3.7 7 4.5v9c0 .3.2.5.5.5zM8 9h7v2H8V9z"
                            fill="#37454D"
                          />
                        </svg>
                        Swimming pool
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                          tabIndex="-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g className="svg-color--primary" fill="#37454D">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" />
                            <path d="M13 5H9.5c-.3 0-.5.2-.5.5v12.9c0 .4.2.6.5.6s.5-.2.5-.5V13h3c2.2 0 4-1.8 4-4s-1.8-4-4-4zm0 7h-3V6h3c1.7 0 3 1.3 3 3s-1.3 3-3 3z" />
                          </g>
                        </svg>
                        Parking
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                          tabIndex="-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="svg-color--primary"
                            fill="#37454D"
                            d="M21.345 12.736l-4.766 1.228L13.04 12l3.538-1.963 4.766 1.228a.524.524 0 00.637-.354.495.495 0 00-.367-.61l-3.76-.97 2.967-1.646a.49.49 0 00.19-.684.53.53 0 00-.71-.183l-2.967 1.646 1.008-3.615a.481.481 0 00-.05-.38.525.525 0 00-.317-.232.524.524 0 00-.637.354L16.06 9.17l-3.54 1.964V7.207l3.49-3.354a.487.487 0 000-.707.536.536 0 00-.736 0L12.52 5.793V2.5c0-.276-.232-.5-.52-.5s-.52.224-.52.5v3.293L8.726 3.146c-.203-.195-.532-.195-.736 0s-.203.512 0 .707l3.49 3.354v3.927L7.94 9.17 6.665 4.59a.523.523 0 00-.637-.354.5.5 0 00-.368.612l1.007 3.615L3.7 6.817A.53.53 0 002.99 7a.488.488 0 00.19.683L6.147 9.33l-3.76.97a.498.498 0 00-.37.61c.076.268.36.426.638.355l4.766-1.228L10.96 12l-3.538 1.963-4.766-1.228a.524.524 0 00-.637.354c-.075.266.09.54.367.61l3.76.97-2.967 1.647a.488.488 0 00-.19.683c.144.24.462.32.71.183l2.968-1.646-1.008 3.615c-.074.267.09.54.368.612a.523.523 0 00.637-.354l1.277-4.58 3.538-1.964v3.927l-3.49 3.354c-.202.195-.202.512 0 .707s.533.195.737 0l2.753-2.646V21.5c0 .276.233.5.52.5s.52-.224.52-.5v-3.293l2.753 2.646a.53.53 0 00.368.147c.134 0 .267-.05.37-.146a.488.488 0 000-.707l-3.49-3.354v-3.927l3.538 1.963 1.277 4.58c.074.267.36.425.637.354a.5.5 0 00.368-.612l-1.008-3.615 2.967 1.646a.532.532 0 00.71-.183.49.49 0 00-.19-.683L17.85 14.67l3.76-.968a.52.52 0 00.317-.232.48.48 0 00.05-.38.52.52 0 00-.635-.354z"
                          />
                        </svg>
                        Air-conditioner
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                          tabIndex="-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 11c-3.5 0-6 3-6 7.2 0 1 0 2.8 1.8 2.8.6 0 1.3-.4 2-.8s1.6-1 2.3-1c.7 0 1.6.5 2.3 1 .7.4 1.4.8 2 .8 1.7 0 1.7-1.7 1.7-2.8C18 14 15.5 11 12 11zm4.3 9c-.9 0-2.6-1.8-4.3-1.8S8.6 20 7.8 20c-.6 0-.8-.2-.8-1.8 0-4 2.2-6.2 5-6.2s5 2.2 5 6.2c0 1.6-.2 1.8-.7 1.8zm-2-10.1c.2 0 .3.1.5.1 1.2 0 2.3-1 2.6-2.4.4-1.6-.4-3.2-1.7-3.5-.2 0-.3-.1-.5-.1-1.2 0-2.3 1-2.6 2.4-.4 1.7.4 3.2 1.7 3.5zm-.7-3.2c.2-1 .9-1.6 1.7-1.6h.3c.8.2 1.2 1.2 1 2.3-.2 1-.9 1.6-1.7 1.6h-.3c-.8-.2-1.3-1.3-1-2.3zM9.2 10h.4c.6-.1 1.1-.5 1.4-1 .4-.7.6-1.6.4-2.4-.3-1.4-1.4-2.5-2.6-2.5h-.4c-.5.1-1.1.5-1.4 1-.4.7-.6 1.5-.4 2.4C6.9 9 8 10 9.2 10zm-.6-4.9h.2c.7 0 1.4.7 1.6 1.7.2 1.1-.3 2.1-1.1 2.2h-.1c-.7 0-1.5-.7-1.6-1.7-.3-1.1.2-2.1 1-2.2zm-1.5 7.1c.2-.8.1-1.7-.3-2.5C6.3 8.7 5.3 8 4.2 8c-.4 0-.7.1-1 .3-.5.3-.9.8-1.1 1.4-.2.8-.1 1.7.3 2.5.6 1 1.6 1.6 2.6 1.6.4 0 .7-.1 1-.3.6-.2 1-.7 1.1-1.3zm-1.5.5c-.2.1-.4.1-.6.1-.6 0-1.3-.4-1.7-1.2-.5-1-.4-2.1.4-2.5.2 0 .3-.1.5-.1.7 0 1.4.5 1.8 1.2.5 1 .3 2.1-.4 2.5zm16.5-3c-.2-.6-.6-1.1-1.1-1.4-.3-.2-.6-.3-1-.3-1 0-2 .7-2.6 1.7-.4.8-.5 1.7-.3 2.5.2.6.6 1.1 1.1 1.4.3.2.7.3 1 .3 1 0 2-.7 2.6-1.7.5-.9.6-1.8.3-2.5zM21 11.6c-.4.7-1.1 1.2-1.7 1.2-.2 0-.4 0-.6-.1-.7-.4-.9-1.5-.4-2.5.4-.7 1.1-1.2 1.7-1.2.2 0 .4 0 .6.1.7.5.9 1.6.4 2.5z"
                            fill="#37454D"
                          />
                        </svg>
                        Pets
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="avail-hotel-price">
                <span>Average price: €120</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvailHotelCard;
