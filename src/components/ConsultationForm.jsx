import { useState } from "react"
import BorderButton from "../components/BorderButton"

const initialState = {
    name: "",
    email: "",
    phone: "",
    designation: "none",
    text: ""
};


export default function ConsultationForm() {
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
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full"
        >
            {/* Name + Email */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full sm:w-1/2">
                    <input
                        onChange={handleChange}
                        id="name"
                        name="name"
                        type="text"
                        value={users.name}
                        placeholder="Enter your name"
                        className="w-full h-12 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
                    />
                </div>

                <div className="w-full sm:w-1/2">
                    <input
                        onChange={handleChange}
                        id="email"
                        name="email"
                        type="email"
                        value={users.email}
                        placeholder="Email"
                        className="w-full h-12 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
                    />
                </div>
            </div>

            {/* Phone + Degree */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full sm:w-1/2">
                    <input
                        value={users.phone}
                        onChange={handleChange}
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Phone"
                        className="w-full h-12 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
                    />
                </div>

                <div className="w-full sm:w-1/2">
                    <select
                        name="degree"
                        id="degree"
                        className="w-full h-12 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
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
                </div>
            </div>

            {/* Message + Button */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full sm:w-1/2">
                    <textarea
                        onChange={handleChange}
                        value={users.text}
                        rows="4"
                        placeholder="Message*"
                        className="w-full border border-gray-300 rounded-lg p-3 h-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                    ></textarea>
                </div>

                <div className="sm:w-1/2 flex items-center justify-end w-full">
                    <BorderButton
                        type={"submit"}
                        text={"Send Message"}

                    />
                </div>
            </div>
        </form>






    )
}