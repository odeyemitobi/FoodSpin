import React from "react";
import "../components.css";
import FS from "../../assets/img/Spinlogo.png";
import BAG from "../../assets/img/Bag.png";

function NavBar() {
  return (
    <div className="w-full">
      <nav className="relative flex justify-between px-32 py-10">
        <div>
          <img className="" src={FS} alt="" />
        </div>
        <ul className="flex pr-[15rem] cursor-pointer py-1">
          <li className="px-8 text-[14px] font-medium">Breakfast</li>
          <li className="px-8 text-[14px] font-medium">Lunch</li>
          <li className="px-8 text-[14px] font-medium">Dinner</li>
        </ul>
        <div className="cursor-pointer">
          <img src={BAG} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
