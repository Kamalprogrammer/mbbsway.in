import About from "./About"
import Destination from "./Destination"
import Gallery from "./Gallery"
import Predictor from "./Predictor"
import Pacakage from "./Pacakage"
import ConctactUs from "./ConctactUs"

import Blog from "./Blog"

export default function AllPagesRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/course" element={<Course />} />
                <Route path="/predictor" element={<Predictor />} />
                <Route path="/pacakage" element={<Pacakage />} />
                <Route path="/contactus" element={<ConctactUs />} />
                <Route path="/gallery" element={<Gallery />} />

                {/* for menu bar  */}
                <Route path="/applyonline" element={<ApplyOnline/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/login" element ={<Login/>} />
                <Route path="/courses" element ={<Courses/>} />
                
                
               
               

            </Routes>
        </div>
    )
}