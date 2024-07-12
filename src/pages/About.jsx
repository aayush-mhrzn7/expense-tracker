import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function About() {
  return (
    <div className="w-full h-[93vh]">
      <section className="md:p-40 p-8 w-full h-[90vh] flex flex-col items-center justify-center ">
        <h1 className="text-4xl  sm:text-6xl font-primary">About Us</h1>
        <p className="my-6 text-xl leading-relaxed text-center font-primary t">
          We are a team of developers at Expense Manager who are passionate
          about building web applications. We are committed to providing you
          with the best experience possible. Our goal is to make your life
          easier by helping you manage your expenses. We believe that managing
          your expenses should be simple and easy. That's why we created Expense
          Manager. <br />
          <span className="inline-block font-semibold">
            Thank you for choosing Expense Manager!
          </span>
        </p>
      </section>
    </div>
  );
}

export default About;
