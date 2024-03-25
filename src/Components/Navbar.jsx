import React from "react";

import Logo from "../assets/PassimoLOGOTrimmed.png";
import Toggle from "../Components/Toggle";

import "./Navbar.css";

const phoneNumber = "(613) 581-2243";

const Navbar = ({ language, handleToggle }) => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="nav-container">
      <img className="nav-logo" src={Logo}></img>

      <div className="nav-link-container">
        <Toggle language={language} handleToggle={handleToggle} />
        <a
          className="nav-phone"
          href={`tel:${phoneNumber}`}
          onClick={handlePhoneClick}
        >
          {phoneNumber}
        </a>
        {/* <div className="nav-phone">(613) 581-2243</div> */}
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <a
        href="https://www.picktime.com/d5bc7e33-2478-4551-89aa-c13bea9b99fe"
        className="ptbkbtn"
        target="_blank"
        // style={{"float:none;"}}
      >
        <img
          className="bkbtnimg"
          border="none"
          src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-gray.png"
          alt="Book an appointment with Passimo"
        />
      </a> */
}
