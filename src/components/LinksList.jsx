const usefulLink = [
  { id: 1, icon: "📝", title: "Exam Registration Portal", link: "https://mpbse.mponline.gov.in/", description: "Register for MP Board Exams 2025." },
  { id: 2, icon: "🎓", title: "Scholarship Form 2025", link: "https://scholarshipportal.mp.gov.in/", description: "Apply for government scholarships online." },
  { id: 3, icon: "📚", title: "College Admission 2025", link: "https://admission.dte.mponline.gov.in/", description: "Fill online admission forms for DTE colleges." },
  { id: 4, icon: "💼", title: "Job Portal", link: "https://naukri.com/", description: "Find latest job openings and career opportunities." },
  { id: 5, icon: "📆", title: "Exam Calendar 2025", link: "https://nta.ac.in/", description: "Check the updated NTA exam calendar for 2025." },
  { id: 6, icon: "🔗", title: "CUET Registration 2025", link: "https://cuet.samarth.ac.in/", description: "Apply online for CUET 2025." },
  { id: 7, icon: "🏛️", title: "University Admission Portal", link: "https://ugadmission.samarth.edu.in/", description: "Centralized university admission system." },
  { id: 8, icon: "💰", title: "Education Loan Scheme", link: "https://vidyalakshmi.co.in/", description: "Apply for education loans through Vidya Lakshmi Portal." },
  { id: 9, icon: "🧾", title: "Aadhaar Update Link", link: "https://uidai.gov.in/", description: "Update or download Aadhaar card." },
  { id: 10, icon: "🎤", title: "Skill Development Portal", link: "https://skillindia.gov.in/", description: "Enroll for government skill training programs." },
  { id: 11, icon: "🌐", title: "Digital Locker", link: "https://digitallocker.gov.in/", description: "Access your educational certificates digitally." },
  { id: 12, icon: "🖥️", title: "CBSE Online Services", link: "https://cbse.gov.in/", description: "Access online CBSE academic resources." },
  { id: 13, icon: "📑", title: "UGC NET 2025 Registration", link: "https://ugcnet.nta.ac.in/", description: "Apply online for UGC NET 2025 exam." },
  { id: 14, icon: "📱", title: "Mobile Seva Portal", link: "https://mobile.gov.in/", description: "Get access to government mobile services." },
  { id: 15, icon: "🏫", title: "AICTE College Directory", link: "https://aicte-india.org/", description: "View approved colleges and institutes list." },
  { id: 16, icon: "📦", title: "Document Verification Portal", link: "https://verification.mponline.gov.in/", description: "Verify academic and personal documents online." },
  { id: 17, icon: "🧮", title: "Online Fee Payment", link: "https://fee.mponline.gov.in/", description: "Pay your university or exam fees easily." },
  { id: 18, icon: "📧", title: "Student Helpdesk", link: "https://helpdesk.mponline.gov.in/", description: "Raise your academic or registration queries." },
  { id: 19, icon: "📜", title: "Result Portal", link: "https://results.nic.in/", description: "Check your board and university results." },
  { id: 20, icon: "🔍", title: "Admit Card Download", link: "https://admitcard.mponline.gov.in/", description: "Download admit cards for upcoming exams." }
];
import { Link } from "react-router-dom";
import { LinkIcon } from "@heroicons/react/20/solid";
export default function LinksList() {
  return (
    <div>
      <div>
        <div className="px-5 gap-5">
          {/* Header Button */}
          <div>
            <button
              className="py-2 md:py-5 w-full sm:h-[8vh] px-1 flex items-center text-sm sm:text-2xl 
      justify-center gap-2 rounded text-white bg-gradient-to-r from-[#225678] to-[#e2466a]"
            >
              <LinkIcon className="w-10 text-white" /> Useful Links
            </button>
          </div>

          {/* Scrollable Container */}
          <div className="relative overflow-y-auto h-64  rounded-lg bg-white shadow-inner scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
            <div className="">
              {usefulLink.map((el, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-start gap-5 text-sm sm:text-base 
          px-3 py-2 rounded-md overflow-hidden bg-gradient-to-r
          animate-gradient-move cursor-pointer"
                >
                  <LinkIcon className="w-7 text-blue-600" />
                  <Link
                    to={`${el.link}`}
                    className="text-gray-700 text-xs sm:text-sm"
                  >
                    {el.description}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
