import React, { useState } from 'react';
import Button from './Button';
import BorderButton from "./BorderButton"
const universities = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    city: "Bhopal",
    collegeName: "Indian Institute of Science Education and Research (IISER Bhopal)",
    description: "IISER Bhopal is a premier institute focusing on research and education in science, offering integrated and doctoral programs with world-class facilities.",
    universityType: "Top Research Institute",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/IISER_Bhopal_Logo.svg"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    city: "Indore",
    collegeName: "Indian Institute of Technology Indore (IIT Indore)",
    description: "IIT Indore is among the leading new IITs, known for strong research, innovation-driven education, and a modern campus in central India.",
    universityType: "Top University",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/IIT_Indore_Logo.svg"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1596496050183-2d4b8b40a3b4",
    city: "Indore",
    collegeName: "Indian Institute of Management Indore (IIM Indore)",
    description: "IIM Indore is a top-ranked management institute offering MBA and executive education, known for its academic excellence and global outlook.",
    universityType: "Top Management Institute",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/83/IIM_Indore_Logo.png"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    city: "Bhopal",
    collegeName: "Barkatullah University",
    description: "Barkatullah University is one of Madhya Pradesh's oldest universities, offering a wide range of courses in science, arts, commerce, and law.",
    universityType: "Public University",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Barkatullah_University_logo.png"
  }
];


export default function StateMP() {


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
