import React,{useState, useEffect} from 'react';
import './Chat.css'
import ChatWindow from "../ChatWindow/ChatWindow"
import LoginForm from "../LoginForm/LoginForm";

const Chat = () => {
    
    const [userName, setUserName] = useState("");
    const [sName,setSName] = useState("");
    
    useEffect(() =>{                
        let name = sessionStorage.getItem("userName");
        name && setSName(name);         
    },[])

    function handleChange(event) {        
        setUserName(event.target.value);        
    }

    function handleSubmit(event){   
        let uName = event.target.userName.value
        sessionStorage.setItem("userName",uName);        
        setSName(uName);                
    }

    return(
        <>
            {
                sName !==""
                ? <ChatWindow sName={sName}/>          
                : <LoginForm handleChange ={handleChange} userName={userName} onSubmit={handleSubmit}/>
            }          
        </>
    );
};

export default Chat; 