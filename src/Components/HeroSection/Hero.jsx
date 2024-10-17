import React from "react";
import BgImage from "../../assets/BgImage.jpg";
import GetHealthCards from "./GetHealth";

function Hero() {
  return (<>
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${BgImage})`,
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
          well-being. <span className=" text-[#242a36]">Our health experts</span> offer tailored guidance, prevention
          tips, and treatment advice to safeguard you and your loved ones from
          the risk of infection. Stay informed with our trusted health advice
          and take proactive steps to maintain a healthy lifestyle.
        </p>
        <button className="px-8 py-2 bg-[#E42353] text-white rounded-xl mt-20">
          Get Health Services
        </button>
      </div>
    </div>
    <GetHealthCards/>
    </>
  );
}

export default Hero;
