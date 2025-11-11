import React, { useState } from "react";
import BorderButton from "./BorderButton";
import { FaGraduationCap } from "react-icons/fa";


const cardsData = [
    {
        id: 1,
        title: "Dedicayed Counsellors",
        description:
            "Access a personalized learning experience with smart insights and progress tracking to help you grow faster.",

    },
    {
        id: 2,
        title: "High Success Rate",
        description:
            "Stay updated with instant notifications and real-time changes directly from our intelligent dashboard.",

    },
    {
        id: 3,
        title: "Commendable Track Record",
        description:
            "Your data is safely encrypted and stored with multiple layers of protection for complete peace of mind.",

    },
    {
        id: 4,
        title: "Trandsraprent & Competitive Fee",
        description:
            "Get expert assistance whenever you need it — our support team is available around the clock.",

    },
];


export default function StateBihar() {
    const [activeCard, setActiveCard] = useState(null);

    return (


        <div className="flex flex-col w-[80vw] m-auto ">
            <div className="mb-10">
                <p className="text-4xl text-bold text-black underline">Why Choose Us</p>
            </div>
            <div className="grid grid-cols-1 justify-center  md:grid-cols-2 m-auto lg:grid-cols-4 gap-1 sm:gap-5 sm:w-[80vw] w-[95vw] items-center">


                {cardsData.map((item, index) => (
                    <div
                        key={index}
                        className="h-[50vh] w-full perspective"
                        onMouseEnter={() => setActiveCard(index)}
                        onMouseLeave={() => setActiveCard(null)}
                        onClick={() => setActiveCard(index)}
                    >

                        <div
                            className={`relative h-full w-full transition-transform duration-700 transform-style-preserve-3d ${activeCard === index ? "rotate-y-180" : ""
                                }`}
                        >

                            <div className="absolute inset-0 border-2 flex flex-col justify-center items-center backface-hidden bg-linear-to-r from-[#f4829d] to-[#155d8e] w-full h-full rounded-2xl">
                                <div className="p-2 shadow-gray-800 ">
                                    <div className="w-full flex flex-col justify-center items-center ">
                                        <div className=" text-white " >
                                            <FaGraduationCap className="w-50  h-50  text-center" />
                                        </div>
                                        <div className="" >
                                            <p className="text-2xl text-white p-2 text-center"> {item.title}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* BACK SIDE */}
                            <div className="absolute inset-0 rotate-y-180 backface-hidden bg-linear-to-r rounded-2xl from-[#f4829d] to-[#155d8e] flex justify-center items-center">
                                <div className="p-2">
                                    <p className="text-2xl text-white p-2 text-center">{item.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
