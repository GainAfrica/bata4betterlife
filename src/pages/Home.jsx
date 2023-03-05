import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Impact from "../components/Impact";
import Volunteer from "../components/Volunteer";

const Home = () => {
  return (
    <div data-scroll-section className="homepage">
      <Header />
      <About />
      <Impact />
      <Volunteer />
      <Footer />
    </div>
  );
};

export default Home;
