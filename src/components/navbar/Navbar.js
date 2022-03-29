import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";
import Sales from "../../assets/Salesforce-Cardeee.svg";
import dropdown from "../../assets/icons8-down-24.png";

function Navbar() {
  return (
    <>
      <nav className="navbar1">
        <div className="logo">
          <img src={logo} />
        </div>

        <ul className="nav-links">
          <div className="menu">
            <li className="services">
              <div className="dropdown-img">
                <div>
                  {" "}
                  <a href="/">Services</a>
                </div>
                <div style={{ paddingTop: "2px", paddingLeft: "8px" }}>
                  <img src={dropdown} />
                </div>
              </div>

              <div className="dropdown1">
                <div className="row">
                  <div className="column1">
                    <img src={Sales} />

                    <a style={{ fontSize: "12px" }} href="#">
                      “tkxel Among Best <br />
                      Salesforce Solution Providers”
                    </a>
                    <a style={{ fontSize: "9px", color: "blue" }} href="#">
                      July 14th, 2020
                    </a>
                  </div>

                  <div className="column">
                    <h3>Software Development</h3>
                    <a href="#">Custom Software Development</a>
                    <a href="#">Web App Development</a>
                    <a href="#">Mobile App Development</a>
                    <a href="#">UI/UX Design</a>
                    <a href="#">QA & Testing</a>
                    <a href="#">Embedded Software</a>
                    <a href="#">Development Services</a>
                    <a href="#">DevOps</a>
                    <a href="#">Discovery Workshop</a>
                  </div>
                  <div className="column">
                    <h3>Solutions</h3>
                    <a href="#">Salesforce</a>
                    <a href="#">ServiceNow</a>
                    <a href="#">MuleSoft</a>
                    <a href="#">AWS</a>
                    <a href="#">Cyber Security</a>
                    <a href="#">BPO</a>
                    <a href="#">Shopify</a>
                  </div>
                  <div className="column">
                    <h3>Emerging Technologies</h3>
                    <a href="#">Data Science & AI</a>
                    <a href="#">Blockchain</a>
                    <a href="#">Internet of Things</a>
                    <a href="#">AR/VR</a>
                    <a href="#">Robotic Process Automation</a>
                    <a href="#">E-learning</a>
                    <a href="#">Healthcare</a>
                  </div>
                  <div className="column2">
                    <h3>Engagement Models</h3>
                    <a href="#">Build Your Dedicated Teams</a>
                    <a href="#">Fixed Price Project</a>
                    <h3>By Role</h3>
                    <p>CEO</p>
                    <p>CTO/CIO</p>
                    <p>COO</p>
                    <p>Product Manager</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="/">Clients</a>
            </li>

            <li>
              <a href="/">Company</a>
            </li>

            <li>
              <a href="/">Podcasts</a>
            </li>

            <li>
              <a href="/">Clients</a>
            </li>

            {/* <li className="resources">
              <a href="/">Resources</a>

              <ul className="dropdown-2">
                <li>
                  <a href="/">Blogs </a>
                </li>
                <li>
                  <a href="/">News</a>
                </li>
                <li>
                  <a href="/">Media</a>
                </li>
              </ul>
            </li> */}

            <div className="contact-btn">
              <button>Contact</button>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
