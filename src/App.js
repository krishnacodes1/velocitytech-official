import Home from "./Home/Home";
import Navbar from "./navbar/Navbar";
// import Service from "./whychoose";
import Service from "./why_choose/whychoose";
import About from "./about us/about";
import ContactUs from "./contact/Contact_Us";
import OurServices from "./our services/OurServices";
import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./footer/Footer";
import Blog from "./blog/Blog";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="m-lg-5 mb-5 justify-content-center text-center align-items-center">
        <Navbar />
        <Home />
        <Service />
        <About />
        <OurServices />
        <Blog/>
        <ContactUs />
        <Footer/>
      </div>
    </>
  );
}

export default App;
