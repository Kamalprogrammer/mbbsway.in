import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid"
export default function Button({text,className}){
    return(
        <button className="py-1 my-2 px-1 flex hover:bg-linear-to-r hover:from-[#155d8e] hover:to-[#f4829d]  items-center justify-center gap-2  rounded text-white border-2 w-full border-[#f65177]">
       <span className="text-sm  text-black text-[3vw] sm:text-xl" >{text}</span>
        </button>
    )
}

