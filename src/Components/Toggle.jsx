import React from "react";

import "./Toggle.css";

const Toggle = ({ language, handleToggle }) => {
  // const isChecked = language === "english";
  const handleChange = () => {
    handleToggle(); // Call the handleToggle function passed from parent (App.js)
  };
  return (
    <div className="button-cover">
      <div className="button r" id="button-1">
        <input
          type="checkbox"
          className="checkbox"
          onChange={handleChange}
          checked={language === "english"}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </div>
  );
};

export default Toggle;
