import React from "react";

import { BsArrowBarRight } from "react-icons/bs";
import { BsArrowBarLeft } from "react-icons/bs";
import fieldlogo from "./assets/fieldlogo.png";
import photo from "./assets/photo.jpeg";
import { BsFilter } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar flex">
      <div className="left flex">
        <div className="icon-wrap flex">
          <BsArrowBarLeft className="left-icon" />
          <BsArrowBarRight className="right-icon" />
        </div>
        <img src={fieldlogo} alt="logo" className="logo" />
        <div className="nav-heading">Map Landing</div>
      </div>
      <div className="right flex">
        <div className="filter-wrap flex">
          <BsFilter className="filter-icon" />
          <div className="text">Filters</div>
        </div>
        <div className="notify flex">
          <FaBell className="notify-icon" />
          <div className="redcircle"></div>
        </div>
        <img src={photo} alt="profile" className="profile" />
      </div>
    </div>
  );
}

export default Navbar;
