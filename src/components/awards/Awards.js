import React from "react";
import "./Awards.css";
import Carousel from "react-bootstrap/Carousel";
import image from "../../assets/download.jpg";

function Awards() {
  return (
    <div className="awards">
      <div className="awards-wraper">
        <div className="wraper-inner">
          <div className="container-slider">
            <h2 className="home-heading">Achievements & Awards</h2>
          </div>
          <div className="inner-slider">
            <div className="achivement-slider">
              <Carousel variant="dark">
                <Carousel.Item>
                  <img className="d-block w-20" src={image} alt="First slide" />
                  <br />
                  <img className="d-block w-20" src={image} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-20"
                    src={image}
                    alt="Second slide"
                  />
                  <br />
                  <img
                    className="d-block w-20"
                    src={image}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-20" src={image} alt="Third slide" />
                  <br />
                  <img className="d-block w-20" src={image} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="container-full">
            <div className="contact-wraper">
              <div className="small-heading">
                <p>Contact Us</p>
                <h2 className="main-h">Let's get started!</h2>
              </div>

              <div className="contact-grid">
                <div className="con-grid1">
                  <form>
                    <div className="form-elemet">
                      <div className="question">
                        <option value="How can we help you?">
                          How can we help you?
                        </option>
                      </div>

                      <div className="question1"></div>

                      <div className="name">
                        <span style={{ position: "relative" }}>
                          <input type="text" placeholder="Name"></input>
                        </span>
                      </div>
                      <div className="name">
                        <span style={{ position: "relative" }}>
                          <input type="email" placeholder="Email"></input>
                        </span>
                      </div>
                      <div className="name">
                        <span style={{ position: "relative" }}>
                          <input type="number" placeholder="Phone"></input>
                        </span>
                      </div>

                      <div className="name">
                        <span style={{ position: "relative" }}>
                          <input type="text" placeholder="Organization"></input>
                        </span>
                      </div>

                      <div className="name">
                        <textarea type="text" placeholder="Message"></textarea>
                      </div>

                      <div></div>

                      <div className="check">
                        <label>
                          <input type="checkbox"></input>
                          <span style={{ paddingLeft: "2px" }}>
                            Check here to subscribe for updates.
                          </span>
                        </label>
                      </div>
                      <div></div>

                      <div className="btn-submit">
                        <button>SEND</button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="con-grid1">
                  <div className="badges">
                    <a>
                      <img src="https://clutch.co/profile/tkxel" />
                    </a>
                    <a>
                      <img src="https://clutch.co/profile/tkxel" />
                    </a>
                  </div>
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
