import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid"
export default function Button({ text, className }) {
    return (
        <button className="py-2 px-3 sm:py-3 sm:px-5 md:py-3.5 md:px-6 lg:py-4 lg:px-8 xl:py-5 xl:px-10
    flex items-center justify-center gap-2 rounded 
    text-white border-2 border-[#f65177] w-full
    hover:bg-gradient-to-r hover:from-[#155d8e] hover:to-[#f4829d] transition-all duration-300">

            <span className="text-[3vw] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black font-medium">
                {text}
            </span>
        </button>

    )
}

