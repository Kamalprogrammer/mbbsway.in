import NavLinks from "../NavLinks"
import SocialMediaLink from "../SocialMediaLink"
export default function TopNavbar() {
    return (
        <section className="hidden sm:block">
            <div className=" bg-[#074366] flex justify-around items-center"> 
                <div><NavLinks /></div>
                <div><SocialMediaLink /></div>
            </div>
        </section>
    )
}