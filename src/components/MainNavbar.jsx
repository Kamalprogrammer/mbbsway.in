import { Link, NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { SiCoursera } from "react-icons/si";
import { BiPackage } from "react-icons/bi";
import { FcContacts } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { BiCheckDouble } from "react-icons/bi";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { MdArticle } from "react-icons/md";




// mobile Menu

const routesData = [
    { path: "/", title: "Home", icon: <BiHome className="text-gray-500 text-2xl" /> },
    { path: "/applyonline", title: "Apply Online", icon: <BiCheckDouble className="text-gray-500 text-2xl" /> },
    { path: "/destination", title: "Destination", icon: <FcAbout className="text-gray-500 text-2xl" /> },
    { path: "/courses", title: "Courses", icon: <SiCoursera className="text-gray-500 text-2xl"/> },
    { path: "/pacakage", title: "Pacakage", icon: < BiPackage  className="text-gray-500 text-2xl"/> },
    { path: "/contactus", title: "Contact Us", icon: <FcContacts  className="text-gray-500 text-2xl"/> },
    { path: "/gallery", title: "Gallery", icon: <FcGallery  className="text-gray-500 text-2xl"/> },
    { path: "/blog", title: "Blog", icon: <MdArticle className="text-gray-500 text-2xl" /> },
    { path: "/about", title: "About", icon: <FcAbout className="text-gray-500 text-2xl" /> },
    { path: "/signup", title: "signup/Login", icon: <BiLogIn className="text-gray-500 text-2xl" /> },



];
export default function MainNavbar() {
    return (
        <div className=" border-black py-3  flex flex-col gap-3 font-semibold flex-wrap">
            {routesData.map((el) => (
                <div className="flex gap-5 justify-even px-2 items-center  ">
                    <div className="">{el.icon }</div>
                    <NavLink to={el.path}><p className="text-gray-500">{el.title}</p></NavLink>
                </div>
            ))}
        </div>
    )
}