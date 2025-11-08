import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { CgClose } from "react-icons/cg";
import logo from "../../assets/mbbswaylogo.png"
// import NavLinks from "../NavLinks";
import MainNavbar from "../MainNavbar";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return (
        <div className="md:hidden ">
            <div
                className="bg-linear-to-r from-[#155d8e] to-[#f4829d] rounded text-white"
                onClick={() => setIsOpen(!isOpen)} //true
            >
                {isOpen ? (<Bars3Icon className="w-10" />) : (<Bars3Icon className="w-10" />)}

            </div>

    <div className={`
        overflow-y-scroll overflow-x-hidden
        transition-all duration-500 delay-200 
        absolute  left-0 top-0 
        bg-white w-[60vw] sm:w-[40vw] h-[90vh] sm:h-[70vh] 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
                {isOpen &&
                    <div className="text-white w-[60vw] sm:w-[40vw] ">
                        <div className="w-full ">
                            <div className="flex justify-between items-center py-3 px-2 border-b-2 border-b-gray-500">
                                <img src={logo} alt="" className="w-[20vw]" />
                                <button
                                    className="text-black border-2 border-black h-[2rem] rounded-xl p-2 "
                                    onClick={() => setIsOpen(false)}
                                ><CgClose /></button>
                            </div>
                            <MainNavbar />
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}
