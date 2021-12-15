import data from "../constants/content";
import React from "react";

const HotelImage = () => {
    return data.map(item => <img src={item.imageUrl} alt={item.name}/>)
}


export default HotelImage;