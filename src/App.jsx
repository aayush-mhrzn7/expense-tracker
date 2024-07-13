import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div>
      <Header />
      {/*  <Home /> */}
      {/* <About /> */}
      <Login />
      {/* <Signup /> */}
      {/*   <Footer /> */}
      {/*  <ForgotPassword /> */}
      {/* <ResetPassword /> */}
    </div>
  );
}

export default App;
