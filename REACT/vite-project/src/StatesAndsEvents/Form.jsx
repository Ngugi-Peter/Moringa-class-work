function Form() {
    const nameOnChange = (e) => {
        console.log("name is",e.target.value)
    }
    const emailOnChange = (e) => {
        console.log("Email is",e.target.value)
    }
    const passwordOnChange = (e) => {
        console.log("Password is",e.target.value)
    }
    const onSubmit = (e) => {
        console.log("Form submitted")    
    }
    return (
        <div>
            <main>
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
                    <input type="text" onChange={emailOnChange} />
                </div>
                <div>
                    <label>Password</label>
                    </div>
                <div>
                    <input type="password" onChange={passwordOnChange} />
                </div>
                </main>
                <main>
                    <button onClick={onSubmit}>Submit</button>
                </main>
        </div>
    )
}

export default Form