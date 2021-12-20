import React from "react";
import data from "../constants/content";


const HotelImage = () => {
    return data.map(item => <img src={item.imageUrl} alt={item.name}/>)
}


export default HotelImage;