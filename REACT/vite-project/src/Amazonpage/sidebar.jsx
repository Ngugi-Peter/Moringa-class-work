import Filterllist from "./filterList"
function Sidebar(){
    return(
<div style={{display:"flex", width:"200px", flexDirection:"column"}}>
    <Filterllist/>
    <Filterllist/>
    <Filterllist/>
    <Filterllist/>
    <Filterllist/>
    <Filterllist/>
</div>
    )
}
export default Sidebar