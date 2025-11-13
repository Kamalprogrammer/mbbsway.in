import UnderlineHeading from "../UnderlineHeading";
import WorkFlowCard from "../WorkFlowCard"
export default function WorkFlow() {
    return (
        <div className="mt-[2vh] w-[90vw] h-screen m-auto ">
            <div >
                <UnderlineHeading text={"Our Work Flow"} />
            </div>
            <div className="mt-10">
                <WorkFlowCard />
            </div>


        </div>
    )
}