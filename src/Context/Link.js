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
        <div className={`Nav ${menuOpen ? "open show" : ""}`}>
          <div className="header-content">
            <div className="logo">
              <h2>
                <span className="the">THE</span>
                <span className="Ser">SRIEN</span>
              </h2>
            </div>
            <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />

            <ul className={`menu ${menuOpen ? "open" : ""}`}>
              <li>
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
        <div className="footer-content">
          <p>&copy; 2023 Shriyansh Kumar</p>
        </div>
        <div className="NavIcons">
          <div className="leftNav">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="icons">
            <h2>
              <i className="fa-brands fa-square-instagram"></i>
            </h2>
            <h2>
              <i className="fa-brands fa-github"></i>
            </h2>
            <h2>
              <i className="fa-brands fa-facebook"></i>
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NavBar;
