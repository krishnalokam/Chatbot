import React  from "react"
import {useNavigate} from "react-router-dom"
function LoginForm ({userName,handleChange,onSubmit}) {

    let navigate = useNavigate();

    function handleSubmit(event) {
        let uname = event.target.value;
        console.log(uname);
        onSubmit(userName);
        navigate("/chat");
    }

    function onKeyUp(event){
        console.log("key up"+event.charCode)
        event.charCode === 13 && handleSubmit()
    }
    
    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" onKeyPress={onKeyUp} name="userName" onChange={handleChange} value={userName} />        
            <button type="submit">Login</button>
        </form> 
    )
}

export default LoginForm;

