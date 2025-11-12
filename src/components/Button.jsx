import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid"
export default function Button({ text, icon, className, type }) {
    return (
        <button
            type={type}
            className="w-full  flex items-center justify-center gap-2 
             rounded text-white bg-gradient-to-r from-[#225678] to-[#e2466a] 
               hover:opacity-90 transition-all duration-200 btnResClass
            "
        >
            {icon} {text}
        </button>


    )
}

