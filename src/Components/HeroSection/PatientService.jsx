import { Avatar } from '@mui/material';
import React from 'react'
const DoctorCard = ({ name, description }) => (
  <div className="bg-white relative p-6 mb-8 rounded-lg shadow-md max-w-md  ">
    <div className="flex items-center mb-4">
      <Avatar alt={name} className="!w-16 !h-16 mr-4" />
      <div>
        <h3 className="font-bold text-lg text-[#223A66]">Expert doctor</h3>
        <p className="text-gray-600 text-sm">{name}</p>
      </div>
    </div>
    <p className="text-gray-700 text-sm mb-4">{description}</p>
    <div className="absolute bottom-4 right-4">
     <span className=" font-bold text-[60px] text-red-500">,,</span>
    </div>
  </div>
);
const PatientService = () => {
  return (
    <div className=" px-8 pt-20">
      <h1 className="text-3xl font-bold text-center  mb-4 text-[#223A66]">
        We served over 5000+ Patients
      </h1>
      <p className="text-center text-[#82949B] mb-12 text-[15px] max-w-2xl mx-auto">
        Trusted by over 5,000 patients, we provide comprehensive healthcare solutions with 
        a focus on safety, care, and reliability
      </p>
      <div className="flex flex-wrap justify-center space-x-8">
        <DoctorCard 
          name="Nzayisenga Emmanuel" 
          description="Dr. Keza a board-certified expert with 5 years of experience, specializes in [specific field]. Dedicated to patient care and innovative treatments for optimal health outcomes."
        />
        <DoctorCard 
          name="Nzayisenga Emmanuel" 
          description="Dr. Keza a board-certified expert with 5 years of experience, specializes in [specific field]. Dedicated to patient care and innovative treatments for optimal health outcomes."
        />
      </div>
    </div>
  );
};

export default PatientService
