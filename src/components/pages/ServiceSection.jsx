import ServiceBox from "../ServiceBox"
import UnderlineHeading from "../UnderlineHeading"
export default function ServiceSection() {
    return (

        <div>
             <UnderlineHeading text={"MBBSWAY Services & Offerings "}/>
        <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-auto justify- items-center border-2">
            <div className="">
                <h1>Main Selction Buttons </h1>
            </div>
            <div className="bottom-8 border-2 border-blue-600 gap-10 flex flex-col">
                <div className=" flex">
                    <div> <ServiceBox /></div>
                    <div> <ServiceBox /></div>
                </div>
                <div className="flex items-end justify-end right-0">

                    <ServiceBox />
                </div>
            </div>
        </div>
        </div>
    )
}