import ConsultationForm from "../ConsultationForm"
import ContactCard from "../ContactCard"
import UnderlineHeading from "../UnderlineHeading"
export default function Consultation() {
    return (
        <div className="h-screen mt-10 ">
            <div className="border-8 border-black w-[60vw] flex justify-end items-center"  >
                <div className="w-screen flex justify-between items-center m-auto">
                    <div>
                        <div>
                            <UnderlineHeading text={"Book A Free Consultation"} />
                        </div>
                        <div className="mt-10">
                            <ConsultationForm />
                        </div>
                    </div>
                    <div>
                        <ContactCard />
                    </div>
                </div>
            </div>




        </div>
    )
}