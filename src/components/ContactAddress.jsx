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
        contactAddress: ["info@mbbsway.in", "support@mbbsway.in"],

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
        <div>
            {contactData.map((el) => (
                <div key={el.id} className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-2">
                        <img src={el.image} className="w-7 " alt="" />
                        <p>{el.title}</p>
                    </div>
                    <div className="text-xl"> {el.contactAddress}</div>
                </div>
            ))}
        </div>
    )
}
