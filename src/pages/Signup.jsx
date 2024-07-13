import React from "react";
import { FaGoogle } from "react-icons/fa";
function Signup() {
  return (
    <div className="h-[90vh] w-full">
      <div className="flex flex-col justify-center items-center h-full ">
        <h1 className="text-3xl sm:text-5xl mb-4 font-primary ">Signup</h1>
        <label className="form-control my-2 w-full max-w-xl">
          <div className="label ">
            <span className="label-text text-lg font-semibold font-primary">
              What is your name?
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered font-primary font-semibold  w-full "
          />
        </label>
        <label className="form-control my-2 w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-semibold font-primary">
              What is your email?
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered font-primary font-semibold  w-full max-w-xl"
          />
        </label>
        <label className="form-control my-2 w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-semibold font-primary">
              What is your password?
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered font-primary font-semibold  w-full max-w-xl"
          />
        </label>
        <button className=" font-semibold text-base  font-primary btn w-full max-w-xl my-5">
          Signup
        </button>
        <p className=" my-5 font-semibold font-primary">
          Signup by another method?
        </p>
        <button className=" btn flex items-center  max-w-xl w-full font-semibold font-primary">
          Google <FaGoogle />
        </button>
      </div>
    </div>
  );
}

export default Signup;
