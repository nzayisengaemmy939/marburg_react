import React from 'react'

function Updates() {

  const StatItem = ({ value, label }) => (
    <div className="text-center">
      <div className=" text-2xl md:text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
  return (
    <div className="bg-[#223A66] py-2 rounded-lg md:px-20 px-4 mt-10">
      <h2 className="text-white text-center mb-4">Update</h2>
      <div className="flex justify-between py-5">
        <StatItem value="58+" label="Died" />
        <StatItem value="58+" label="Recovered" />
        <StatItem value="58+" label="Sick" />
        <StatItem value="58+" label="Test" />
      </div>
    </div>
  );
};

export default Updates
