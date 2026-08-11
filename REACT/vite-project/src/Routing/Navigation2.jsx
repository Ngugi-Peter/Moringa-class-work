import {useNavigate, useLocation} from 'react-router-dom';
function Navigation2() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log("current location:", location);

const isActive = (btnLocation) => {
    if(location.pathname === btnLocation) {
        return {backgroundColor: "blue", color: "white", margin: "0 10px"};
    }
    return{};
};

    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", backgroundColor: "#f0f0f0"}}>
        <nav>
            <button onClick={() => navigate("/")} style={isActive("/")}>Home</button>
            <button onClick={() => navigate("/about")} style={isActive("/about")}>About</button>
            <button onClick={() => navigate("/crazy")} style={isActive("/crazy")}>Crazy page</button>
            <button onClick={() => navigate("/404")} style={isActive("/404")}>404 page</button>
        </nav>
        </div>
    )
}
export default Navigation2