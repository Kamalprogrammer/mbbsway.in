import ServiceBox from "../Services/ServiceBox"
import backImg from "../../assets/services/backImg.png"
import UnderlineHeading from "../UnderlineHeading"
import Button from "../Button"
import { FaPeopleGroup } from 'react-icons/fa6';
// const cardData = [
//     {
//         title: "Experience",
//         description: "Entrepreneurs with relevant industry experience.",

//     },
//     {
//         title: "Financial Resources",
//         description: "Good financial backing and investment potential.",

//     },
//     {
//         title: "Business Acumen",
//         description: "Proven management capabilities and exceptional business traits.",

//     },
// ];


const iconObj = {
    icon: <FaPeopleGroup />
}
export default function Freanchise() {
    return (

        <div className="StudentService relative h-auto w-[90vw] sm:w-full ">

            {/* Front Section */}
            <div className="relative z-20">
                <div className="mdTopStudentService gap-4 flex sm:gap-8 justify-start items-end bg-white h-[5.7rem]">

                    <ServiceBox
                        icon={iconObj.icon}
                        title={"Experience"}
                        description={"Entrepreneurs with relevant industry experience."} />
                    <ServiceBox
                        icon={iconObj.icon}
                        title={"Financial Resources"}
                        description={"Good financial backing and investment potential."} />
                </div>
                <div className="h-[7rem] pt-13 pl-[13rem] flex justify-end items-center 
                sm:pl-[17rem] sm:h-[18rem] md:pl-[12rem]  md:pt-[11rem] md:-mr-[6rem]  
                lg:pt-[13rem] lg:-mr-[10rem] lg:pr-16 lg:pt-[2rem]  
                xl:pl-[10rem]">
                    <ServiceBox
                        icon={iconObj.icon}
                        title={"Business Acumen"}
                        description={"Proven management capabilities and exceptional business traits."} />
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