import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {

    function getCurrentDate() {
        const date = new Date();
        const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();
        return { dayOfWeek, day, month, year };
      }
      const { dayOfWeek, day, month, year } = getCurrentDate();
  return (
    <header className="flex justify-between items-center p-4 bg-[#EAEAEA]">
      <div className="flex flex-col">
        <span>
          <h3>Dashboard</h3>
        </span>
        <span className="hidden sm:block">
          <p className="flex gap-1 items-center">
            <span className="font-semibold text-[#1C2A53]">{dayOfWeek}</span>
            <span>{day}</span>
            <span>{month},</span>
            <span>{year}.</span>
          </p>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          {" "}
          <IoIosNotificationsOutline size={25} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Link to="/editprofile">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Default avatar"
              />
            </Link>
            <div className="flex gap-2 cursor-pointer">
              <button className="bg-[#EAEAEA] text-[#1C2A53] py-1 ">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
