import React, { useState } from 'react';
import Button from './Button';
import BorderButton from "./BorderButton"
const universities = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    city: "Ahmedabad",
    collegeName: "Indian Institute of Management Ahmedabad (IIMA)",
    description: "IIM Ahmedabad is India's most prestigious business school, renowned for academic rigor, case-based learning, and world-class faculty.",
    universityType: "Top Management Institute",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/IIM_Ahmedabad_Logo.svg"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    city: "Gandhinagar",
    collegeName: "Indian Institute of Technology Gandhinagar (IITGN)",
    description: "IIT Gandhinagar is known for its innovative teaching, research, and emphasis on interdisciplinary learning and sustainability.",
    universityType: "Top University",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d8/IIT_Gandhinagar_Logo.svg"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    city: "Ahmedabad",
    collegeName: "Gujarat University",
    description: "Gujarat University is one of the oldest and most prominent universities in the state, offering diverse academic and professional programs.",
    universityType: "Public University",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/ab/Gujarat_University_Logo.png"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    city: "Vadodara",
    collegeName: "Maharaja Sayajirao University of Baroda (MSU Baroda)",
    description: "MSU Baroda is a leading university in western India, known for its excellence in education, research, and cultural studies.",
    universityType: "Public University",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a8/Maharaja_Sayajirao_University_of_Baroda_logo.png"
  }
];


export default function Stategujrat() {


  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="grid grid-cols-2 m-auto md:grid-cols-4 gap-1 sm:gap-5 sm:w-[80vw] w-[95vw] items-center  ">
      {universities.map((item, index) => (
        <div
          key={index}
          // className={activeCard === index ? "bg-[#362727] text-white" : "bg-white transition duration-300 ease-in-out border-2"}
          className=' h-[60vh] overflow-hidden w-full'
          onMouseEnter={() => setActiveCard(index)}
          onMouseLeave={() => setActiveCard(null)}
          onClick={() => setActiveCard(index)}
        >
          <div className='h-full w-full shadow-gray-500'>


            {activeCard === index ?

              // onactive card 
              <div className='h-full p-2'>
                <p className='rounded py-2 px-3 text-[3vw] sm:text-xl bg-linear-to-r from-[#f4829d] to-[#155d8e] text-white font-bold'>
                  {item.city}
                </p>
                <p className='font-semibold text-[3vw] sm:text-xl py-2'>{item.universityType}</p>
                <div className='flex items-start justify-center gap-3 w-full'>
                  <span className='font-bold text-[3vw] sm:text-xl'>{item.id}</span>
                  <img src={item.image} className='w-[20%]' alt="" />
                  <p className='text-[3vw] sm:text-xl '>{item.collegeName}</p>
                </div>
                <BorderButton text={"Explore More"} />



              </div>
              :

              // default card
              <div className=' h-full p-2 shadow-gray-800  '>
                <div className=' h-[50%] w-full' >
                  <img src={item.image} alt="" className='h-[100%] w-full object-cover rounded-t-xl' />
                  <p className='rounded-b-xl py-2 px-3 text-[3vw] sm:text-xl text-end bg-linear-to-r from-[#f4829d] to-[#155d8e] text-white font-bold'>
                    {item.city}</p>
                </div>

                <p className='sm:py-2 sm:px-3 text-[3vw] sm:text-xl text-justify top-10 mt-13 line-clamp'>{item.description}</p>





              </div>}
          </div>
        </div>
      ))}
    </div>
  );




}
