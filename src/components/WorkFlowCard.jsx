import flowcard from "../assets/wf/flowcard.png"
import one from "../assets/wf/one.png"
import two from "../assets/wf/two.png"
import three from "../assets/wf/three.png"
import four from "../assets/wf/four.png"
const serviceSteps = [
    {
        id: 1,
        title: "Preliminary Discussion",
        description:
            "We gather relevant info about the candidate like score, aspirations, budget to design a detailed report.",
        icon: one, // you can import & use the icon as a component
        borderColor: "from-pink-400 to-blue-800", // for gradient border
        defaultIcon: flowcard
    },
    {
        id: 2,
        title: "1-To-1 Counselling",
        description:
            "Extensive personalized session with experts for profile mapping, query resolution and admission processing.",
        icon: two,
        borderColor: "from-pink-400 to-blue-800",
        defaultIcon: flowcard
    },
    {
        id: 3,
        title: "Tracking & Monitoring",
        description:
            "We track and monitor all the key info & notices and keep you posted through regular alerts and actionable updates.",
        icon: three,
        borderColor: "from-pink-400 to-blue-800",
        defaultIcon: flowcard
    },
    {
        id: 4,
        title: "Admission Support",
        description:
            "We handhold you throughout the entire counselling process, till you secure admission in your desired college.",
        icon: four,
        borderColor: "from-pink-400 to-blue-800",
        defaultIcon: flowcard
    },
];



export default function WorkFlowCard() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-items-start  2xl:w-screen">
        


            {serviceSteps.map((el) => (
                <div key={el.id} className=" relative w-full 2xl:w-[100%] 2xl:h-auto 
                object-cover m-auto justify-center flex items-center align-middle ">

                    <img src={el.defaultIcon} alt="" className="
                    md:w-full md:h-[18rem] 
                    lg:w-full lg:h-[20rem] 
                    2xl:w-full 2xl:h-[40rem]" />
                    {/* inner div  */}
                    <div className=" absolute m-auto lg:pl-2 w-[18rem] h-[18rem] md:w-[18rem] md:h-[16rem] 
                     lg:w-[13rem] lg:h-[15rem] xl:w-[18rem] 2xl:w-full 2xl:h-full flex ">

                        <div className=" absolute z-10 overflow-hidden pt-5 ml-5  w-[15rem] h-[18rem] 
                        md:ml-0 md:w-[18rem] md:h-[15rem] md:pl-0 
                         lg:w-[12rem] xl:w-[16rem]  lg:auto xl:p-5 2xl:p-20 2xl:w-full 2xl:h-full">
                            <img src={el.icon} alt="" className="w-20 h-20 2xl:w-60 2xl:h-60" />
                            <div>
                                <p className="2xl:text-4xl  2xl:pb-5 font-bold">{el.title}</p>
                                <p className="lg:text-sm 2xl:text-2xl">{el.description}</p>
                            </div>
                        </div>
                        <div className="absolute right-0 bg-[#f4829d] 
                        w-12 h-12 
                        lg:w-12 lg:h-12 lg:p-3 2xl:p-1 2xl:h-30 2xl:w-30 flex justify-center items-center rounded-full ">
                            <p className="-top-2 right-0 md:text-4xl lg:text-4xl 2xl:text-4xl  text-[#125c8e]">{el.id}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}