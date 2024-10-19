import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Prevent from '../Prevent/Prevent';
import HealthForm from './healthForm';

function Health() {
  const [close, setClose] = useState(false);
  const [fever, setFever] = useState(null); // Track fever selection
  const [headache, setHeadache] = useState(null); // Track headache selection
  const [musclePain, setMusclePain] = useState(null); // Track muscle pain selection
  const navigate = useNavigate(); // For navigation
  
 

  const clickAndClose = () => {
    setClose(!close);
  };

  const handleSubmit = () => {
    if (fever === 'yes' && headache === 'yes' && musclePain === 'yes') {
      navigate('/form'); // Navigate to Prevent component if all symptoms are present
    }
  };

  if (close) return null; // Return null to close the modal

  return (
    <div className='bg-black bg-opacity-60 flex items-center justify-center z-1000 fixed right-0 left-0 bottom-0 top-0 z-1000'>
      <div className='w-[40%] h-[60%] bg-white'>
        <div
          className='text-[#ff0000] text-2xl relative hover:text-[#223A66] cursor-pointer'
          style={{ left: '450px', top: "10px" }}
          onClick={clickAndClose} // Use clickAndClose here
        >
          &times;
        </div>
        <div className='m-auto p-6'>
          <h2 className='text-xl text-[#223A66] font-bold mb-4 m-auto'>
            Check for Symptoms of Marburg Virus
          </h2>

          <p className='mb-2 text-[#223A66]'>Do you have a fever?</p>
          <input
            type='radio'
            id='feverYes'
            name='fever'
            value='yes'
            onChange={() => setFever('yes')}
          />
          <label htmlFor='feverYes' className='text-[#82949b]'> Yes </label>
          <input
            type='radio'
            id='feverNo'
            name='fever'
            value='no'
            onChange={() => setFever('no')}
          />
          <label htmlFor='feverNo' className='text-[#82949b]'> No </label>

          <p className='mt-4 mb-2 text-[#223A66]'>Do you have a headache?</p>
          <input
            type='radio'
            id='headacheYes'
            name='headache'
            value='yes'
            onChange={() => setHeadache('yes')}
          />
          <label htmlFor='headacheYes' className='text-[#82949b]'> Yes </label>
          <input
            type='radio'
            id='headacheNo'
            name='headache'
            value='no'
            onChange={() => setHeadache('no')}
          />
          <label htmlFor='headacheNo' className='text-[#82949b]'> No </label>

          <p className='mt-4 mb-2 text-[#223A66]'>Do you have muscle pain?</p>
          <input
            type='radio'
            id='musclePainYes'
            name='musclePain'
            value='yes'
            onChange={() => setMusclePain('yes')}
          />
          <label htmlFor='musclePainYes' className='text-[#82949b]'> Yes </label>
          <input
            type='radio'
            id='musclePainNo'
            name='musclePain'
            value='no'
            onChange={() => setMusclePain('no')}
          />
          <label htmlFor='musclePainNo' className='text-[#82949b]'> No </label>

          <button
            className='mt-6 bg-[#223A66] text-white px-4 py-2 rounded'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Health;
