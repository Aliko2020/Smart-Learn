import React from "react";
import LoginAs from "./LoginAs";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";

const UserSign = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-16">
      <section className="flex justify-center items-center gap-2 mt-8">
        <p className="text-lg">Sign up as</p>
        <LoginAs />
      </section>
      <form className="justify-center text-center mt-4">
        <div className="flex flex-col gap-2">
          <div className=" flex gap-2 items-center bg-[#EAEAEA] rounded-md p-4">
            <div className="flex gap-1 items-center">
            <CiUser size={25} />
            <label htmlFor="UserName">FirstName:</label>
            </div>
            <input className="bg-[#EAEAEA]" type="text" />
          </div>
          <div className=" flex gap-2 items-center bg-[#EAEAEA] rounded-md p-4">
            <div className="flex gap-1 items-center">
            <CiUser size={25} />
            <label htmlFor="UserName">LastName:</label>
            </div>
            <input className="bg-[#EAEAEA]" type="text" />
          </div>
          <div className=" flex gap-2 items-center bg-[#EAEAEA] rounded-md p-4">
            <div className="flex gap-1 items-center">
            <CiLock size={25} />
            <label htmlFor="UserName">Password:</label>
            </div>
            <input className="bg-[#EAEAEA]" type="text" />
          </div>
        </div>
        <button className="bg-[#EAEAEA] rounded-md px-12 py-4 my-4">Sign up</button>
        <p className="">
           have an account? <Link to="/" className="font-bold text-[#1C2A53]">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default UserSign;