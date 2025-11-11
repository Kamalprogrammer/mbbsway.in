import React, { useState } from 'react';
import Button from './Button';
import BorderButton from "./BorderButton"
const universities = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    city: "Bangalore",
    collegeName: "Indian Institute of Science (IISc Bangalore)",
    description: "IISc Bangalore is India's premier institution for advanced scientific and technological research, fostering innovation and excellence across disciplines.",
    universityType: "Top University",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f5/IISc_Seal.svg"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    city: "Bangalore",
    collegeName: "Indian Institute of Management Bangalore (IIMB)",
    description: "IIM Bangalore is one of the top management institutes in India, known for its global ranking, research, and leadership development programs.",
    universityType: "Top Management Institute",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/Indian_Institute_of_Management_Bangalore_logo.png"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    city: "Mysuru",
    collegeName: "University of Mysore",
    description: "Founded in 1916, the University of Mysore is a historic and highly reputed institution offering a range of academic and research programs.",
    universityType: "Public University",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/27/University_of_Mysore_logo.png"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1596496050183-2d4b8b40a3b4",
    city: "Manipal",
    collegeName: "Manipal Academy of Higher Education (MAHE)",
    description: "Manipal Academy of Higher Education is a globally recognized private university known for excellence in medicine, engineering, and business education.",
    universityType: "Private University",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Manipal_University_logo.png"
  }
];


export default function StateKarnataka(){


  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="grid grid-cols-2 m-auto lg:grid-cols-4 gap-1 sm:gap-5 sm:w-[80vw] w-[95vw] items-center  ">
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
