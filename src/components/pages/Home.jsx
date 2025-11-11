import { FiClipboard } from "react-icons/fi";
import SecondNavbar from "../secondNavbar";
import ThirdMenuBar from "../ThirdMenuBar";
import HeroSection from "./HeroSection";
import LinkSection from "./LinkSeciton";
import TopNavbar from "./TopNavbar";
import FilipCard from "../FilipCard"
import AboutUs from "./AboutUs";
import VideoBox from "./VideoBox";
import AutoSlider from "../AutoSlider";
import ServiceSection from "./ServiceSection";
import NeetConsultancy from "./NeetConsultancy";

export default function Home(){
    return(
        <section>
            <TopNavbar/>
            <SecondNavbar/>
            <ThirdMenuBar/>
            <HeroSection/>
            <LinkSection/>
            <FilipCard/>
            <AboutUs/>
            <VideoBox/>
            <AutoSlider/>
           <ServiceSection/>
           <NeetConsultancy/>
            
        </section>
    )
}