import React from "react";
import "./styles.css";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Slider from "./Slider";

function Main() {
  return (
    <main>
      <Slider />
      <FirstSection />
      <div className="bg-lightGray py-2">
        <SecondSection />
      </div>
    </main>
  );
}

export default Main;
