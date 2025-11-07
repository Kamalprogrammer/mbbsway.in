import logo from "../assets/mbbswaylogo.png"
import Button from "./Button"
import ContactAddress from "./ContactAddress"
import MobileMenu from "./pages/MobileMenu"
import { CalendarIcon } from "@heroicons/react/20/solid"
export default function SecondNavbar() {
    return (
        <div className="flex py-3 px-3 justify-between sm:justify-around items-center border-2 gap-5 md:w-screen ">
            <div className="logo ">
                <img src={logo} alt="" className="w-[13vw] self-end" />
            </div>
            <div className=" flex gap-3 justify-end">
                <Button text={"Live Counselling"} />
                <ContactAddress />
                <div className="w-[10vw] h-[10vh] md:py-5 bg-linear-to-r  from-[#155d8e] to-[#f4829d] text-white py-1 px-1 rounded sm:w-[15vw] lg:[20vw] flex items-center justify-center gap-2">
                    <CalendarIcon className="w-[1vw]"/>
                    <button className="text-[1vw]  ">
                        Book Appointment
                    </button>
                </div>
                <MobileMenu/>
            </div>
        </div>
    )
}