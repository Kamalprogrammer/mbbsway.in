import { useState } from "react"
import Hero1 from "../assets/Hero1.png"
import Hero2 from "../assets/Hero2.png"
import Hero3 from "../assets/Hero3.png"
import Hero4 from "../assets/Hero4.png"

import StateBihar from "./StateBihar";
import StateGujrat from "./Stategujrat"
import StateKar from "./StateKarnataka"
import StateMP from "./StateMP"

const stateButton = [
    {
        id: 1,
        name: "Madhya Pradesh",
        component: <StateMP />,
        image: Hero4
    },
    {
        id: 2,
        name: "Gujrat",
        component: <StateGujrat />,
        image: Hero2
    },
    {
        id: 3,
        name: "Karnataka",
        component: <StateKar />,
        image: Hero3
    },
    {
        id: 4,
        name: "Bihar",
        component: <StateBihar />,
        image: Hero1
    },


];


export default function SelectState() {
    const [isActive, setIsActive] = useState(1);
    const handleClick = (id) => {
        setIsActive(id)
    };
    return (
        <div className="w-screen  border-black">
            <div className=" w-full object-cover">
                {stateButton.map((el) => (
                    <div>
                        {isActive === el.id &&
                            <div className="">
                                <img src={el.image} alt="" className="" />
                            </div>}
                    </div>

                ))}
            </div>

            <div className="sm:-mt-[20vh] gap-5 grid grid-cols-2 sm:grid-cols-4 m-auto items-center sm:h-30  w-[80vw]">


                {stateButton.map((el) => (

                    <button
                        onClick={() => handleClick(el.id)}
                        className="border-2 text-sm font-bold sm:text-[1.5vw] bg-white border-red-500 px-2 py-2 rounded
                         hover:bg-linear-to-r hover:from-[#155d8e] hover:to-[#f4829d] w-full  ">
                        {el.name}
                    </button>

                ))}

            </div>

            <div>
                {stateButton.map((el) => (
                    <div>

                        {isActive === el.id &&
                            <div>
                                {el.component}
                            </div>}
                    </div>
                ))}
            </div>

        </div>
    )
}