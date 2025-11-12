export default function VideoBox() {
    return (
        <div className="flex mt-10 md:w-[80vw] md:m-auto   ">



            <div className="relative w-screen sm:w-[50vw] h-[17rem] lg:w-[50%] border-8 border-red-600">
                <div className="p-2 sm:p-5 sm:top-8 sm:left-8 top-5 sm:top-10 ">
                    <iframe
                        className="rounded-xl w-[95%] h-[14rem] sm:w-[50vw] sm:h-[18rem] lg:w-[115%] lg:h-[17rem]"
                        src="https://www.youtube.com/embed/I0S1Vv2DrjE?si=755VxXATOFf4zu42&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>



        </div>
    )
}