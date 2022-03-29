import React from "react";
import "./Featured.css";
import Carousel from "react-bootstrap/Carousel";
import image from "../../assets/download.jpg";

function Featured() {
  return (
    <div className="featured">
      <div className="featured-h">
        <h2>Featured Work</h2>
      </div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={image} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="btn-services">
        <button>
          VIEWS MORE
          <span>{/* <img style={{ width: "4px" }} src={errow}></img> */}</span>
        </button>
      </div>
    </div>
  );
}

export default Featured;
