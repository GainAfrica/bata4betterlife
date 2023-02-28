import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
