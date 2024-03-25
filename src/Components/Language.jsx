import React from "react";
import Logo from "../assets/PassimoLOGOTrimmed.png";
import "./Language.css";

const Language = ({ handleClick, setOverlayActive }) => {
  const handleLanguageClick = (event) => {
    handleClick(event);
    setOverlayActive(false); // Close overlay when language is selected
  };

  return (
    <div className="language-modal-container">
      <div className="modal-logo">
        <img className="modal-logo" src={Logo} alt="Logo" />
        <p className="modal-text">Please select a language</p>
        <div className="modal-button-container">
          <button
            id="english"
            className="modal-button english-button"
            onClick={handleLanguageClick}
          >
            English
          </button>
          <button
            id="french"
            className="modal-button french-button"
            onClick={handleLanguageClick}
          >
            Français
          </button>
        </div>
      </div>
    </div>
  );
};

export default Language;
