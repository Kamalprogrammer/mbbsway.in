import UnderlineHeading from "../UnderlineHeading"
import NeetImage from "../../assets/services/Neetimage.png"
export default function NeetConsultancy() {
    return (
        <div className="w-[90vw] ml-[8vw]">
            <div className="">
                <UnderlineHeading text={"NEET Consultancy Services by MBBSWAY  for MBBS, BDS, MD & MS Admissions"} />
            </div>
            <div className="bg-gradient-to-l from-[#94c7e5] to-white  w-full h-[50vh] flex justify-between ">

                <div className="border-2 border-red-500 ">
                    <h1 className="text-2xl font-bold"> NEET Consultancy Services by MBBSWAY  for MBBS, BDS, MD & MS Admissions</h1>
                    <button>Click Me </button>
                </div>
                <div className="right-0 overflow-hidden object-cover">
                    <img src={NeetImage} alt="" className="  h-[60vh]" />
                </div>
            </div>


        </div>
    )
}