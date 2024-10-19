import React, { useState } from "react";
import BgImage from "../../assets/BgImage.jpg";
import GetHealthCards from "./GetHealth";
import Health from "../getHealth/Health";
import PatientService from "./PatientService";

function Hero() {
  const [show, showComponent] = useState(false);

  const getHealth = () => {
    showComponent(!show);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${BgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex:"-1"
        }}
        className="flex items-center md:px-20 px-5"
      >
        <div className=" text-[#223A66]">
          <h1 className=" text-[30px] font-bold mb-5">
            Trusted Health Advice to Keep You Safe
          </h1>
          <p className="md:w-1/2 text-[15px]">
            We are committed to providing you with accurate and up-to-date
            information to help you avoid the Marburg virus and ensure your
            well-being. <span className=" text-[#242a36]">Our health experts</span> offer tailored guidance,
            prevention tips, and treatment advice to safeguard you and your
            loved ones from the risk of infection. Stay informed with our
            trusted health advice and take proactive steps to maintain a healthy
            lifestyle.
          </p>
          <button className="px-4 py-2 bg-[#E42353] text-white rounded-3xl mt-20" onClick={getHealth}>
            Get Health Services
          </button>
        </div>
      </div>
      <GetHealthCards />
      <PatientService></PatientService>
      
      {show && <Health />} {/* Render Health component conditionally */}
    </>
  );
}

export default Hero;
