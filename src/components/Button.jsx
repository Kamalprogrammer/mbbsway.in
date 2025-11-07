import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid"
export default function Button({ text }) {
    return (
        <div className="py-2 md:py-5 h-[10vh] px-1 w-[15vw] lg:[35vw] flex items-center justify-center gap-2 rounded text-white bg-linear-to-r from-[#155d8e] to-[#f4829d]">
            <PhoneArrowDownLeftIcon className="w-[1vw]" />
            <button className="text-[1vw]">
                {text}
            </button>
        </div>

    )
}

