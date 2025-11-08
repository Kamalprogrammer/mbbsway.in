import { NavLink } from "react-router-dom"

const mainItems = [
    { path: '/', title: "Home" },
    { path: '/about', title: "About" },
    { path: '/destination', title: "Destinations" },
    { path: '/course', title: "Course" },
    { path: '/predictor', title: "Neet Pridictor" },
    { path: '/pacakage', title: "Pacakges" },
    { path: '/contactus', title: "Contact Us" },
    { path: '/gallery', title: "Gallery" },
    { path: '/blog', title: "Blog" },


]





export default function ThirdMenuBar() {
    return (
        <div className="w-screen justify-end py-1 text-[1vw] sm:text-[1.2vw] gap-5 font-semibold px-10 hidden sm:flex">
            {mainItems.map((el) => (
                <div>
                    <NavLink to={el.path}>{el.title}</NavLink>
                </div>
            ))}
        </div>

    )
}