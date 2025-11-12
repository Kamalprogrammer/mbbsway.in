// import { useState } from "react"
// import Button from "../Button"
// import UnderlineHeading from "../UnderlineHeading";
// import SocialMediaLink from "../SocialMediaLink";

// const initialState = {
//     name: "",
//     email: "",
//     phone: "",
//     state: "none",
//     degree: "none",
// };
// export default function AboutUs() {
//     const [users, setUsers] = useState(initialState)
//     const handleChange = (e) => {
//         setUsers({ ...users, [e.target.name]: e.target.value })
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("users", users)
//         setUsers(initialState);

//     }

//     return (
//         <div className="w-[80vw] m-auto my-15">
//             <div>
//                 <p className="text-4xl font-extrabold py-5">Contact Us</p>
//             </div>
//             <div className="grid md:grid-cols-2  grid-cols-1  w-[80vw] m-auto ">
//                 <div className="text-black">

//                     <p className="w-[95%] text-start text-sm">Welcome to MBBSWAY, your trusted partner in navigating the complex journey of medical college admissions. Established with a vision to empower aspiring medical professionals.

//                         Since 2014, MBBSway has been a trusted and dedicated consultancy for guiding aspiring medical students toward fulfilling their dreams of becoming healthcare professionals. With a decade of expertise, we specialize in providing seamless admission assistance to students seeking MBBS and other medical courses in reputed colleges and universities across India and abroad.

//                         At MBBSway, we pride ourselves on offering personalized counseling, transparent processes, and end-to-end support—from college selection and application procedures to visa assistance for international studies. Our mission is to simplify the complexities of medical admissions and empower students to achieve their career goals with confidence and clarity.
//                         With a network of reputable institutions, a proven track record, and a commitment to ethical practices, MBBSway has become the go-to destination for medical aspirants looking for guidance and support. Join us to make your journey into the medical profession smooth, informed, and successful.
//                         We offer expert guidance .We typically provide assistance to students who are seeking admission to medical colleges and universities.
//                         We offer expert guidance .We typically provide assistance to students who are seeking admission to medical colleges and universities.</p>

//                 </div>




//                 {/* form Section  */}
//                 <div className="text-gray-700 grid grid-cols-2 sm:grid-cols-1 gap-0 border-1 bg-[#fce1ea] rounded-xl self-start p-5 " >
//                     <div className="text-center pt-1">
//                         <UnderlineHeading text={"Keep Connected"} />
//                         <p className="text-sm font-semibold pt-5">Feel free to reach out for caring assistance.</p>
//                     </div>

//                     <form action=""
//                         onSubmit={handleSubmit}
//                         className="mx-auto rounded-x pt-3 space-y-3 gap-3 ">

//                         {/* Name */}
//                         <div className="">
//                             <input
//                                 onChange={handleChange}
//                                 id="name"
//                                 name="name"
//                                 type="text"
//                                 value={users.name}
//                                 placeholder="Enter your name"
//                                 className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
//                             />
//                         </div>
//                         <div className="flex justify-between w-full">
//                             {/* Email */}
//                             <div className="">
//                                 <input
//                                     onChange={handleChange}
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     value={users.email}
//                                     placeholder="Email"
//                                     className="  border border-gray-700 rounded px-3 py-2 focus:outline-none 
//                                    focus:ring-1 focus:ring-gray-800"
//                                 />
//                             </div>

//                             {/* NeetScore */}
//                             <div className="">

//                                 <input
//                                     onChange={handleChange}
//                                     id="score"
//                                     name="score"
//                                     type="number"
//                                     value={users.score}
//                                     placeholder="NEET Score"
//                                     className=" border border-gray-700 rounded px-3 py-2 focus:outline-none 
//                                    focus:ring-1 focus:ring-gray-800"
//                                 />
//                             </div>

//                         </div>

//                         <div className="flex justify-between ">
//                             {/* Phone */}
//                             <div className="">

