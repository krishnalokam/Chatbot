import React,{useState, useEffect} from 'react';
import './Chat.css'
import ChatWindow from "../ChatWindow/ChatWindow"
import LoginForm from "../LoginForm/LoginForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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

    function handleSubmit(username){  
        console.log("chat "+username);
        let uName = username ;//event.target.userName.value
        sessionStorage.setItem("userName",uName);        
        setSName(uName);                
    }

    return(
        
        <Router> 
            <Routes>
                <Route exact path="/chat" element = {<ChatWindow sName={sName}/>} />
                <Route exact path="/" element = {<LoginForm handleChange ={handleChange} userName={userName} onSubmit={handleSubmit}/> } />                        
            </Routes>
        </Router>
    
    );
};

export default Chat; 