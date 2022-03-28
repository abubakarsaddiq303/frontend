import React from "react";
import "./Hero.css";
import hero from "../../assets/11-01.jpg";
import Nokia from "../../assets/nokia-logo.png";

function Hero() {
  return (
    <div className="container">
      <img src={hero} />
      <div className="heading">
        <h1>We Engineer Software Solutions</h1>
        <div className="parag">
          <p>Enterprises . Growth Companies . Startups</p>
        </div>
        <div className="btn-talk">
          <button>LET'S TALK</button>
        </div>
      </div>
      <div className="sub-container">
        <div className="img-1">
          <img src={Nokia} />
        </div>
        <div className="img-1">
          <img src={Nokia} />
        </div>
        <div className="img-1">
          <img src={Nokia} />
        </div>
        <div className="img-1">
          <img src={Nokia} />
        </div>
        <div className="img-1">
          <img src={Nokia} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
