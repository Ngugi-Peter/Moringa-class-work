import {useState, useEffect } from "react";
import axios from "axios";

import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
function GitHubProject() {
    const [people , setPeople] = useState([])
    const getUserData = async () => {
        try {
            let response = await axios({
                method: "GET",
                url: "https://api.github.com/users"
            })
            setPeople(response.data)
        }
        catch (error) {
            console.log("erroris", error)
            }
    };
    console.log("people", people);

    useEffect(() => {
        getUserData();
    }, []);
    return(
        <div>
            <h1>GitHub Project</h1>
        </div>
    )
}
export default GitHubProject;