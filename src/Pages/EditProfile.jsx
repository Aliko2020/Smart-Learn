import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

const EditProfile = () => {

    const [showSuccess, setShowSuccess] = useState(true);
      
    const handleClose = () => {
        setShowSuccess(false);
    };
  return (
    <div className="flex justify-center">
    <div className="p-8">
      <header className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-[#1C2A53]">Account</h3>
        <section className="flex flex-col gap-2 mt-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Default avatar"
              />
              <div className="flex gap-4">
                <button className="bg-[#EAEAEA] font-semibold text-[#1C2A53] px-3 py-1 ">
                  Change
                </button>
                <button className="text-[#1C2A53]">Remove</button>
              </div>
            </div>
          </div>
          <div className="flex gap-2 p-2 bg-[#1C2A53] text-white rounded-sm mt-2">
            <span>Login as:</span>
            <span>Aliko Amos</span>
            <span>CPS 400</span>
          </div>
        </section>
      </header>

      <p className="mt-8 text-lg font-semibold text-[#1C2A53]">Edit Profile</p>

      <section className="flex flex-col sm:flex-row gap-4 my-4">
        <div className="flex flex-col gap-2 sm:w-full">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            className="appearance-none focus:outline-none w-full sm:flex-grow border rounded p-1 border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2 sm:w-full">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            className="appearance-none focus:outline-none w-full sm:flex-grow border rounded p-1 border-gray-300"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4 my-4">
        <div>
          <p className="font-semibold text-[#1C2A53]">Personal information</p>
          <p className="text-[#938b8b]">
            This information is optional, we need more about you{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-4 sm:w-full">
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                className="appearance-none focus:outline-none w-full sm:flex-grow border rounded p-1 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-4 sm:w-full">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                className="appearance-none focus:outline-none w-full sm:flex-grow border rounded p-1 border-gray-300"
              />
            </div>
          </div>
          {/* Removed the commented-out duplicate name inputs */}
        </div>
      </section>
      <button className="mt-4 bg-[#1C2A53] cursor-pointer font-semibold text-white rounded-sm px-3 py-2">
        Make Change
      </button>
      <div className={`absolute top-8 right-2 z-10 flex gap-2 bg-green-600 rounded-md text-white items-center p-4 ${showSuccess ? '' : 'hidden'}`}>
      <div>
        <FcApproval size={30} />
      </div>
      <div className="">
        <p className="font-semibold">Change made</p>
      </div>
      <div className="p-2 rounded-md cursor-pointer" onClick={handleClose}>
        <RxCross2 />
      </div>
    </div>
    </div>
    </div>
  );
};

export default EditProfile;