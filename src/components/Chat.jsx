import React,{useState, useEffect, useRef} from 'react';

const Chat = () => {
    
    const [userName, setUserName] = useState("");
    const sname = useRef("")
    useEffect(() =>{        
        console.log("useEffect "+name);
        let name = sessionStorage.getItem("userName")
        
    },[])

    function handleChange(event) {
        event.preventDefault();
        setUserName(event.target.value);        
    }

    function handleSubmit(event){        
        sessionStorage.setItem("userName",event.target.value);
        setUserName(event.target.value)
        console.log("handleSubmit")
    }

    return(
        <>
        {userName !="" ? 
            <div>
            <p>{userName}</p>
        </div> 
        :
        <form onSubmit={handleSubmit}> 
            <input type="text" name="userName" onChange={handleChange} value={userName} />        
            <button type="submit">Login</button>
        </form>  
          
        }          
        </>
    );
};

export default Chat;