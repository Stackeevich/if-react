import React from "react";

const HomesGuestLovesBtn = (props) => {
    return (
        <>
            <button id="hgl-leftBtn" className={props.className}>
                &#x3c;
            </button>
            <button id="hgl-rightBtn" className={props.className}>
                &#x3e;
            </button>
        </>
    )
};

export default HomesGuestLovesBtn;