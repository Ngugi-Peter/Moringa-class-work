import {NavLink} from "react-router-dom";

function Navigation1() {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", backgroundColor: "#f0f0f0"}}>
        <nav>
            <NavLink to="/" style={{textDecoration: "none", color: "black", margin: "0 10px"}}>Home</NavLink>
            <NavLink to="/about" style={{textDecoration: "none", color: "black", margin: "0 10px"}}>About</NavLink>
            <NavLink to="/crazy" style={{textDecoration: "none", color: "black", margin: "0 10px"}} >Crazy page</NavLink>
            <NavLink to="/404" style={{textDecoration: "none", color: "black", margin: "0 10px"}}>404 page</NavLink>
        </nav>
        </div>
    )
}

export default  Navigation1