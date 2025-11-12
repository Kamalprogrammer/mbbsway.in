// import pink from "../assets/services/pink.png"
// import blue from "../assets/services/blue.png"
// import dot from "../assets/services/dot.png"

import dot from "../../assets/services/dot.png"
import pink from "../../assets/services/pink.png"
import blue from "../../assets/services/blue.png"
import { PiStudent } from "react-icons/pi"
import UnderlineHeading from "../UnderlineHeading"






export default function ServiceBox() {
    return (
        <div className="ServiceBox h-full flex ">
            <div className="ServicelgBoxClass relative bg-white  h-[4rem] w-[8rem] sm:w-[15rem] sm:h-[12rem] md:h-[11rem] " >

                <div  >
                    <div className="px-1" >
                        <img src={pink} alt="" className="w-full" /></div>
                    <div className="middleDot  flex justify-between">
                        <img src={dot} alt="" className="w-3 h-3" />
                        <img src={dot} alt="" className="w-3 h-3" />
                    </div>
                    <div className="bottomOne px-1">
                        <img src={blue} alt="" className="w-full" />
                    </div>
                </div>
                <div className="InnerServicelgBoxClass text absolute flex justify-center items-center top-2.25 right-4  sm:top-5 sm:right-8 w-[6rem] h-[4.5rem] sm:w-[10rem] sm:h-[8rem]  ">
                    <div className="border-6 border-b-pink-300 border-r-pink-300 border-l-0 border-t-0 h-full w-full ">
                        <div className="text-center w-full h-full m-auto flex flex-col justify-center items-center">
                            <div><PiStudent className="sm:w-[4rem] sm:h-[4rem]" /></div>
                            <p className="text-[.5rem]  font-semibold sm:text-sm">Title</p>
                            <p className="text-[.5rem] sm:text-sm ">description</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}