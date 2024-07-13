import React from "react";
import auth from "../../appwrite/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const secret = urlParams.get("secret");
  async function updateRecovery(data) {
    const verificaiton = await auth.updatePassword(data, userId, secret);
    if (!verificaiton) {
      console.log("the verification of password has failed");
    }
    console.log("password changed sucessfully");
    navigate("/login");
  }
  return (
    <div className="w-full h-[90vh]">
      <div className=" h-full w-full p-10 flex flex-col items-center justify-center">
        <h1 className=" text-2xl sm:text-5xl font-primary font-semibold">
          Reset your password
        </h1>
        <form
          onSubmit={handleSubmit(updateRecovery)}
          className="flex flex-col w-full justify-center items-center"
        >
          <label className="form-control font-primary my-4 w-full max-w-lg md:max-w-2xl">
            <div className="label">
              <span className=" my-2 label-text text-[17px] font-semibold ">
                Enter your password
              </span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg md:max-w-2xl"
              {...register("password", { required: true })}
            />
          </label>
          <label className="form-control w-full max-w-lg md:max-w-2xl">
            <div className="label">
              <span className=" my-2 label-text text-[17px] font-semibold">
                Enter your passoword again
              </span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg md:max-w-2xl"
              {...register("repassword", { required: true })}
            />
          </label>
          <button className="  text-[17px] tn w-full max-w-lg md:max-w-2xl font-primary my-5">
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
