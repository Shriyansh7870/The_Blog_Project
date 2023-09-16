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
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="Nav">
          <div className="logo">
            <h2>
              <span>THE</span>
              <span className="Ser">SERIEM</span>
            </h2>
          </div>
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link "
            }
          >
            <ul>
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
          <div className="Social-media">
            <ul className="social-media-desktop">
              <li>
                <Link
                  to={"https://www.instagram.com/shriyansh7870/"}
                  target="_newPage"
                >
                  <FaInstagramSquare className="Instragram"></FaInstagramSquare>
                </Link>
              </li>
              <li>
                <Link to={"https://github.com/Shriyansh7870"} target="_newPage">
                  <FaGithubSquare className="Github"></FaGithubSquare>
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.linkedin.com/in/shri7870/"}
                  target="_newPage"
                >
                  <FaLinkedinIn className="linkdin"></FaLinkedinIn>
                </Link>
              </li>
            </ul>
            <div className="hamburger-menu">
              <Link to={"#"} onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu></GiHamburgerMenu>
              </Link>
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
        <div className="footer-content">
          <p>&copy; 2023 Shriyansh Kumar</p>
        </div>
      </footer>
    </>
  );
};

export default NavBar;
