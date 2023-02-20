import React from "react";
import Footer from "../../components/Footer";
import Card02 from "../../components/home/Card02";
import CardImage from "../../components/home/CardImage";
import { Carousel } from "../../components/home/Carousel";
import Hero from "../../components/home/Hero";
import Nabvar from "../../components/Nabvar";

export const LandingPage = () => {
  return (
    <>
      <div className="">
        <Hero />
      </div>
      <div className="z-50 -mt-28 relative">
        <Footer />
      </div>
    </>
  );
};
