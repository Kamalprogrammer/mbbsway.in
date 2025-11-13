import UnderlineHeading from "../UnderlineHeading"
import NeetImage from "../../assets/services/Neetimage.png"
import Button from "../Button"
import BorderButton from "../BorderButton"
export default function NeetConsultancy() {
    return (
        <div className="w-screen h-full lg:h-[100vh] 2xl:h-auto  mt-25 ">
            <div className="px-[5vw] w-full mb-10 ">

                <UnderlineHeading text={"NEET Consultancy Services by MBBSWAY  for MBBS, BDS, MD & MS Admissions"} />
            </div>

            <div className="bg-gradient-to-l from-[#94c7e5] to-white w-full 2xl:h-auto  mt-10 sm:mt-6 grid grid-cols-1 lg:grid-cols-2">

                <div className="pl-[5vw] sm:w-70% lg:w-full mb-10 py-5 lg:py-[5rem]">
                    <h1 className="text-xl font-semibold flex  text-[#0a3c68] 2xl:text-6xl ">NEET Consultancy Services by MBBSWAY  for MBBS, BDS, MD & MS Admissions</h1>

                    {/* <Button text={"Book Now"}/> */}
                    <div className="w-1/2 sm:w-[25%] lg:w-[40%] mt-5">

                        <BorderButton text={"Book Now"} />
                    </div>
                    {/* <button className="py-4 px-7 border-2 mt-3 rounded-xl border-black hover:text-white  hover:bg-gradient-to-r hover:from-[#e2466a] hover:to-[#225678] text-sm">Book Now</button> */}
                </div>
                <div className="right-5 w-full lg:w-full ">
                    <img src={NeetImage} alt="" className="h-auto 2xl:h-[35rem] " />
                </div>
            </div>


        </div>
    )
}