import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid"
export default function Button({ text, icon }) {
    return (
        <div className="py-2 md:py-5 sm:h-[8vh] px-1 w-[50vw] sm:w-[30vw] md:w-[15vw] lg:[35vw] flex items-center justify-center gap-2 rounded text-white bg-linear-to-r from-[#4284af] to-[#f4829d]">
            {icon}
            <button className="text-[3vw] md:text-[1vw] ">
                {text}
            </button>
        </div>

    )
}

