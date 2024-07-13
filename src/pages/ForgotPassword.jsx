import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../appwrite/auth";

function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const forgotPasswordVerification = async (data) => {
    const verificaiton = await auth.forgotPassword(data);
    if (!verificaiton) {
      console.log("the mail is not sent there is error");
    }
    console.log("the mail is  sent ");
  };
  return (
    <div className="w-full h-[90vh]">
      <div className=" h-full p-10 w-full flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit(forgotPasswordVerification)}>
          <h1 className="mb-14 text-2xl sm:text-5xl font-primary font-semibold">
            Reset your password
          </h1>
          <input
            type="email "
            placeholder="Type here"
            className=" font-primary input input-bordered w-full max-w-xl"
            {...register("email", { required: true })}
          />
          <button
            type="submit"
            className="  text-[17px] btn w-full max-w-xl font-primary my-5"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
