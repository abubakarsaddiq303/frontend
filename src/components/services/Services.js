import React from "react";
import "./Services.css";
import img1 from "../../assets/img1.svg";

function Services() {
  return (
    <div className="Services">
      <div className="services-container">
        <div className="head">
          <h2>Services We Offer</h2>
        </div>
        <div className="row">
          <div className="cards">
            <div className="card1">
              <div className="card-data">
                <img src={img1} />
                <div className="card-h">
                  <h3>Dedicated Teams</h3>
                </div>
                <div className="card-p">
                  <p>
                    We help you develop robust and reliable
                    <br /> Salesforce Solutions to surpass your <br /> business
                    expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="card-data">
                <img />
                <div className="card-h">
                  <h3>Dedicated Teams</h3>
                </div>
                <div className="card-p">
                  <p>
                    We help you develop robust and reliable
                    <br /> Salesforce Solutions to surpass your <br /> business
                    expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="card-data">
                <img />
                <div className="card-h">
                  <h3>Dedicated Teams</h3>
                </div>
                <div className="card-p">
                  <p>
                    We help you develop robust and reliable
                    <br /> Salesforce Solutions to surpass your <br /> business
                    expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="card-data">
                <img />
                <div className="card-h">
                  <h3>Dedicated Teams</h3>
                </div>
                <div className="card-p">
                  <p>
                    We help you develop robust and reliable
                    <br /> Salesforce Solutions to surpass your <br /> business
                    expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="card-data">
                <img />
                <div className="card-h">
                  <h3>Dedicated Teams</h3>
                </div>
                <div className="card-p">
                  <p>
                    We help you develop robust and reliable
                    <br /> Salesforce Solutions to surpass your <br /> business
                    expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="card-data">
                <img />
                <div className="card-h">
                  <h3>Dedicated Teams</h3>
                </div>
                <div className="card-p">
                  <p>
                    We help you develop robust and reliable
                    <br /> Salesforce Solutions to surpass your <br /> business
                    expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-services">
          <button>
            VIVEW ALL SEVICES
            <span>
              {/* <img style={{ width: "4px" }} src={errow}></img> */}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
