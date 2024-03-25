import React from "react";

import LOGO from "../assets/PassimoLOGOTrimmed.png";
import FB from "../assets/facebook.png";
import IG from "../assets/instagram.png";
import Info from "../Components/Info";
import Packages from "../Components/Packages";
import Addons from "../Components/Addons";

import "./Landing.css";

const Landing = ({ language }) => {
  return (
    <>
      <div className="landing-container">
        <div className="social-container">
          <a
            href="https://www.instagram.com/passimo.esthethique/"
            target="_blank"
          >
            <img src={IG} className="social-link" />
          </a>
          <a href="https://www.facebook.com/PassimoOutaouais" target="_blank">
            <img src={FB} className="social-link" />
          </a>
        </div>
        {language === "english" ? (
          <p className="landing-slogan">Spoil Your Car At Home</p>
        ) : (
          <p className="landing-slogan">Gâtez Votre Bolide à Domicile</p>
        )}

        <img className="logo" src={LOGO}></img>
        {language === "english" ? (
          <h2 className="landing-subtitle">CAR WASH</h2>
        ) : (
          <h2 className="landing-subtitle">LAVE AUTO</h2>
        )}
      </div>
      <Info language={language} />
      <Packages language={language} />
      <Addons language={language} />
    </>
  );
};

export default Landing;
