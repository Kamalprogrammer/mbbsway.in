import logo from "../assets/mbbswaylogo.png"
import Button from "./Button"
import ContactAddress from "./ContactAddress"
import MobileMenu from "./pages/MobileMenu"
import { PhoneIcon } from "@heroicons/react/20/solid"
import { CalendarIcon } from "@heroicons/react/20/solid"
export default function SecondNavbar() {
    return (
        <div className="flex flex-col sm:flex-row py-3 px-3 xl:px-[1rem] justify-between sm:justify-around items-center gap-5 w-screen 2xl:w-[98vw] 2xl:m-auto ">

            {/* Mobile Logo+ Button */}
            <div className="logo sm:hidden flex justify-between w-full px-3  ">
                <img src={logo} alt="" className="w-[25%] self-end" />
                <div className="flex sm:hidden ">
                    <Button icon={<PhoneIcon className="sm:w-[2vw] w-[4vw]" />} text={"Live Counselling"} />
                </div>
            </div>

            {/* Dextop Logo */}

            <div className="logo hidden sm:flex gap-10  ">
                <img src={logo} alt="" className="w-[13vw] self-end" />
            </div>

            {/* Dextop Menu  */}
            <div className="flex gap-2 sm:justify-end justify-between w-full px-5">
                <div className="hidden md:block ">
                    <Button icon={<PhoneIcon className="w-[2vw]" />} text={"Live Counselling"} />
                </div>
                <ContactAddress />
                <div>
                    <Button icon={<CalendarIcon className="sm:w-[2vw] w-[4vw]" />} text={"Book Appointment"} />
                </div>

                <MobileMenu />
            </div>
        </div>
    )
}