//                                 <input
//                                     value={users.phone}
//                                     onChange={handleChange}
//                                     id="phone"
//                                     name="phone"
//                                     type="number"
//                                     maxLength={12}
//                                     minLength={10}
//                                     placeholder="Phone"
//                                     className="  border  border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                 />
//                             </div>
//                             <div>
//                                 <select name="state" id="state" className="border border-gray-700 rounded px-3 py-2 
//                                 focus:outline-none focus:ring-1 focus:ring-gray-800  "
//                                     value={users.state}
//                                     onChange={handleChange}
//                                 >
//                                     <option value="none">Select State</option>
//                                     <option value="Andhra Pradesh">Andhra Pradesh</option>
//                                     <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//                                     <option value="Assam">Assam</option>
//                                     <option value="Bihar">Bihar</option>
//                                     <option value="Chhattisgarh">Chhattisgarh</option>
//                                     <option value="Goa">Goa</option>
//                                     <option value="Gujarat">Gujarat</option>
//                                     <option value="Haryana">Haryana</option>
//                                     <option value="Himachal Pradesh">Himachal Pradesh</option>
//                                     <option value="Jharkhand">Jharkhand</option>
//                                     <option value="Karnataka">Karnataka</option>
//                                     <option value="Kerala">Kerala</option>
//                                     <option value="Madhya Pradesh">Madhya Pradesh</option>
//                                     <option value="Maharashtra">Maharashtra</option>
//                                     <option value="Manipur">Manipur</option>
//                                     <option value="Meghalaya">Meghalaya</option>
//                                     <option value="Mizoram">Mizoram</option>
//                                     <option value="Nagaland">Nagaland</option>
//                                     <option value="Odisha">Odisha</option>
//                                     <option value="Punjab">Punjab</option>
//                                     <option value="Rajasthan">Rajasthan</option>
//                                     <option value="Sikkim">Sikkim</option>
//                                     <option value="Tamil Nadu">Tamil Nadu</option>
//                                     <option value="Telangana">Telangana</option>
//                                     <option value="Tripura">Tripura</option>
//                                     <option value="Uttar Pradesh">Uttar Pradesh</option>
//                                     <option value="Uttarakhand">Uttarakhand</option>
//                                     <option value="West Bengal">West Bengal</option>

//                                     {/* <!-- Union Territories --> */}
//                                     <option value="A&N">A&N</option>
//                                     <option value="Chandigarh">Chandigarh</option>
//                                     <option value="DDN">DDN</option>
//                                     <option value="Delhi">Delhi</option>
//                                     <option value="J&K">Jammu and Kashmir</option>
//                                     <option value="Ladakh">Ladakh</option>
//                                     <option value="Lakshadweep">Lakshadweep</option>
//                                     <option value="Puducherry">Puducherry</option>
//                                 </select>
//                             </div>

//                         </div>


//                         <div className="flex w-full justify-between ">


//                             {/* select Degree */}

//                             <div className="w-1/2">
//                                 <select name=" state" id="state" className=" w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800  "
//                                     onChange={handleChange}
//                                     value={users.degree}
//                                 >
//                                     <option value="none">Select Degree</option>
//                                     <option value="MBBS">MBBS </option>
//                                     <option value="BDS">BDS </option>
//                                     <option value="BAMS">BAMS</option>
//                                     <option value="BHMS">BHMS </option>
//                                     <option value="BUMS">BUMS</option>
//                                     <option value="BSMS">BSMS </option>
//                                     <option value="BNYS">BNYS</option>
//                                     <option value="BPT">BPT </option>
//                                     <option value="BOT">BOT </option>
//                                     <option value="B.Sc Nursing">B.Sc Nursing</option>
//                                 </select>
//                             </div>




//                             {/* Submit Button */}
//                             <div className="border-2 w-1/2 ">
//                                 <Button type={"submit"} text={"REGISTER NOW WITH USE"} />
//                             </div>

//                         </div>
//                     </form>

//                     <div>
//                         <div className="flex justify-start items-center gap-3">
//                             <p>Let's stay in touch: </p>
//                             <SocialMediaLink />
//                         </div>

//                         <div className="flex justify-between">
//                             <div>
//                                 <p>43 Live Count</p>
//                                 <p>Consultant</p>
//                             </div>
//                             <div>
//                                 <p>22 Free</p>
//                                 <p>Consultant</p>
//                             </div>
//                             <div>
//                                 <p>84 Free</p>
//                                 <p>Consultant</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { useState } from "react"
import Button from "../Button"
import UnderlineHeading from "../UnderlineHeading";
import SocialMediaLink from "../SocialMediaLink";

