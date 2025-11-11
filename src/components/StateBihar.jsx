import React, { useState } from 'react';
import Button from './Button';
import BorderButton from "./BorderButton"
const universities = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581092334421-22f636b1cb47",
    city: "Patna",
    collegeName: "Indian Institute of Technology Patna (IIT Patna)",
    description: "IIT Patna is one of India's leading technical institutions, known for its excellence in engineering education, research, and innovation in the eastern region.",
    universityType: "Top University",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/25/IIT_Patna_Logo.svg"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    city: "Patna",
    collegeName: "Patna University",
    description: "Established in 1917, Patna University is one of the oldest universities in India, offering diverse programs in arts, science, commerce, and law.",
    universityType: "State University",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Patna_University_Logo.png"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2",
    city: "Bodh Gaya",
    collegeName: "Magadh University",
    description: "Located in Bodh Gaya, Magadh University is one of Bihar's largest universities, providing quality higher education in multiple disciplines.",
    universityType: "Public University",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Magadh_University_Logo.png"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    city: "Bhagalpur",
    collegeName: "Tilka Manjhi Bhagalpur University (TMBU)",
    description: "Tilka Manjhi Bhagalpur University, also known as TMBU, is a premier institution offering undergraduate and postgraduate programs in science, commerce, and humanities.",
    universityType: "State University",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/Tilka_Manjhi_Bhagalpur_University_logo.png"
  }
];


export default function StateBihar() {


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
                  <img src={item.image} alt="" className='h-[100%] w-full object-cover overflow-x-hidden rounded-t-xl' />
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
