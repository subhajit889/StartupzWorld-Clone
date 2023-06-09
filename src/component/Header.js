import React from "react";
import "../styles/header.css";
import { SlMagnifier } from "react-icons/sl";

const Header = () => {
  return (
    <div className="header" >
      <div className="leftSide">
        <h1 className="fontMax">Discover</h1>
        <p className="fontMax">amazing startups</p>
        <p className="ref-para">Find great startups curated by our experts for investing.</p>
        <div className="inputBox">
          <p>Startup Name</p>
          <form>
            <input
              placeholder="Ex: Nearbygrocer, Nykaa, etc"
            />
            <button><SlMagnifier/>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;