const initialState = {
    name: "",
    email: "",
    phone: "",
    state: "none",
    degree: "none",
    score: ""
};

export default function AboutUs() {
    const [users, setUsers] = useState(initialState);

    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users", users);
        setUsers(initialState);
    };

    return (
        <div className="m-auto my-15">
            <div className="w-full lg:w-[80vw] m-auto">
                <p className="  py-5 text-center md:text-left">
                    <UnderlineHeading text={"Contact Us"} />
                </p>
            </div>

            <div className="grid lg:grid-cols-[40%_60%] grid-cols-[100%] sm:gap-15 w-full lg:w-[80vw] m-auto">

                <div className="text-black ">
                    <p className="w-full text-sm leading-relaxed">
                        Welcome to MBBSWAY, your trusted partner in navigating the complex journey of medical college admissions.
                        Established with a vision to empower aspiring medical professionals.
                        <br /><br />
                        Since 2014, MBBSway has been a trusted and dedicated consultancy for guiding aspiring medical students
                        toward fulfilling their dreams of becoming healthcare professionals. With a decade of expertise,
                        we specialize in providing seamless admission assistance to students seeking MBBS and other medical
                        courses in reputed colleges and universities across India and abroad.
                        <br /><br />
                        At MBBSway, we pride ourselves on offering personalized counseling, transparent processes, and end-to-end
                        support—from college selection and application procedures to visa assistance for international studies.
                        Our mission is to simplify the complexities of medical admissions and empower students to achieve their
                        career goals with confidence and clarity.
                    </p>
                </div>

                <div className="border-8 border-red-700 relative h-[45rem] sm:h-[28rem] lg:h-full  rounded-l-2xl w-[90%] m-auto ">
                    <div className="z-10 absolute top-1 text-gray-700 flex flex-col gap-5 border bg-[#fce1ea] rounded-xl p-5 mr-20 w-full md:h-[98%] h-full my-auto">
                        <div className="text-center">
                            <UnderlineHeading text={"Keep Connected"} />
                            <p className="text-sm font-semibold pt-2">Feel free to reach out for caring assistance.</p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3 w-full"
                        >
                            {/* Name */}
                            <input
                                onChange={handleChange}
                                id="name"
                                name="name"
                                type="text"
                                value={users.name}
                                placeholder="Enter your name"
                                className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
                            />

                            {/* Email + NEET Score */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                                <input
                                    onChange={handleChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={users.email}
                                    placeholder="Email"
                                    className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
                                />
                                <input
                                    onChange={handleChange}
                                    id="score"
                                    name="score"
                                    type="number"
                                    value={users.score}
                                    placeholder="NEET Score"
                                    className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
                                />
                            </div>

                            {/* Phone + State */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                                <input
                                    value={users.phone}
                                    onChange={handleChange}
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    placeholder="Phone"
                                    className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
                                />
                                <select
                                    name="state"
                                    id="state"
                                    className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
                                    value={users.state}
                                    onChange={handleChange}
                                >
                                    <option value="none">Select State</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                            </div>

                            {/* Degree + Button */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                                <select
                                    name="degree"
                                    id="degree"
                                    className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
                                    onChange={handleChange}
                                    value={users.degree}
                                >
                                    <option value="none">Select Degree</option>
                                    <option value="MBBS">MBBS</option>
                                    <option value="BDS">BDS</option>
                                    <option value="BAMS">BAMS</option>
                                    <option value="BHMS">BHMS</option>
                                    <option value="B.Sc Nursing">B.Sc Nursing</option>
                                </select>

                                <Button
                                    type={"submit"}
                                    text={"REGISTER NOW WITH US"}
                                />
                            </div>
                        </form>

                        {/* Social & Stats */}
                        <div className="">
                            <div className="flex justify-start items-center gap-3">
                                <p>Let's stay in touch: </p>
                                <SocialMediaLink />
                            </div>

                            <div className="flex justify-between text-center  text-sm">
                                <div>
                                    <p className="font-bold text-sm">43</p>
                                    <p className="text-sm">Live Consultant</p>
                                </div>
                                <div>
                                    <p className="font-bold">22</p>
                                    <p className="text-sm">Free Consultant</p>
                                </div>
                                <div>
                                    <p className="font-bold">84</p>
                                    <p className="text-sm">Total Consultant</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
