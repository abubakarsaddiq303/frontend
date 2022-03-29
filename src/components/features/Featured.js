import React from "react";
import "./Featured.css";
import Carousel from "react-bootstrap/Carousel";
import image from "../../assets/download.jpg";
import embdimg1 from "../../assets/embd-dt-placeholder.webp";

function Featured() {
  return (
    <>
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
            <span>
              {/* <img style={{ width: "4px" }} src={errow}></img> */}
            </span>
          </button>
        </div>
      </div>
      <div className="section">
        <div className="embd-section">
          <div className="left-embd">
            <div className="embd-wrap">
              <div className="embd-text">
                <h3>Build Your Dedicated Teams</h3>
                <h4>Our teams at your service</h4>
                <p>
                  Get your projects fast-tracked with best technical and
                  management talent. Increase quality and efficiency, and retain
                  complete control of teams.
                </p>
                <a>BUILD YOUR TEAM </a>
              </div>
              <div className="embd-img1">
                <img src={embdimg1} />
              </div>
            </div>
          </div>
          <div className="right-embd">
            <div className="embd-wrap">
              <div className="embd-text">
                <h3>Fixed Price Project</h3>
                <h4>We design and develop your vision</h4>
                <p>
                  Get a comprehensive product development experience from design
                  to delivery with reduced development costs.
                </p>
                <a>DEVELOP YOUR PRODUCT </a>
              </div>
              <div className="embd-img2">
                <img src={embdimg1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
