import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid"
export default function Button({text,sty}){
    return(
        <button className="py-1 px-1 flex items-center justify-center gap-2 rounded text-white bg-linear-to-r from-[#155d8e] to-[#f4829d]">
         <PhoneArrowDownLeftIcon className="w-3"/> <span className="text-sm font-semibold" >{text}</span>
        </button>
    )
}

