import pink from "../assets/services/pink.png"
import blue from "../assets/services/blue.png"
import dot from "../assets/services/dot.png"
import { PiStudent } from "react-icons/pi"
import UnderlineHeading from "./UnderlineHeading"

export default function ServiceBoc() {
    return (
        <div className="w-full h-full m-auto relative" >
           
            <div>
                <div className="topOne px-1"><img src={pink} alt="" className="w-full" /></div>
                <div className="moddleOne flex justify-between">
                    <img src={dot} alt="" />

                    <img src={dot} alt="" />
                </div>
                <div className="bottomOne px-1">
                    <img src={blue} alt="" className="w-full" />
                </div>
            </div>
            <div className="text absolute top-7 m-auto w-full flex justify-center items-center ">
                <div className=" border-6 border-b-pink-300 border-r-pink-300 border-l-0 border-t-0 w-[80%] h-[30vh] flex justify-center items-center">
                    <div className="border-2 text-center">
                        <PiStudent className="" />
                        <p className="text-sm font-semibold">Title</p>
                        <p className="text-sm ">Discription</p>
                    </div>
                </div>
            </div>

        </div>
    )
}