import React, { useState } from "react";
import "../App.css";
const Display = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="modal" onClick={toggleModal}>
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="name">
          <h2>{data.name}</h2>
        </div>
        <div className="temp">
          <p>Temperature: {data.main.temp}°C</p>
        </div>
        <div className="humidity">
          <p>Humidity: {data.main.humidity}%</p>
        </div>
        <div className="condition">
          <p>Conditions: {data.weather[0].description}</p>
        </div>
        <button className="close-modal" onClick={toggleModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Display;
