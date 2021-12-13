import React from "react";
import data from "../constants/content";
import Hotel from "./Hotel";

const Hotels = () => {
    return data.map(item => {
        return (
            <Hotel key={item.id} item={item}/>
        )
    })
};

export default Hotels;