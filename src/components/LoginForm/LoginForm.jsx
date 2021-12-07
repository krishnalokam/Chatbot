import React  from "react"

function LoginForm ({userName,handleChange,onSubmit}) {
    return (
        <form onSubmit={onSubmit}> 
            <input type="text" name="userName" onChange={handleChange} value={userName} />        
            <button type="submit">Login</button>
        </form> 
    )
}

export default LoginForm;

