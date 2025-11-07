import { useState } from "react"

import StateBihar from "./StateBihar";
import StateGujrat from "./Stategujrat"
import StateKar from "./StateKarnataka"
import StateMP from "./StateMP"

const stateButton = [
    {
        id: 1,
        name: "Madhya Pradesh",
        component: <StateMP />
    },
    {
        id: 2,
        name: "Gujrat",
        component: <StateGujrat />
    },
    {
        id: 3,
        name: "Karnataka",
        component: <StateKar />
    },
    {
        id: 4,
        name: "Bihar",
        component: <StateBihar />
    },


];


export default function SelectState() {
    const [isActive, setIsActive] = useState(1);
    const handleClick = (id) => {
        setIsActive(id)
    };
    return (
        <div>
            {stateButton.map((el) => (
                <button
                    onClick={() => handleClick(el.id)}
                    className="border-2 text-sm font-semibold border-red-500 px-5 py-1 rounded gap-5 hover:bg-linear-to-r hover:from-[#155d8e] hover:to-[#f4829d]">
                    {el.name}
                </button>
            ))}

            <div>
                {stateButton.map((el) => (
                    <div>

                        {isActive === el.id && <div>
                            {el.component}</div>}
                    </div>
                ))}
            </div>

        </div>
    )
}