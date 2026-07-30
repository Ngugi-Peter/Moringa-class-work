import Navigation from "./navigation";
import MainSection from "./mainsection";
import Sidebar from "./sidebar";

function AmazonPage(){
    return(
        <div><Navigation/>
        <div style={{display:"flex"}}>
            <Sidebar/>
            <MainSection/>
        </div>
        </div>
    )
}
export default AmazonPage;