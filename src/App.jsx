import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Header />
      {/*  <Home /> */}
      {/* <About /> */}
      <Login />
      <Signup />
      {/*   <Footer /> */}
    </div>
  );
}

export default App;
