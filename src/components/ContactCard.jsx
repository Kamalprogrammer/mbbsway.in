import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactFormImage from "../assets/ContactFormImage.png"


export default function ContactCard() {
    return (
        <div>
            <div className="max-w-md sm:max-w-2xl mx-auto border-2 border-blue-500 rounded-xl p-5 bg-pink-50 text-center relative overflow-hidden">
                {/* Top Stats */}
                <div className="flex flex-col sm:flex-row justify-around items-center border-b border-blue-300 pb-4 mb-4">
                    <div>
                        <p className="text-blue-700 text-lg font-semibold">43 Live</p>
                        <p className="text-gray-600 text-sm">Consultant</p>
                    </div>
                    <div>
                        <p className="text-blue-700 text-lg font-semibold">22 Free</p>
                        <p className="text-gray-600 text-sm">Consultant</p>
                    </div>
                    <div>
                        <p className="text-blue-700 text-lg font-semibold">84 Booked</p>
                        <p className="text-gray-600 text-sm">Consultant</p>
                    </div>
                </div>

                {/* Address + Contact Info */}
                <div className="text-left text-pink-600 space-y-3">
                    <p className="flex items-start gap-2">
                        <FaMapMarkerAlt className="text-pink-600 mt-1" size={18} />
                        <span>
                            46, Archana Tower, C-sector, Indrapuri, Bhopal, (MP) - 462022
                        </span>
                    </p>
                    <p className="flex items-start gap-2">
                        <FaPhoneAlt className="text-pink-600 mt-1" size={18} />
                        <span>
                            Contact No : 918447968825,
                            <br />
                            918959977624
                        </span>
                    </p>
                    <p className="flex items-start gap-2">
                        <FaEnvelope className="text-pink-600 mt-1" size={18} />
                        <span>
                            Email : info@mbbsway.in,
                            <br />
                            support@mbbsway.in
                        </span>
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center mt-5">
                    <img
                        src={ContactFormImage}
                        alt="Doctor 1"
                        className="w-28 h-28 object-contain"
                    />
                    
                </div>
            </div>



        </div>
    )
}