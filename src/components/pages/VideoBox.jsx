export default function VideoBox() {
    return (
        <div className="flex mt-10 ">

            <div className="relative w-[80vw] m-auto">

                <div className="relative w-[45vw] h-[55vh] border-8 border-red-600"></div>
                <div className="
                
                absolute top-8 left-8 
                ">
                    <iframe
                        className=" w-[45vw] h-[55vh] rounded-xl"
                        src="https://www.youtube.com/embed/I0S1Vv2DrjE?si=755VxXATOFf4zu42&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>



            </div>
        </div>
    )
}