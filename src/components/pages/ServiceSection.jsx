import ServiceBox from "../Services/ServiceBox"
import UnderlineHeading from "../UnderlineHeading"
import StudentService from "../Services/StudentService"
import Button from "../Button"
export default function ServiceSection() {
    return (
        <div>

            <div className="w-[90vw] sm:w-[90vw] m-auto lg:h-screen border-2 border-purple-950  ">
                <div className="w-full">
                    <UnderlineHeading text={"MBBSWAY Services & Offerings "} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] mt-7 py-5 mb-10 justify-items-center
                md:w-[90vw] 
                ">
                    <div className="flex flex-col justify-center w-[80%] sm:w-[35%] lg:w-[60%]  gap-5 mb-10">
                        <Button text={"For Student"} />
                        <Button text={"For PartnerShip"} />
                        <Button text={"For Franchise"} />
                    </div>

                    <div className="flex items-center xl:w-[90%] xl:h-full  ">
                        <StudentService />
                    </div>
                </div>
            </div>
        </div >


    )
}