import React from "react";

import HomesGuestLovesUl from "./HomesGuestLovesUl";

const HomesGuestLovesCards = (props) => {
    return (
        <div className={props.className}>
            <HomesGuestLovesUl className='homes-list'/>
        </div>
    )
}

export default HomesGuestLovesCards;