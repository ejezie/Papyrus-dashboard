import React from "react";

import { AiFillHome } from "react-icons/ai";
import { SiMapbox } from "react-icons/si";
import { BsCalendarEvent } from "react-icons/bs";
import { GiHouse } from "react-icons/gi";
import { BsFillFlagFill } from "react-icons/bs";
import { MdSell } from "react-icons/md";
import { GiTimeTrap } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { RiBriefcase4Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Sidebar({sideBar}) {
  return (
    <div className={`sidebar ${sideBar && "draw-sidebar"}`}>
      <div className="wrap no-border bg-red flex">
        <div className="sub-wrap flex">
          <AiFillHome className="icon" />
          <div className="text">Map Landing</div>
        </div>
      </div>
      <div className="wrap no-border bg-grey flex">
        <div className="sub-wrap flex">
          <SiMapbox className="icon" />
          <div className="text">Maps</div>
        </div>
      </div>
      <div className="wrap flex">
        <div className="sub-wrap flex">
          <BsCalendarEvent className="icon" />
          <div className="text">Calendar</div>
        </div>
      </div>
      <div className="wrap flex">
        <div className="sub-wrap flex">
          <GiHouse className="icon" />
          <div className="text">Outlets</div>
        </div>
        <IoIosArrowDown className="icn" />
      </div>
      <div className="wrap flex">
        <div className="sub-wrap flex">
          <BsFillFlagFill className="icon" />
          <div className="text">Visits</div>
        </div>
        <IoIosArrowDown className="icn" />
      </div>
      <div className="wrap flex">
        <div className="sub-wrap flex">
          <MdSell className="icon" />
          <div className="text">Sales & Order</div>
        </div>
        <IoIosArrowDown className="icn" />
      </div>
      <div className="wrap flex">
        <div className="sub-wrap flex">
          <MdSell className="icon" />
          <div className="text">Product Availability</div>
        </div>
        <IoIosArrowDown className="icn" />
      </div>
      <div className="wrap flex">
        <div className="sub-wrap flex">
          <GiTimeTrap className="icon" />
          <div className="text">Inventory Management</div>
        </div>
        <IoIosArrowDown className="icn" />
      </div>
      <div className="wrap flex">
        <div className="sub-wrap flex">
          <BiTask className="icon" />
          <div className="text">Marchandising</div>
        </div>
        <IoIosArrowDown className="icn" />
      </div>
      <div className="wrap flex">
        <div className="sub-wrap flex">
          <RiBriefcase4Line className="icon" />
          <div className="text">Survey</div>
        </div>
        <IoIosArrowDown className="icn" />
      </div>
      <div className="wrap flex">
        <div className="sub-wrap flex">
          <FiSettings className="icon" />
          <div className="text">Actions & Settings</div>
        </div>
        <IoIosArrowDown className="icn" />
      </div>
      <div className="wrap no-border flex">
        <div className="sub-wrap flex">
          <IoIosHelpCircle className="icon" />
          <div className="text">Help</div>
        </div>
        {/* <IoIosArrowDown className="icn" /> */}
      </div>
    </div>
  );
}

export default Sidebar;
