import React from "react";
import Header from "../../components/Header";
import Faqs from "../../components/index-page/Faqs";
import FooterLanding from "../../components/index-page/Footer";
import Hero from "../../components/index-page/Hero";
import Incentives from "../../components/index-page/Incentives";
import Pricing from "../../components/index-page/Pricing";
import Servicios from "../../components/index-page/Servicios";
import Testimoniales from "../../components/index-page/Testimoniales";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Incentives />
      <Testimoniales />
       {/*<Pricing />
      <Servicios />
      <Faqs /> */}
      <FooterLanding />
    </>
  );
};
