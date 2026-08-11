import {useState} from "react";
function PersonCard(props){
    const{person}=props
    const [followers, setFollowers] = usesState(0)
    const{login, repo_url, follower_url, avatar_url, html_url}=person;
    return(
        <div
        stye={{
            display:"flex",
            justifyContent:"space-between",
            marginTop:"20px",
            marginBottom:"20px",
            border:"2px solid rgba(0,0,0,0.1)",
            padding:"10px",
            borderRadius:"10px",
            >
            <img src={avatar_url} style={{height:"100px"}}/>
            <div>
            <b style={{fontSize:"20px"}}>{login}</b>
            </div>
            <div>Followers: {followers}</div>
            <button>GitHub profile</button>
            <button>GitHub profile</button>
            </div>
            </div>
        

        }}
    )
}
export default PersonCard;