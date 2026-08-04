import { useState } from "react";
function Form2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const nameOnChange = (e) => {
        setName(e.target.value);
    };
    const emailOnChange = (e) => {
        setEmail(e.target.value);
    };
    const passwordOnChange = (e) => {
        setPassword(e.target.value);
    };
return (
    <div>
        <div>
         <label>Name</label>
         </div>
                <div>
                    <input type="text" onChange={nameOnChange} />
                </div>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input type="email" onChange={emailOnChange} />
                </div>
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input type="password" onChange={passwordOnChange} />
                </div>
        <button onClick={() => {
            console.log("Form submitted");
            console.log("Name is", name);
            console.log("Email is", email);
            console.log("Password is", password);
            console.log("Phone is", phone);
        }}>
            Submit
        </button>
    </div>
);
}
export default Form2;