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
        <div className="md:flex hidden items-center justify-center ">
            {contactData.map((el) => (
                <div key={el.id} className="flex flex-col items-center sm:w-[12vw] ">
                    <div className="flex items-center justify-center gap-2">
                        <img src={el.image} className="w-3" alt="" />
                        <p className="text-[1vw] font-semibold">{el.title}</p>
                    </div>
                    <div className="text-[1vw] font-semibold flex items-center justify-center"> {el.contactAddress}</div>
                </div>
            ))}
        </div>
    )
}
