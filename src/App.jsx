import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
function App() {
  return (
    <div>
      <Header />
      {/*  <Home /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
