import React from "react";
import "./Awards.css";

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
              <div className="swiper-wriper"></div>
            </div>
          </div>
          {/* <div className="container-full"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Awards;
