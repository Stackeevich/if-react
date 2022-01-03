import React, {Component} from 'react';
import data from "../../constants/content";
import bgImage from '../../bg-image.jpg'
import AvailHotel from "../AvailableHotels/AvailHotel";

class TopSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            array: [],
            display: 'none'
        }
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            value: event.target.value
        })
    }

    handleForm = (event) => {
        event.preventDefault();
        if (this.state.value === '') {
            this.setState({
                display: 'none'
            }, () => alert('Enter some value!'))
        } else {
            this.setState({
                array: data.filter(item => item.name.toLowerCase().includes(this.state.value.toLowerCase()) || item.country.toLowerCase().includes(this.state.value.toLowerCase()) || item.city.toLowerCase().includes(this.state.value.toLowerCase()))
            })
            this.setState({
                display: 'block'
            })
        }
    }

    render() {
        return (
            <>
                <section className="intro" style={{backgroundImage: `url(${bgImage})`}}>
                    <div className="container">
                        <h1 className="intro-title">Discover stays<br/>to live, work or just relax</h1>
                        <form action="#" className="form" method="post">
                            <div className="inputs">
                                <div className="search-form-group destination col-4 col-md-12 col-sm-6">
                                    <svg className="loupe-icon destination-loupe-icon" width="16" height="16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.4351 10.0629h-.7227l-.2561-.247c.8965-1.0429 1.4362-2.3968 1.4362-3.8696C11.8925 2.662 9.2305 0 5.9462 0 2.6622 0 0 2.662 0 5.9463c0 3.2841 2.662 5.9462 5.9463 5.9462 1.4728 0 2.8267-.5397 3.8696-1.4362l.247.2561v.7227L14.6369 16 16 14.6369l-4.5649-4.574zm-5.4889 0c-2.2778 0-4.1166-1.8388-4.1166-4.1167 0-2.2778 1.8388-4.1166 4.1166-4.1166 2.278 0 4.1167 1.8388 4.1167 4.1166 0 2.278-1.8388 4.1167-4.1167 4.1167z"
                                            fill="#BFBFBF"/>
                                    </svg>
                                    <input type="text" id="destination" name="destination" className="destination-form input-form" placeholder="New York" onChange={this.handleInput} required/>
                                        <label className="label label-1" htmlFor="destination">Your destination or hotel name</label>
                                </div>
                                <div className="search-form-group dates col-3 col-md-6 col-sm-6">
                                    <input type="text" id="date1" className="date-form input-form" placeholder="Tue 15 Sept"/>
                                        <label className="label label-2" htmlFor="date1">Check-in</label>
                                        <input type="text" id="date2" className="date-form input-form" placeholder="Sat 19 Sept"/>
                                            <label className="label label-3" htmlFor="date2">Check-out</label>
                                            <label className="label check-label-desktop" htmlFor="date1">Check-in — Check-out</label>
                                </div>
                                <div className="persons search-form-group col-3 col-md-6 col-sm-6">
                                    <div id="persons">
                                        <span className="guests_count">
                                            <span id="adultsSpan">2 Adults</span>
                                            <span id="childrenSpan">&nbsp;—&nbsp; 0 Children</span>
                                            <span id="roomsSpan">&nbsp;—&nbsp; 1 Room</span>
                                        </span>
                                    </div>
                                    <div className="block" style={{display: 'none'}}>
                                        <div className="box">
                                            <div className="item" id="itemAdults">
                                                <span>Adults</span>
                                                <div className="choose" id="chooseAdults">
                                                    <input className="input" id="inputAdults" type="number" defaultValue="2" style={{display: 'none'}}/>
                                                        <button className="btn" id="btnAdultMinus" type="button">
                                                            <span>-</span>
                                                        </button>
                                                        <span id="adultsNum">2</span>
                                                        <button className="btn" id="btnAdultPlus" type="button">
                                                            <span>+</span>
                                                        </button>
                                                </div>
                                            </div>
                                            <div className="item" id="itemChildren">
                                                <span>Children</span>
                                                <div className="choose" id="chooseChildren">
                                                    <button className="btn disabled-btn" id="btnChildrenMinus"
                                                            type="button">
                                                        <span>-</span>
                                                    </button>
                                                    <span id="childrenNum">0</span>
                                                    <button className="btn" id="btnChildrenPlus" type="button">
                                                        <span>+</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="item" id="itemRooms">
                                                <span>Rooms</span>
                                                <div className="choose" id="chooseRooms">
                                                    <input className="input" id="inputRooms" type="number" defaultValue="1" style={{display: 'none'}}/>
                                                        <button className="btn" id="btnRoomsMinus" type="button">
                                                            <span>-</span>
                                                        </button>
                                                        <span id="roomsNum">1</span>
                                                        <button className="btn" id="btnRoomsPlus" type="button">
                                                            <span>+</span>
                                                        </button>
                                                </div>
                                            </div>
                                            <div className="child-age" style={{display: 'none'}}>
                                                <p className="child-age-span">What is the age of the child you’re
                                                    travelling with?</p>
                                                <div className="child-age-selection"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit col-2 col-md-12 col-sm-6">
                                    <input type="submit" id="submit" className="submit-form input-form" value="Search" onClick={this.handleForm}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section className='available-hotels' style={{display: this.state.display}}>
                    <div className="container">
                        <div className="homes-block-header">
                            <h3 className="h3-text">Available hotels</h3>
                        </div>
                        <div className="homes-block-cards">
                            <ul className="homes-list">
                                <AvailHotel props={this.state.array}/>
                            </ul>
                        </div>
                        <div className="homes-block-nav">
                            <button id="hgl-leftBtn" className="homes-nav-btn">
                                &#x3c;
                            </button>
                            <button id="hgl-rightBtn" className="homes-nav-btn">
                                &#x3e;
                            </button>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default TopSection;
