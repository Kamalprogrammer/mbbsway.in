import ServiceBox from "../Services/ServiceBox"
import backImg from "../../assets/services/backImg.png"
import UnderlineHeading from "../UnderlineHeading"
import Button from "../Button"
// const studentData = {
//     {
//     title: "Counselling",
//         description: "Our counselling sessions will immensely benefit you in making..."
// },
// {
//     title: "Course, State & University selection",
//         description: "We help you choose the ideal course, university state that..."
// },
// {
//     title: "Application & Admission",
//         description: "Choose the right intake, apply timely and smartly in courses and..."
// }

// }

import { PiStudent } from "react-icons/pi"


export default function StudentService() {
    const iconObj = {
        icon: <PiStudent className="w-6 h-6 sm:w-12 sm:h-12 bg-linear-to-b from-[#b24a62] to-[#084771] bg-clip-text bg-transparent" />
    }
    return (

        <div className="StudentService relative h-auto w-[90vw] sm:w-full ">

            {/* Front Section */}
            <div className="relative z-20">
                <div className="mdTopStudentService gap-4 flex sm:gap-8 justify-start items-end bg-white h-[5.7rem]">

                    <ServiceBox
                        icon={iconObj.icon}
                        title={"Counselling"}
                        description={"Our counselling sessions will immensely benefit you in making..."} />
                    <ServiceBox
                        icon={iconObj.icon}
                        title={"Course, State & University selection"}
                        description={"We help you choose the ideal course, university state that..."} />
                </div>
                <div className="h-[7rem] pt-13 pl-[13rem] flex justify-end items-center
                     sm:pl-[17rem] sm:h-[18rem]
                   md:pl-[12rem]  md:pt-[11rem] md:-mr-[6rem]  
                     lg:pt-[13rem] lg:-mr-[10rem] lg:pr-16 lg:pt-[2rem]  
                     xl:pl-[10rem]">
                    <ServiceBox
                        icon={iconObj.icon}
                        title={"Application & Admission"}
                        description={"Choose the right intake, apply timely and smartly in courses and..."} />
                </div>
            </div>

            {/* Background Image */}
            <div className="absolute top-[3.9rem] left-[3rem] z-0  sm:top-[10rem] sm:left-[8rem] ">
                <div>
                    <img src={backImg} alt="" className="w-[10rem] sm:w-[15rem] md:h-[15rem] md:w-[18rem] lg:w-[20rem] xl:w-[20rem] xl:h-[17rem]  " />
                </div>
                <div className="absolute w-full sm:w-[50%] -left-7 md:top-[11rem] md:-left-8 md:w-[60%] lg:mb-10 lg:-left-10 lg:top-[13rem] ">
                    <button className="bg-[#115c8e] py-1 px-4 text-[.7rem] sm:py-2 sm:px-5 rounded-xl text-white sm:text-[1rem]">Know More</button>
                </div>
            </div>
        </div>


    )


}