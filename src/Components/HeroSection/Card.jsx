import React from "react";

function Card({ icon, subtitle, title, content, buttonText }) {
  return (
    <div className="bg-white text-[#223A66] mt-[20px] md:mt-[-50px] w-full md:w-[290px] h-[320px] rounded-3xl shadow-md">
      <div className=" rounded-3xl  shadow-md p-6 w-full h-full">
        <div className="flex flex-col  mb-4">
          <div className="bg-gray-100 rounded-md">{icon}</div>
          <p className="text-sm text-[#82949B] mt-3">{subtitle}</p>
        </div>
        <h2 className="text-[17px] font-bold text-[#223A66] mb-2">{title}</h2>
        <div className="text-sm text-[#82949B] mb-4">{content}</div>
        {buttonText && (
          <button className="bg-[#223A66]  text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-navy-900 transition-colors">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
