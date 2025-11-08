import SecondNavbar from "../secondNavbar";
import ThirdMenuBar from "../ThirdMenuBar";
import HeroSection from "./HeroSection";
import TopNavbar from "./TopNavbar";

export default function Home(){
    return(
        <section>
            <TopNavbar/>
            <SecondNavbar/>
            <ThirdMenuBar/>
            <HeroSection/>
            
        </section>
    )
}