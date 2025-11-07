import React, { useState } from 'react';
import Button from './Button';
import BorderButton from "./BorderButton"
const universities = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    city: "Delhi",
    collegeName: "Indian Institute of Technology Delhi (IIT Delhi)",
    description: "Located in the heart of the capital, IIT Delhi is one of India’s most prestigious engineering institutions known for innovation, research, and technology development.",
    universityType: "Top University",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/14/IIT_Delhi_Logo.svg"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    city: "Mumbai",
    collegeName: "University of Mumbai",
    description: "The University of Mumbai is one of the oldest and premier universities in India, known for its wide range of academic programs and strong alumni network.",
    universityType: "Top University",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/University_of_Mumbai_logo.png"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    city: "Bangalore",
    collegeName: "Indian Institute of Science (IISc Bangalore)",
    description: "IISc Bangalore is India’s leading institution for advanced scientific and technological research, fostering innovation and excellence in multiple disciplines.",
    universityType: "Top University",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f5/IISc_Seal.svg"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    city: "BHopal",
    collegeName: "Anna University",
    description: "Anna University in Chennai is a leading technical university offering a wide range of engineering and technology programs, with a focus on research and industry collaboration.",
    universityType: "Top University",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/28/Anna_University_Logo.svg"
  }
];

export default function StateBihar() {


  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="grid grid-cols-2 m-auto  sm:grid-cols-4 gap-5 w-screen items-center border-2">
      {universities.map((item, index) => (
        <div
          key={index}
          // className={activeCard === index ? "bg-[#362727] text-white" : "bg-white transition duration-300 ease-in-out border-2"}
          className='h-80 overflow-hidden w-full '
          onMouseEnter={() => setActiveCard(index)}
          onMouseLeave={() => setActiveCard(null)}
          onClick={() => setActiveCard(index)}
        >
          {activeCard === index ?

            // onactive card 
            <div className='border-2 h-full p-2'>
             
                <p className='rounded py-2 px-3 text-sm bg-linear-to-r from-[#f4829d] to-[#155d8e] text-white font-bold'>{item.city}</p>
             
                <p className='font-bold text-sm py-2'>{item.universityType}</p>
                <div className='flex items-start justify-center gap-3 w-full'>
                  <span className='font-bold text-sm '>{item.id}</span>
                  <img src={item.image} className='w-[20%]' alt="" />
                  <p className='text-sm '>{item.collegeName}</p>
                </div>
                <BorderButton text={"Explore More"}/>



            </div>
          :

          // default card
          <div className='border-2 h-full p-2 '>
            <div className='h-[60%] w-full ' >
              <img src={item.image} alt="" className='h-[80%] w-full object-cover ' />
              <p className='rounded-b-xl py-2 px-3 text-sm bg-linear-to-r from-[#f4829d] to-[#155d8e] text-white font-bold'>{item.city}</p>
            </div>
           
            <p className='h-[40%] sm:py-2 sm:px-3 text-sm'>{item.description}</p>

            



          </div>}
        </div>
      ))}
    </div>
  );




}
