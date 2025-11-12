import call from "../assets/call.png"
import mail from "../assets/mail.png"
import wh from "../assets/whatsapp.png"
const contactData = [
    {
        id: 1,
        image: call,
        title: "Call Us",
        contactAddress: "support@example.com",
    },
    {
        id: 2,
        image: mail,
        title: "Email Us",
        contactAddress: ["info@mbbsway.in"],

    },
    {
        id: 3,
        image: wh,
        title: "Whats App",
        contactAddress: "+91 9876543210",
    },
];

export default function contactAddress() {
    return (
        <div className="md:flex hidden items-center justify-center 2xl:w-[50rem] ">
            {contactData.map((el) => (
                <div key={el.id} className="flex flex-col items-center sm:w-[12vw] xl:w-[12rem]  2xl:w-[15rem] ">
                    <div className="flex items-center justify-center gap-2">
                        <img src={el.image} className="w-3 xl:w-6 2xl:w-10" alt="" />
                        <p className="text-[1vw] font-semibold xl:text-[1rem] 2xl:text-[1.5rem]">{el.title}</p>
                    </div>
                    <div className="text-[1vw] font-semibold flex items-center justify-center  xl:text-[1rem] 2xl:text-[1.5rem]"> {el.contactAddress}</div>
                </div>
            ))}
        </div>
    )
}
