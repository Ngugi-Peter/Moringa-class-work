import Filterllist from "./filterList"
function Sidebar(){
    return(
<div style={{display:"flex", width:"200px", flexDirection:"column"}}>
    <Filterllist title={"Condition"} options={["New", "Renew", "Used"]} />
    <Filterllist title={"Price"} options={["Under $25", "$25 - $50", "$50 - $100", "Over $100"]} />
    <Filterllist title={"Brand"} options={["Brand A", "Brand B", "Brand C"]} />
    <Filterllist title={"Customer Review"} options={["4+ Stars", "3+ Stars", "2+ Stars"]} />
    <Filterllist title={"Availability"} options={["In Stock", "Limited Time Offer"]} />
    <Filterllist title={"Delivery Options"} options={["Free Shipping", "Express Delivery", "Pick up at Store"]} />
</div>
    )
}
export default Sidebar