import logo from "../assets/mbbswaylogo.png"
import Button from "./Button"
import ContactAddress from "./ContactAddress"
import MobileMenu from "./pages/MobileMenu"
import { PhoneIcon } from "@heroicons/react/20/solid"
import { CalendarIcon } from "@heroicons/react/20/solid"
export default function SecondNavbar() {
    return (
        <div className="flex flex-col sm:flex-row py-3 px-3 justify-between sm:justify-around items-center  gap-5 w-screen ">
            <div className="logo sm:hidden flex justify-between w-screen px-3  ">
                <img src={logo} alt="" className="w-[25vw] self-end" />
                <div className="flex sm:hidden ">
                    <Button icon={<PhoneIcon className="sm:w-[2vw] w-[4vw]" />} text={"Live Counselling"} />
                </div>
            </div>
            <div className="logo hidden sm:flex gap-10  ">
                <img src={logo} alt="" className="w-[13vw] self-end" />
            </div>

            <div className="flex gap-3 sm:justify-end justify-between w-screen px-5 ">
                <div className="hidden md:block">
                    <Button icon={<PhoneIcon className="w-[2vw]" />} text={"Live Counselling"} />
                </div>
                <ContactAddress />
                <Button icon={<CalendarIcon className="sm:w-[2vw] w-[4vw]" />} text={"Book Appointment"} />
                <MobileMenu />
            </div>
        </div>
    )
}