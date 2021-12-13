import HomesGuestLovesHeader from "./HomesGuestLovesHeader";
import HomesGuestLovesCards from "./HomesGuestLovesCards";
import HomesGuestLovesButtons from "./HomesGuestLovesButtons";
import React from "react";

const Container = (props) => {
    return (
        <div className={props.className}>
            <HomesGuestLovesHeader className='homes-block-header'/>
            <HomesGuestLovesCards className='homes-block-cards'/>
            <HomesGuestLovesButtons className="homes-block-nav"/>
        </div>
    )
}

export default Container;