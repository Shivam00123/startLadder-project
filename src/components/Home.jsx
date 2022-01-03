import React, { useState } from "react";
import "../styles/home.css";
import QuizBoard from "./QuizBoard";
import StartLadderLogo from "../assets/Images/startLadder.png";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="home">
      <div className={showMenu ? "menuBar" : "navBar"}>
        <div className="navWrapper">
          <div className="logoContainer">
            <img alt="logo" src={StartLadderLogo} />
          </div>
          {showMenu ? (
            <ImCross className="icon" onClick={() => setShowMenu(false)} />
          ) : (
            <FaBars className="icon" onClick={() => setShowMenu(true)} />
          )}
        </div>
        <nav className={showMenu ? "menubar" : "nav"}>
          <ul>
            <li className="navItem">Programs</li>
            <li className="navItem">Live Projects</li>
            <li className="navItem">Community</li>
            <li className="navItem">Jobs</li>
            <li className="navItem" style={{ marginBottom: "20px" }}>
              About
            </li>
          </ul>
        </nav>
      </div>
      <QuizBoard />
    </div>
  );
}

export default Home;
