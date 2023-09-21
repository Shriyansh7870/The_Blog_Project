import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContextApi from "./ContextApi";
import Home from "../Component/Home";
import Fitness from "../Component/Fitness";
import Technology from "../Component/Technology";
import Food from "../Component/Food";
import Bollywood from "../Component/Bollywood";
import Hollywood from "../Component/Hollywood";
import Navigate from "../Component/Navigate";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <BrowserRouter>
        <div className="logo">
          <div class="final">
            <div className="the">The</div>
            <div className="siren">Siren</div>
          </div>

          <div className={`Nav ${menuOpen ? "open show" : ""}`}>
            <div className="header-content">
              <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />

              <ul className={`menu ${menuOpen ? "open" : ""}`}>
                <li className="color1">
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/Fitness"}>Fitness</Link>
                </li>
                <li>
                  <Link to={"/Technology"}>Technology</Link>
                </li>
                <li>
                  <Link to={"/Bollywood"}>Bollywood</Link>
                </li>
                <li>
                  <Link to={"/Hollywood"}>Hollywood</Link>
                </li>
                <li>
                  <Link to="/Food">Food</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ContextApi>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bollywood" element={<Bollywood />} />
            <Route path="/Hollywood" element={<Hollywood />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/Fitness" element={<Fitness />} />
            <Route path="/Food" element={<Food />} />
            <Route path="/Navigate/:id" element={<Navigate />} />
          </Routes>
        </ContextApi>
      </BrowserRouter>
      <footer>
        <div className="NavIcons">
          <div className="leftNav">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <p className="footer-content">&copy; 2023 Shriyansh Kumar</p>
          <div className="icons">
            <h2>
              <a
                href="https://www.instagram.com/shriyansh7870/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </h2>
            <h2>
              <a
                href="https://github.com/Shriyansh7870"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </h2>
            <h2>
              <a
                href="https://www.linkedin.com/in/shri7870/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NavBar;
