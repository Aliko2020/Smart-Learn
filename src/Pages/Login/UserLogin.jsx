import React from "react";
import LoginAs from "./LoginAs";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";


const UserLogin = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-16">
      <section className="flex justify-center items-center gap-2 mt-8">
        <p className="text-lg">Login in as</p>
        <LoginAs />
      </section>
      <form className="justify-center text-center mt-4">
        <div className="flex flex-col gap-2">
          <div className=" flex gap-2 items-center bg-[#EAEAEA] rounded-md p-4">
            <div className="flex gap-1 items-center">
            <CiUser size={25} />
            <label htmlFor="UserName">UserName:</label>
            </div>
            <input className="bg-[#EAEAEA]" type="text" />
          </div>
          <div className=" flex gap-2 items-center bg-[#EAEAEA] rounded-md p-4">
            <div className="flex gap-1 items-center">
            <CiLock size={25} />
            <label htmlFor="UserName">Password:</label>
            </div>
            <input className="bg-[#EAEAEA]" type="text"/>
          </div>
          
        </div>
        <button className="bg-[#EAEAEA] rounded-md px-12 py-4 my-4"><Link to="/studentpage" className="mt-8 bg-[#EAEAEA] rounded-md px-12 py-4 my-4">Login</Link></button>
        <p className="">
          Dont have an account? <Link to="/signup" className="font-bold text-[#1C2A53]">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;