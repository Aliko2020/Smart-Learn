import React, { useState, useEffect, useRef } from "react";
import Header from "../Components/Header";
import { HiOutlineUpload } from "react-icons/hi";
import SelecCourse from "./Mui/SelectCourse";
import { FcApproval } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import AssigmentListLecturer from "./Mui/LecturerTable";
import BasicDatePicker from "./Mui/DatePicker";


const LecturerPage = () => {
  const [showSuccess, setShowSuccess] = useState(true);

  const handleClose = () => {
    setShowSuccess(false);
  };

  const onButtonClick = () => {
    inputFile.current.click();
    // Implement file upload here
  };

  const inputFile = useRef(null);

  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div>
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
                  <p>Upload File(PDF,DOX)</p>
                </button>
              </label>
              <input type="file" ref={inputFile} className="hidden" />
            </div>
          </div>

          <div>
            <SelecCourse />
            <div className="flex flex-col gap-4 p-2">
                <BasicDatePicker />
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
          {/* <div className="flex flex-col gap-4 p-2">
            <label htmlFor="Description">Add Note:</label>
            <textarea
              className="appearance-none focus:outline-none w-full h-24 border rounded p-1 border-gray-300"
              name="description"
              placeholder="Add a note to students dashboard"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div> */}
        </div>
        <div className="p-4 bg-[#EAEAEA]">
          <label htmlFor="Description">Mark Assignments:</label>
          <div className="flex flex-col gap-2 mt-4">
          <AssigmentListLecturer />
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default LecturerPage;
