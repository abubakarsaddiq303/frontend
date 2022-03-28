import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} />
        </div>

        <ul className="nav-links">
          <div className="menu">
            <li className="services">
              <a href="/">Services</a>

              <div className="dropdown">
                <div class="row">
                  <div class="column1">
                    <h3>Category 1</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>

                  <div class="column">
                    <h3>Software Development</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                  <div class="column">
                    <h3>Solutions</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                  <div class="column">
                    <h3>Emerging Technologies</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                  <div class="column1">
                    <h3>Engagement Models</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
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
