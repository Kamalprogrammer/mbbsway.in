import ServiceBox from "../Services/ServiceBox"
import backImg from "../../assets/services/backImg.png"
import UnderlineHeading from "../UnderlineHeading"
import Button from "../Button"
const studentData = [
    {
        title: "Counselling",
        description: "Our counselling sessions will immensely benefit you in making..."
    },
    {
        title: "Course, State & University selection",
        description: "We help you choose the ideal course, university state that..."
    },
    {
        title: "Application & Admission",
        description: "Choose the right intake, apply timely and smartly in courses and..."
    },

]
export default function StudentService() {
    return (

        <div className="StudentService relative h-[90vh] w-[90vw] sm:w-full ">

            {/* Front Section */}
            <div className="relative z-20">
                <div className="mdTopStudentService gap-4 flex sm:gap-8 justify-start items-end bg-white ">

                    <ServiceBox />
                    <ServiceBox />
                </div>
                <div className="h-[15rem] pt-20  lg:pr-16 lg:pt-[2rem] flex justify-end items-center pl-[13rem] sm:pl-[17rem] sm:h-[18rem] md:pl-[12rem]  md:pt-[4rem] md:-mr-[6rem]  xl:pl-[10rem]  lg:pt-[4rem] lg:-mr-[0rem]">
                    <ServiceBox />
                </div>
            </div>

            {/* Background Image */}
            <div className="absolute top-[3.9rem] left-[3rem] z-0  sm:top-[10rem] sm:left-[8rem] ">
                <div>
                    <img src={backImg} alt="" className="w-[10rem] sm:w-[15rem] md:h-[15rem] md:w-[18rem] lg:w-[20rem] xl:w-[20rem] xl:h-[17rem]  " />
                </div>
                <div className="absolute  w-[50%] md:top-[11rem] md:-left-8 md:w-[60%] lg:mb-10 lg:-left-10 lg:top-[13rem] ">
                    <button className="bg-[#115c8e] py-2 px-5 rounded-xl text-white text-[1rem]">Know More</button>
                </div>
            </div>
        </div>


    )


}