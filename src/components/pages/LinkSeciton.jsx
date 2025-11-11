import TopUniversities from "../TopUniversities"
import LinksList from "../LinksList"
import ImportantNotice from "../ImportantNotice"
export default function LinkSection(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 py-15 w-[80vw] m-auto">
            <ImportantNotice/>
            <TopUniversities/>
            <LinksList/>
        </div>
    )
}