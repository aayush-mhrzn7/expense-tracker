import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import auth from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../tools/authSlice";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginSession = (data) => {
    const user = auth.login(data);
    if (!user) {
      console.log("error there is no user");
    }
    // navigate("/");
    console.log("user has been logged in sucessfully ");
    dispatch(login(user));
  };
  const googleAuthencation = async () => {
    try {
      const user = await auth.googleOauth();
      console.log("google authentication is a sucess");
      //navigate();
      dispatch(login(user));
    } catch (error) {
      console.log("error with google authentication ");
    }
  };
  return (
    <div className="h-[90vh] w-full">
      <div className="flex p-10 flex-col justify-center items-center h-full ">
        <h1 className="text-3xl sm:text-5xl mb-4 font-primary ">Login</h1>
        <form
          onSubmit={handleSubmit(loginSession)}
          className="w-full flex flex-col justify-center items-center"
        >
          <label className="form-control my-2 w-full max-w-xl">
            <div className="label">
              <span className="label-text text-lg font-semibold font-primary">
                What is your email?
              </span>
            </div>
            <input
              type="email"
              placeholder="eg:    johndoe@gmail.com"
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
              placeholder="********"
              className="input input-bordered font-primary font-semibold  w-full max-w-xl"
              {...register("password", { required: true })}
            />
            <a href="" className="text-end  font-primary  font-semibold my-3">
              Forgot your password
            </a>
          </label>

          <button
            type="submit"
            className="   text-[17px] font-semibold text-base  font-primary btn w-full max-w-xl "
          >
            Login
          </button>
        </form>

        <p className=" my-5 font-semibold font-primary">
          Login by another method?
        </p>
        <button
          onClick={() => googleAuthencation()}
          className=" btn flex items-center text-[17px]  max-w-xl w-full font-semibold font-primary"
        >
          Google <FaGoogle />
        </button>
      </div>
    </div>
  );
}

export default Login;
