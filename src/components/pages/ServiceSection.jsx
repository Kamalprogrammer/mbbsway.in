import ServiceBox from "../Services/ServiceBox"
import UnderlineHeading from "../UnderlineHeading"
import Button from "../Button"
import StudentService from "../Services/StudentService"
import Partnership from "../Services/Partnership"
import Freanchise from "../Services/Freanchise"
import { useState } from "react"







export default function ServiceSection() {
    const [isActive, setIsActive] = useState(1);
    const handleClick = (id) => {
        setIsActive(id)
        console.log("bnt clicked")
    };

    const selectService = [
        {
            id: 1,
            name: "For Student",
            component: <StudentService />
        },
           
        {
            id: 2,
            name: "For PartnerShip",
            component: <Partnership />,
            
        },
        {
            id: 3,
            name: "For Franchise",
            component: <Freanchise />,
           

        },

    ];

    return (
        <div>

            <div className="lg:h-screen w-[90vw] sm:w-[90vw] m-auto  border-2 border-blue-700  ">
                <div className="w-full">
                    <UnderlineHeading text={"MBBSWAY Services & Offerings "} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] mt-7 py-5 mb-10 justify-items-center
                md:w-[90vw] 
                ">
                    <div className="flex flex-col justify-center w-[80%] sm:w-[35%] lg:w-[60%] gap-5 mb-10">
                        {selectService.map((el) => (
                            <button
                                onClick={() => handleClick(el.id)}
                                className="border-2 text-sm font-bold sm:text-[1.5vw]   px-2 py-2 rounded
                       bg-linear-to-r from-[#b24a62] to-[#084771] text-white w-full ">
                                {el.name}
                            </button>
                        ))}


                    </div>

                    <div className="flex items-center xl:w-[90%] xl:h-full  ">
                        {selectService.map((el) => (
                            <div>

                                {isActive === el.id &&
                                    <div>
                                        {el.component}
                                    </div>}
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div >


    )
}