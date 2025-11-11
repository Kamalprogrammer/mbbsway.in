import { ImOffice } from "react-icons/im";

const topUniversities = [
    { id: 1, universityName: "Indian Institute of Technology, Delhi", logo: <ImOffice />, city: "Delhi", website: "https://home.iitd.ac.in/" },
    { id: 2, universityName: "Indian Institute of Science, Bangalore", logo: <ImOffice />, city: "Bangalore", website: "https://iisc.ac.in/" },
    { id: 3, universityName: "Jawaharlal Nehru University", logo: <ImOffice />, city: "New Delhi", website: "https://www.jnu.ac.in/" },
    { id: 4, universityName: "University of Mumbai", logo: <ImOffice />, city: "Mumbai", website: "https://mu.ac.in/" },
    { id: 5, universityName: "Banaras Hindu University", logo: <ImOffice />, city: "Varanasi", website: "https://www.bhu.ac.in/" },
    { id: 6, universityName: "University of Calcutta", logo: <ImOffice />, city: "Kolkata", website: "https://www.caluniv.ac.in/" },
    { id: 7, universityName: "University of Madras", logo: <ImOffice />, city: "Chennai", website: "https://www.unom.ac.in/" },
    { id: 8, universityName: "Delhi University", logo: <ImOffice />, city: "New Delhi", website: "https://www.du.ac.in/" },
    { id: 9, universityName: "Amity University", logo: <ImOffice />, city: "Noida", website: "https://www.amity.edu/" },
    { id: 10, universityName: "Symbiosis International University", logo: <ImOffice />, city: "Pune", website: "https://siu.edu.in/" },
    { id: 11, universityName: "Christ University", logo: <ImOffice />, city: "Bangalore", website: "https://christuniversity.in/" },
    { id: 12, universityName: "Manipal University", logo: <ImOffice />, city: "Manipal", website: "https://manipal.edu/" },
    { id: 13, universityName: "Savitribai Phule Pune University", logo: <ImOffice />, city: "Pune", website: "http://unipune.ac.in/" },
    { id: 14, universityName: "Osmania University", logo: <ImOffice />, website: "https://www.osmania.ac.in/" },
    { id: 15, universityName: "Aligarh Muslim University", logo: <ImOffice />, city: "Aligarh", website: "https://www.amu.ac.in/" },
    { id: 16, universityName: "Birla Institute of Technology and Science, Pilani", logo: <ImOffice />, city: "Pilani", website: "https://www.bits-pilani.ac.in/" },
    { id: 17, universityName: "Indian Institute of Technology, Bombay", logo: <ImOffice />, city: "Mumbai", website: "https://www.iitb.ac.in/" },
    { id: 18, universityName: "Indian Institute of Technology, Kanpur", logo: <ImOffice />, city: "Kanpur", website: "https://www.iitk.ac.in/" },
    { id: 19, universityName: "Vellore Institute of Technology", logo: <ImOffice />, city: "Vellore", website: "https://vit.ac.in/" },
    { id: 20, universityName: "Lovely Professional University", logo: <ImOffice />, city: "Phagwara", website: "https://www.lpu.in/" }
];


export default function TopUniversities() {
    return (
        <div>
            <div>

                <div className="px-5 gap-5">
                    <div>
                        <button
                            className="py-2 md:py-5 w-full sm:h-[8vh] px-1 flex items-center text-sm sm:text-2xl 
      justify-center gap-2 rounded text-white bg-gradient-to-r from-[#225678] to-[#e2466a]"
                        >
                            <ImOffice className="w-10 text-white" /> Top Universities
                        </button>
                    </div>

                    <div className="mb-3"></div>


                    <div className="relative overflow-y-scroll h-64  rounded-lg bg-white shadow-inner">
                        <div className="">
                            {topUniversities.map((el, index) => (
                                <div
                                    key={index}
                                    className="flex justify-start items-center gap-5 text-sm sm:text-base px-3 py-2 rounded-md"
                                >
                                    {/* University logo */}
                                    <img
                                        src={el.logo}
                                        alt={el.universityName}
                                        className="w-10 h-10 object-contain"
                                    />
                                    <p className="text-black text-xs sm:text-sm">{el.universityName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}