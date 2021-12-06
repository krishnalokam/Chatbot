import React, { useState } from 'react';

const Login = () => {
    const [userName, setUserName] = useState("");

    function handleChange(event) {
        setUserName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        sessionStorage.setItem("userName",userName);
        console.log("handleSubmit")

    }

    return(
        <>
        <form onSubmit={handleSubmit}> 
        <input type="text" name="userName" onChange={handleChange} value={userName} />        
        <button type="submit">Login</button>
        </form>
        </>
    );
};

export default Login;