import React, { useState } from "react";
import Display from "./Display";
import "../App.css";
const Wheather = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    const apiKey = "9b29b643b6bd100447fe754d3636067e";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })

      .catch((error) => console.error("Error fetching weather data:", error));
  };

  //open modal
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
    <div className="weather">
      <div className="heading-container">
        <h2 className="heading">Welcome to Cloud</h2>
      </div>
      <div className="datas">
        <div className="input">
          <input
            type="text"
            value={location}
            className="loco"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
        </div>
        <div className="btn" onClick={toggleModal}>
          <div className="btnoutput">
            <button onClick={handleSearch}>Search</button>
            {openModal && weatherData && <Display data={weatherData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheather;
