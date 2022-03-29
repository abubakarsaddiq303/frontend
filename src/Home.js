import React from "react";
import Awards from "./components/awards/Awards";
import Featured from "./components/features/Featured";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Featured />
      <Awards />
    </div>
  );
}

export default Home;
