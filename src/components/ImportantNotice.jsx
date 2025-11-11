import Button from "./Button";



const importantNotice = [
  {
    id: 1,
    title: "MP Board Exam Form 2025 Released",
    date: "2025-11-05",
    description: "Students can now fill out the MP Board 10th and 12th exam form online till 30th November 2025.",
    link: "https://mpbse.nic.in/exam-form-2025"
  },
  {
    id: 2,
    title: "NEET 2025 Registration Started",
    date: "2025-11-02",
    description: "NEET UG 2025 application process has started. Candidates must apply before 15th December 2025.",
    link: "https://neet.nta.nic.in"
  },
  {
    id: 3,
    title: "CUET 2025 Notification Out",
    date: "2025-11-06",
    description: "CUET 2025 exam schedule and syllabus released by NTA.",
    link: "https://cuet.samarth.ac.in"
  },
  {
    id: 4,
    title: "JEE Main 2025 Application Open",
    date: "2025-11-01",
    description: "NTA opens the window for JEE Main 2025 registration till 30th November.",
    link: "https://jeemain.nta.nic.in"
  },
  {
    id: 5,
    title: "SSC GD Constable 2025 Notification",
    date: "2025-10-29",
    description: "SSC releases GD Constable notification for 84,000 posts across India.",
    link: "https://ssc.gov.in"
  },
  {
    id: 6,
    title: "UP Board Time Table 2025 Released",
    date: "2025-11-07",
    description: "UP Board 10th and 12th class exam schedule released on official website.",
    link: "https://upmsp.edu.in"
  },
  {
    id: 7,
    title: "IGNOU December 2025 Exam Form Open",
    date: "2025-11-08",
    description: "IGNOU opens exam form submission for December term-end exams.",
    link: "https://exam.ignou.ac.in"
  },
  {
    id: 8,
    title: "Rajasthan Board Admit Card 2025 Soon",
    date: "2025-11-06",
    description: "RBSE will soon release admit cards for class 10th and 12th.",
    link: "https://rajeduboard.rajasthan.gov.in"
  },
  {
    id: 9,
    title: "GATE 2025 Registration Last Date Extended",
    date: "2025-11-04",
    description: "IIT Roorkee extends the last date for GATE 2025 application till 12th November.",
    link: "https://gate.iitr.ac.in"
  },
  {
    id: 10,
    title: "CTET 2025 Application Form Available",
    date: "2025-11-03",
    description: "CBSE opens the online application for CTET 2025 January session.",
    link: "https://ctet.nic.in"
  },
  {
    id: 11,
    title: "AIIMS Nursing 2025 Notification Released",
    date: "2025-10-31",
    description: "AIIMS announces B.Sc and M.Sc Nursing exam dates for 2025 session.",
    link: "https://aiimsexams.ac.in"
  },
  {
    id: 12,
    title: "SSC CHSL Tier II Exam Date Declared",
    date: "2025-11-07",
    description: "SSC CHSL Tier II to be held on 22nd December 2025.",
    link: "https://ssc.gov.in"
  },
  {
    id: 13,
    title: "MPPSC 2025 Prelims Form Out",
    date: "2025-11-08",
    description: "MPPSC releases notification for State Service Exam 2025.",
    link: "https://mppsc.mp.gov.in"
  },
  {
    id: 14,
    title: "Railway RRB JE 2025 Expected Soon",
    date: "2025-11-05",
    description: "RRB expected to release Junior Engineer recruitment this month.",
    link: "https://indianrailways.gov.in"
  },
  {
    id: 15,
    title: "CUCET 2025 Registration Starts",
    date: "2025-11-09",
    description: "Apply for Central University Common Entrance Test 2025.",
    link: "https://cucet.nta.nic.in"
  },
  {
    id: 16,
    title: "SSC CGL 2025 Tier I Result Expected Soon",
    date: "2025-11-10",
    description: "CGL result for Tier I exam expected to be released next week.",
    link: "https://ssc.gov.in"
  },
  {
    id: 17,
    title: "Bihar Board 2025 Exam Form Correction",
    date: "2025-11-03",
    description: "Students can correct their BSEB exam forms till 12th November.",
    link: "https://biharboardonline.com"
  },
  {
    id: 18,
    title: "CBSE Sample Papers 2025 Released",
    date: "2025-10-30",
    description: "CBSE publishes sample papers and marking schemes for all classes.",
    link: "https://cbseacademic.nic.in"
  },
  {
    id: 19,
    title: "NDA 2025 Notification Announced",
    date: "2025-10-25",
    description: "UPSC announces NDA 2025 exam schedule.",
    link: "https://upsc.gov.in"
  },
  {
    id: 20,
    title: "CUET PG 2025 Application Live",
    date: "2025-11-08",
    description: "NTA starts the registration for CUET PG 2025 examination.",
    link: "https://pgcuet.samarth.ac.in"
  }
];

import { CgNotes } from "react-icons/cg";
export default function ImportantNotice() {
  return (
    <div>
      <div className="px-5 gap-5">
        <div className="">
          <button className="py-2 md:py-5 w-full sm:h-[8vh] px-1 flex items-center text-sm sm:text-2xl 
              justify-center gap-2 rounded text-white bg-linear-to-r from-[#225678] to-[#e2466a]" >
            <CgNotes className="w-10 text-white" />Important Links</button>
        </div>
        <div className="mb-3">
        </div>


        <div className="relative overflow-hidden h-64 rounded-lg bg-white shadow-inner">
          <div className="animate-scroll ">
            {importantNotice.map((el, index) => (

              <div
                key={index}
                className="flex justify-between text-sm sm:text-base bg-gray-50 
              px-3 py-2 rounded-md shadow-sm hover:bg-blue-50 transition"
              >
                <p className="text-gray-700 w-3/4">{el.description}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{el.date}</p>
              </div>
            ))}


            {importantNotice.map((el, index) => (
              <div
                key={`dup-${index}`}
                className="flex justify-between text-sm sm:text-base bg-gray-50 
              px-3 py-2 rounded-md shadow-sm hover:bg-blue-50 transition"
              >
                <p className="text-gray-700 w-3/4">{el.description}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{el.date}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}