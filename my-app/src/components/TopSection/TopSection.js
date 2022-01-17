import React, { Component } from 'react';
import { SwiperSlide } from 'swiper/react';
import bgImage from '../../bg-image.jpg';
import AvailHotel from '../AvailableHotels/AvailHotel';
import Carousel from '../HomesGuestLoves/Carousel';
import 'swiper/swiper-bundle.css';
import '../../style.css';
import Calendar from './Calendar/Calendar';
import Filter from './Filter/Filter';

const availableHotelsRef = React.createRef();

class TopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      array: [],
      display: 'none',
      isClicked: false,
      quantityAdult: 1,
      quantityRooms: 1,
      quantityChildren: 0,
    };
  }

  addFilter = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
    console.log('addFilter work');
  };

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      value: event.target.value.trim(),
    });
  };

  handleFetch = () => {
    const url = new URL('https://fe-student-api.herokuapp.com/api/hotels');
    const params = { search: this.state.value };
    url.search = new URLSearchParams(params).toString();

    fetch(url.toString())
      .then((response) => response.json())
      .then((result) =>
        this.setState(
          {
            array: result.filter(
              (item) =>
                item.name.toLowerCase().includes(this.state.value.toLowerCase()) ||
                item.country.toLowerCase().includes(this.state.value.toLowerCase()) ||
                item.city.toLowerCase().includes(this.state.value.toLowerCase())
            ),
          },
          () => this.handleValidation()
        )
      );
  };

  handleValidation = () => {
    if (this.state.array.length === 0) {
      alert('There is no matches!');
      this.setState({
        display: 'none',
      });
    }
  };

  handleForm = (event) => {
    event.preventDefault();
    if (this.state.value === '' || this.state.value === ' ' || this.state.value === '  ') {
      this.setState(
        {
          display: 'none',
        },
        () => alert('Enter some value!')
      );
    } else {
      this.handleFetch();
      this.setState(
        {
          display: 'block',
        },
        () => availableHotelsRef.current.scrollIntoView({ behavior: 'smooth' })
      );
    }
  };

  getAdultQuantity = (val) => {
    this.setState({
      quantityAdult: val,
    });
  };

  getRoomsQuantity = (val) => {
    this.setState({
      quantityRooms: val,
    });
  };

  getChildrenQuantity = (val) => {
    this.setState({
      quantityChildren: val,
    });
  };

  render() {
    return (
      <>
        <section className="intro" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="container">
            <h1 className="intro-title">
              Discover stays
              <br />
              to live, work or just relax
            </h1>
            <form action="#" className="form" method="post">
              <div className="inputs">
                <div className="search-form-group destination col-4 col-md-12 col-sm-6">
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    className="destination-form input-form"
                    placeholder="New York"
                    onChange={this.handleInput}
                    required
                  />
                  <label className="label label-1" htmlFor="destination">
                    Your destination or hotel name
                  </label>
                </div>
                <Calendar />
                <div className="persons search-form-group col-3 col-md-6 col-sm-6">
                  <div id="persons">
                    <span onClick={this.addFilter} className="guests_count">
                      <span id="roomsSpan">{this.state.quantityAdult} Adult</span>
                      <span id="childrenSpan">
                        &nbsp;—&nbsp; {this.state.quantityChildren} Children
                      </span>
                      <span id="roomsSpan">&nbsp;—&nbsp; {this.state.quantityRooms} Room</span>
                    </span>
                  </div>
                  <Filter
                    isClicked={this.state.isClicked}
                    sendAdultData={this.getAdultQuantity}
                    sendRoomsData={this.getRoomsQuantity}
                    sendChildrenData={this.getChildrenQuantity}
                  />
                </div>
                <div className="submit col-2 col-md-12 col-sm-6">
                  <input
                    type="submit"
                    id="submit"
                    className="submit-form input-form"
                    value="Search"
                    onClick={this.handleForm}
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
        <section
          className="available-hotels"
          style={{ display: this.state.display }}
          ref={availableHotelsRef}
        >
          <div className="container">
            <div className="homes-block-header">
              <h3 className="h3-text">Available hotels</h3>
            </div>
            <Carousel
              slides={this.state.array.map((el, index) => (
                <SwiperSlide
                  key={index.toString()}
                  tag="li"
                  className="homes-list-item col-3 col-md-6 col-sm-3"
                >
                  <AvailHotel
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
        </section>
      </>
    );
  }
}

export default TopSection;
