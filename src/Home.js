import React from "react";
import Awards from "./components/awards/Awards";
import Featured from "./components/features/Featured";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Featured />
      <Awards />
      <Footer />
    </div>
  );
}

export default Home;
