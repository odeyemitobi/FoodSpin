import React from "react";
import "../components.css";
import FS from "../../assets/img/Spinlogo.png";
import BAG from "../../assets/img/Bag.png";
import BG from "../../assets/pic/Bgcircle 1.png";

function NavBar() {
  return (
    <div className="w-full ">
      <div className="absolute">
        <img className="ml-[28rem]" src={BG} alt="" />
      </div>
      <nav className="relative pl-40 pr-24 py-10 flex justify-between">
        <div>
          <img className="" src={FS} alt="" />
        </div>
        <ul className="flex pr-20 py-1">
          <li className="px-8 text-[14px] font-medium">Breakfast</li>
          <li className="px-8 text-[14px] font-medium">Lunch</li>
          <li className="px-8 text-[14px] font-medium">Dinner</li>
        </ul>
        <div>
          <img src={BAG} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;