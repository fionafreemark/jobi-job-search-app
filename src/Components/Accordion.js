// Modules
import React, { useState } from 'react';
// Assets
import DownArrow from "../assets/icons/down-arrow.svg"
import UpArrow from "../assets/icons/up-arrow.svg"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
      <div className="accordion-container">
        <button className="accordion-header" onClick={() => setIsActive(!isActive)}>
          <h4>{title}</h4>
          {!isActive ? <img src={DownArrow} alt="" /> : <img src={UpArrow} alt="" />}
        </button>
        {isActive && <div className="accordion-content"><p>{content}</p></div>}
      </div>
  );
};

export default Accordion;
