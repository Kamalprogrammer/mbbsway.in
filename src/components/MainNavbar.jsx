import { Link, NavLink } from "react-router-dom";
const routesData = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/destination", title: "Destination> " },
    { path: "/predictor", title: "Predictor" },
    { path: "/pacakage", title: "Pacakage >" },
    { path: "/conctactus", title: "Contact Us" },
    { path: "/gallery", title: "Gallery" },
    { path: "/blog", title: "Blog" },
];
export default function MainNavbar() {
    return (
        <div className="flex gap-3 font-semibold w-screen flex-wrap">
            {routesData.map((el) => (
                <div className="">
                    <NavLink to={el.path}><p className="hover:text-red-500">{el.title}</p></NavLink>
                </div>
            ))}
        </div>
    )
}