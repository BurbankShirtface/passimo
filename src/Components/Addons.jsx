import React from "react";

import InteriorShampoo from "../assets/interiorFront.png";
import Polishing from "../assets/polishing.png";
import Sealant from "../assets/shineFrontFender.png";
import FabricLeather from "../assets/interiorFrontSeats.png";
import AntiRain from "../assets/antiRain.png";
import Engine from "../assets/engineClean.jpg";

import "./Addons.css";

const Addons = ({ language }) => {
  return (
    <>
      {language === "english" ? (
        <div className="addon-section-container">
          {/* <a
            href="https://www.picktime.com/d5bc7e33-2478-4551-89aa-c13bea9b99fe"
            className="ptbkbtn"
            target="_blank"
            // style={{"float:none;"}}
          >
            <img
              className="bkbtnimg-addons"
              border="none"
              src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-black.png"
              alt="Book an appointment with Passimo"
            />
          </a> */}
          <h1 className="addon-section-title">Add-ons:</h1>
          <div className="addon-container">
            {/* <div className="addon-card">
              <img src={InteriorShampoo} className="addon-card-img" />
              <h2 className="addon-title">Complete Shampoo</h2>
              <p className="addon-price">$160</p>
            </div> */}
            {/* <div className="addon-card">
              <img src={Polishing} className="addon-card-img" />
              <h2 className="addon-title">Polishing</h2>
              <p className="addon-price">$100</p>
            </div> */}
            <div className="addon-card">
              <img src={Sealant} className="addon-card-img" />
              <h2 className="addon-title">Paint Sealant/Wax</h2>
              <p className="addon-price">$100</p>
            </div>
            {/* <div className="addon-card">
              <img src={FabricLeather} className="addon-card-img" />
              <h2 className="addon-title">Upholstery & Leather Treatment</h2>
              <p className="addon-price">$50</p>
            </div> */}
            <div className="addon-card">
              <img src={AntiRain} className="addon-card-img" />
              <h2 className="addon-title">AQUAVELOX - Glass Protection</h2>
              <p className="addon-price">$30</p>
            </div>
            <div className="addon-card">
              <img src={Engine} className="addon-card-img" />
              <h2 className="addon-title">Engine Cleaning</h2>
              <p className="addon-price">$100</p>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      ) : (
        <div className="addon-section-container">
          {/* <a
            href="https://www.picktime.com/d5bc7e33-2478-4551-89aa-c13bea9b99fe"
            className="ptbkbtn"
            target="_blank"
            // style={{"float:none;"}}
          >
            <img
              className="bkbtnimg-addons"
              border="none"
              src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-black.png"
              alt="Book an appointment with Passimo"
            />
          </a> */}
          <h1 className="addon-section-title">Modules complémentaires:</h1>
          <div className="addon-container">
            <div className="addon-card">
              <img src={InteriorShampoo} className="addon-card-img" />
              <h2 className="addon-title">Shampoing Complet</h2>
              <p className="addon-price">$160</p>
            </div>
            <div className="addon-card">
              <img src={Polishing} className="addon-card-img" />
              <h2 className="addon-title">Polissage</h2>
              <p className="addon-price">$100</p>
            </div>
            <div className="addon-card">
              <img src={Sealant} className="addon-card-img" />
              <h2 className="addon-title">Scellant/cire pour peinture</h2>
              <p className="addon-price">$150</p>
            </div>
            <div className="addon-card">
              <img src={FabricLeather} className="addon-card-img" />
              <h2 className="addon-title">
                Traitement des tissus d'ameublement et du cuir
              </h2>
              <p className="addon-price">$50</p>
            </div>
            <div className="addon-card">
              <img src={AntiRain} className="addon-card-img" />
              <h2 className="addon-title">AQUAVELOX - Protection des Verres</h2>
              <p className="addon-price">$30</p>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      )}
    </>
  );
};

export default Addons;
