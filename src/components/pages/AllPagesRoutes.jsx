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
                <Route path="/predictor" element={<Predictor />} />
                <Route path="/pacakage" element={<Pacakage />} />
                <Route path="/conctactus" element={<ConctactUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
    )
}