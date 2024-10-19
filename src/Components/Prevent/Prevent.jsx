import React from 'react';
import PreventionCards from './PreventionCards'; // Assuming you have it in the same directory
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/image2.jpg'
import Image3 from '../../assets/image3.jpg'
import Image4 from '../../assets/image4.jpg'
import Image5 from '../../assets/image5.jpg'
import Image6 from '../../assets/image6.jpg'
import Image7 from '../../assets/image7.jpg'
import Image8 from '../../assets/image8.jpg'
import Image9 from '../../assets/image9.jpg'
function Prevent() {
  const preventionTips = [ 
    { 
      title: 'Avoid Contact with Infected Animals', 
      description: 'Avoid direct contact with fruit bats, especially the Egyptian rousette bat, which is a known reservoir of the virus. Avoid contact with non-human primates in outbreak areas.', 
      image: Image6 
    }, 
    { 
      title: 'Practice Good Hygiene', 
      description: 'Wash hands regularly with soap and water, especially after contact with animals or people who are ill. Use alcohol-based hand sanitizers when soap and water are unavailable.', 
      image: Image2 
    }, 
    { 
      title: 'Avoid Close Contact with Infected Individuals', 
      description: 'Avoid direct contact with bodily fluids of infected individuals. Isolate infected individuals to prevent the spread of the virus.', 
      image: Image5 
    }, 
    { 
      title: 'Wear Protective Gear', 
      description: 'Healthcare workers should wear personal protective equipment (PPE), such as gloves, gowns, and masks when handling infected individuals.', 
      image: Image3 
    }, 
    { 
      title: 'Ensure Safe Burial Practices', 
      description: 'If someone has died from Marburg virus, avoid direct contact with the body during burial procedures. Follow local health guidelines for safe burials.', 
      image: Image4 
    }, 
    { 
      title: 'Educate and Stay Informed', 
      description: 'Stay updated with information from health authorities on outbreaks and prevention methods. Educate your community about how the virus spreads and how to prevent infection.', 
      image: Image1 
    },
    {
      title: 'Avoid Consuming Bushmeat',
      description: 'Refrain from hunting, handling, and consuming meat from wild animals (bushmeat), particularly in areas known for Marburg virus outbreaks. Properly cook all animal products before consumption.',
      image: Image7
    },
    {
      title: 'Practice Safe Sex and Avoid Bodily Fluids',
      description: 'If you have recovered from Marburg virus, practice safe sex and avoid sharing bodily fluids for at least 12 months after recovery or until your semen tests negative twice for the virus.',
      image: Image8
    },
    {
      title: 'Disinfect and Dispose of Contaminated Items',
      description: 'Properly disinfect or dispose of items that may have come into contact with infected individuals or animals, including bedding, clothing, and medical equipment. Follow guidelines for handling potentially contaminated materials.',
      image: Image9
    }
  ];

  return (
    <div className="w-full pt-24 pb-10">
      <div className="bg-[#223A66] flex flex-col items-center justify-center text-white py-20">
        <div className="text-xl">Prevent</div>
        <h1 className="text-3xl font-[400]">How To Prevent Marburg Virus</h1>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white p-6">
        <h1 className="text-2xl font-bold text-[#223A66] mb-6">How to prevent Marburg Well</h1>

        {/* Grid Layout for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preventionTips.map((tip, index) => (
            <PreventionCards
              key={index}
              title={tip.title}
              description={tip.description}
              image={tip.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prevent;
