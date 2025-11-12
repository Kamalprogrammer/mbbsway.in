import UnderlineHeading from "../UnderlineHeading"
import NeetImage from "../../assets/services/Neetimage.png"
import Button from "../Button"
export default function NeetConsultancy() {
    return (
        <div className="w-screen h-[80vh] border-2 border-red-500 mt-25 ">
            <div className="px-[10vw] w-full">

                <UnderlineHeading text={"NEET Consultancy Services by MBBSWAY  for MBBS, BDS, MD & MS Admissions"} />
            </div>





            <div className="bg-gradient-to-l from-[#94c7e5] to-white w-full flex justify-between  mt-10">

                <div className="w-[50%] ml-[10vw]">
                    <h1 className="text-2xl flex justify-end "> NEET Consultancy Services by MBBSWAY  for MBBS, BDS, MD & MS Admissions</h1>
                    <button className="py-4 px-7 border-2 mt-3 rounded-xl border-black hover:text-white  hover:bg-gradient-to-r hover:from-[#e2466a] hover:to-[#225678] text-sm">Book Now</button>
                </div>
                <div className="right-5">
                    <img src={NeetImage} alt="" className="h-[50vh] w-[60vw]" />
                </div>
            </div>


        </div>
    )
}