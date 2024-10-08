import React, { useState, useEffect, useRef } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import SelecCourse from "./Mui/SelectCourse";
import AssigmentList from "./Mui/Table";
import { FcApproval } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import Header from "../Components/Header";


const StudentPage = () => {
  const [showSuccess, setShowSuccess] = useState(true);

  const handleClose = () => {
    setShowSuccess(false);
  };

  const onButtonClick = () => {
    inputFile.current.click();
    // Implement file upload here
  };

  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const inputFile = useRef(null);

  return (
    <div className="">
    <Header />
      <section className="flex flex-col sm:flex-row p-4 gap-4 justify-center">
        <div className="flex flex-col sm:min-w-[380px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-center items-center mb-4 min-h-[240px] bg-[#EAEAEA] p-4 rounded-lg order-1 sm:order-2">
              <label
                htmlFor="input"
                className="flex flex-col justify-center items-center mt-4"
              >
                <HiOutlineUpload size={30} />
                <button
                  className="p-2 text-center font-simibold"
                  onClick={onButtonClick}
                >
                  Upload File(PDF,DOX)
                </button>
              </label>
              <input type="file" ref={inputFile} className="hidden" />
            </div>
          </div>

          <div>
            <SelecCourse />
            <div className="flex flex-col gap-4 p-2">
              <label htmlFor="Description">Description:</label>
              <textarea
                className="appearance-none focus:outline-none w-full h-24 border rounded p-1 border-gray-300"
                name="description"
                placeholder="Optional"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>
          <div className="p-2">
            <button className="w-52 p-4 rounded-md text-white font-semibold mt-4 mb-4 bg-[#1C2A53]">
              Submit
            </button>
            {/* Confirmation bar */}
            <div
              className={`absolute top-28 right-2 z-10 flex gap-2 bg-green-600 rounded-md text-white items-center p-4 ${
                showSuccess ? "" : "hidden"
              }`}
            >
              <div>
                <FcApproval size={30} />
              </div>
              <div className="">
                <p className="font-semibold">Submitted</p>
              </div>
              <div
                className="p-2 rounded-md cursor-pointer"
                onClick={handleClose}
              >
                <RxCross2 />
              </div>
            </div>
          </div>
        </div>

        {/* Second DIV */}
        <div>
          <div className="bg-[#EAEAEA] p-4 rounded-md">
            <AssigmentList />
          </div>
          <div className="mt-4">
            <div className="bg-[#EAEAEA] p-4 rounded-md">
              <div className="flex flex-col gap-2">
                <div className="bg-white p-2 rounded-md">
                  <p className="">
                    From: <span>Research Methods</span>
                  </p>
                  <p className="">
                    ptates asperiores, ullam facere sapiente culpa natus eaque?
                  </p>
                </div>
                <div className="bg-white p-2 rounded-md">
                  <p className="">
                    From: <span>Research Methods</span>
                  </p>
                  <p className="">
                    ptates asperiores, ullam facere sapiente culpa natus eaque?
                  </p>
                </div>
                <button className=" bg-white py-2 px-4 rounded-md">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex justify-center p-4 bg-[#EAEAEA] ">
        <p>2024@Aliko Amos</p>
      </footer>
    </div>
  );
};

export default StudentPage;
