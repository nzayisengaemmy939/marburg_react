import React from "react";
import Sympotoms from "../HeroSection/Sympotoms";

const About = () => {
  return (
    <div className="w-full pt-24 pb-10 ">
      <div className="bg-[#223A66] flex flex-col items-center justify-center text-white py-20 ">
        <div className="text-xl ">About</div>
        <h1 className="text-3xl font-[400]">About Marburg Virus</h1>
      </div>
      <div className="bg-white p-6 md:px-20 px-5">
        <h2 className="text-xl font-bold text-[#223A66] mb-4">
          Origin of MarburgCare
        </h2>
        <div className="border border-blue-200 p-4 rounded-lg text-sm text-[F4F9FC]">
          <p className="mb-4">
            The Marburg virus was first identified in 1967 during simultaneous
            outbreaks in Marburg and Frankfurt, Germany, as well as in Belgrade,
            Serbia. The outbreak was traced to laboratory workers who had been
            exposed to infected African green monkeys (Cercopithecus aethiops)
            imported from Uganda for research. The virus, which is part of the
            filovirus family like Ebola, causes Marburg virus disease (MVD), a
            severe and often fatal hemorrhagic fever.
          </p>
          <p>
            Marburg likely originated from fruit bats, specifically the Egyptian
            rousette bat Rousettus aegyptiacus, which is considered the natural
            reservoir. Human infections occur when individuals come into contact
            with the bats or their bodily fluids, often during cave exploration
            or in rural areas.
          </p>
        </div>
      </div>
      <div className="px-20">
      <Sympotoms imgEl={false}/>
      </div>
    </div>
  );
};

export default About;
