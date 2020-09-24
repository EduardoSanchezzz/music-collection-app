import "../../App.css";
import HeroSection from "../HeroSection";
import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";

export function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
