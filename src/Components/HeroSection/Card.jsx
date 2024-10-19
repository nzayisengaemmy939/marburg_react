import React from "react";
import Health from "../getHealth/Health";
import { useState } from "react";

function Card({ icon, subtitle, title, content, buttonText }) {
const [show,showComponent]=useState(false)
  const getHealth = () => {
    showComponent(!show);
  };

  return (
    <div className="bg-white text-[#223A66] mt-[20px] md:mt-[-50px] w-full md:w-[290px] h-[320px] rounded-xl shadow-md">
      <div className=" rounded-xl  shadow-md p-6 w-full h-full">
        <div className="flex flex-col  mb-4">
          <div className="bg-gray-100 rounded-md">{icon}</div>
          <p className="text-sm text-[#82949B] mt-3">{subtitle}</p>
        </div>
        <h2 className="text-[17px] font-bold text-[#223A66] mb-2">{title}</h2>
        <div className="text-sm text-[#82949B] mb-4">{content}</div>
        {buttonText && (
          <button className="bg-[#223A66]  text-white text-sm font-semibold py-2 px-4 rounded-3xl hover:bg-navy-900 transition-colors" onClick={getHealth}>
            {buttonText}
          </button>
        )}
      </div>
      {show&&<Health></Health>}
    </div>
    
  );
}

export default Card;
