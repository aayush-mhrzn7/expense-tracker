import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import auth from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../tools/authSlice";
function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async (data) => {
    if (!data) {
      console.log("there is no valid data");
    }
    const createUser = await auth.signup(data);
    if (!createUser) {
      console.log("user could not be created");
    }
    const validUser = await auth.verification();
    if (!validUser) {
      console.log("user is not validated please validate before continuing");
      exit(1);
    }
    console.log("user has been created");
    dispatch(login(createUser));
  };
  const googleAuthencation = async () => {
    try {
      const user = await auth.googleOauth();
      console.log(user);
      console.log("google authentication is a sucess");
      //navigate();
      dispatch(login(user));
    } catch (error) {
      console.log("error with google authentication ");
    }
  };
  return (
    <div className="h-[90vh] w-full">
      <div className="flex flex-col p-10 justify-center items-center h-full ">
        <h1 className="text-3xl sm:text-5xl mb-4 font-primary ">Signup</h1>
        <form
          onSubmit={handleSubmit(signup)}
          className="w-full flex flex-col justify-center items-center"
        >
          <label className="form-control my-2 w-full max-w-xl">
            <div className="label ">
              <span className="label-text text-lg font-semibold font-primary">
                What is your name?
              </span>
            </div>
            <input
              type="text"
              placeholder="eg:   john doe"
              className="input input-bordered font-primary font-semibold  w-full "
              {...register("name", { required: true })}
            />
          </label>
          <label className="form-control my-2 w-full max-w-xl">
            <div className="label">
              <span className="label-text text-lg font-semibold font-primary">
                What is your email?
              </span>
            </div>
            <input
              type="email"
              placeholder="eg:   johndoe@gmail.com"
              className="input input-bordered font-primary font-semibold  w-full max-w-xl"
              {...register("email", { required: true })}
            />
          </label>
          <label className="form-control my-2 w-full max-w-xl">
            <div className="label">
              <span className="label-text text-lg font-semibold font-primary">
                What is your password?
              </span>
            </div>
            <input
              type="password"
              placeholder="**********"
              className="input input-bordered font-primary font-semibold  w-full max-w-xl"
              {...register("password", { required: true })}
            />
          </label>
          <button
            type="submit"
            className=" text-[17px] font-semibold text-base  font-primary btn w-full max-w-xl my-5"
          >
            Signup
          </button>
        </form>
        <p className=" my-5 font-semibold font-primary">
          Signup by another method?
        </p>
        <button
          onClick={() => googleAuthencation()}
          className="  text-[17px] btn flex items-center  max-w-xl w-full font-semibold font-primary"
        >
          Google <FaGoogle />
        </button>
      </div>
    </div>
  );
}

export default Signup;
