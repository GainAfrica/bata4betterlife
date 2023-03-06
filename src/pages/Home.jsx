import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Volunteer from "../components/Volunteer";
import Services from "../components/Services";

const Home = () => {
  return (
    <div data-scroll-section className="homepage">
      <Header />
      <Hero />
      <About />
      <Impact />
      <Services />
      <Volunteer />
      <Footer />
    </div>
  );
};

export default Home;
