import { useLottie } from "lottie-react";
import React, { useEffect } from "react";
import { useRef } from "react";
import confetti from "../assets/confetti.json";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  const options = {
    animationData: confetti,
    loop: false,
    autoplay: false,
  };

  const { View, playSegments, stop, destroy } = useLottie(options);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "f" || event.key === "F") {
        if (animationRef.current) {
          stop();
          playSegments([0, 90], true);
        }
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      destroy();
    };
  }, [playSegments, stop, destroy]);
  return (
    <div className="p-20">
      {/* make fit when 100vh */}
      <div className=" w-full h-[65vh] flex flex-col items-center justify-center  px-7 sm:px-20 mt-32 font-primary">
        <div>
          <h1 className="text-7xl lg:text-9xl  text-center ">
            One Dollar
            <br /> at a time
          </h1>
          <p className="font-primary text-xl mt-10  text-center">
            Save money and track your expenses with us
            <br /> we will help you to manage your finance and save money{" "}
          </p>
        </div>
        <button className="btn mt-8 px-16 text-base">Signup</button>
      </div>
      <div className=" w-full mb-40 flex flex-col mt-20 justify-center items-center font-primary">
        <h1 className=" text-5xl lg:text-5xl px-7 sm:px-20 text-center font-primary ">
          Saving money is hard
        </h1>
        <p className="my-10 mb-20 text-center text-xl">
          90% people fail to save within 1 months ..
        </p>
        <div className="flex justify-between items-center flex-col xl:flex-row gap-14 xl:gap-0 ">
          <div className=" w-86 lg:w-96 flex justify-center items-center card mt-10">
            <p className="text-9xl">🎯</p>
            <div className="card-title mt-4">
              <p className="">Set a goal</p>
            </div>
          </div>
          <FaArrowRightLong className="rotate-90 lg:rotate-0 " />
          <div className="card flex justify-center items-center w-86 lg:w-96 mt-1- ">
            <p className="text-9xl">🏃‍♂️</p>
            <div className="card-title  mt-4">
              <p className="">Try your best</p>
            </div>
          </div>
          <FaArrowRightLong className="rotate-90 lg:rotate-0 " />
          <div className="card flex justify-center items-center w-86 lg:w-96 ">
            <p className="text-9xl"> 💰</p>
            <div className="card-title mt-4">
              <p className="">Succeed</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-[600px] flex flex-col justify-center items-center font-primary">
        <h1 className="text-3xl lg:text-5xl my-10 text-center">
          How we help you save money💲
        </h1>
        <ul className="timeline timeline-vertical lg:timeline-horizontal">
          <li>
            <div className="timeline-start timeline-box">Get Money</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Know where to spend</div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">Track</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Invest</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">Save</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex relative  items-center text-center justify-center my-20">
        Press<kbd className="kbd kbd-md mx-3 ">F</kbd>
        to pay respects to the Developer.
        <div
          className="absolute right-1/2 left-1/2 bottom-10 -translate-x-1/2"
          ref={animationRef}
          style={{ width: "300px", height: "300px" }}
        >
          {View}
        </div>
      </div>
    </div>
  );
}

export default Home;
