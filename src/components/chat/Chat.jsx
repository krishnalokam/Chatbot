import React,{useState, useEffect} from 'react';
import './Chat.css'
import ChatWindow from "../ChatWindow/ChatWindow"
import LoginForm from "../LoginForm/LoginForm"
const Chat = () => {
    
    const [userName, setUserName] = useState("");
    const [sName,setSName] = useState("");
    
    // const [note,setNote] = useState({
    //     title:"",
    //     message:""
    // });
    // const [notes,setNotes] = useState([]);

    useEffect(() =>{                
        let name = sessionStorage.getItem("userName");
        name && setSName(name);
        // console.log("useEffect name",name)                
        // console.log("useEffect sName",sName)  
    },[])

    function handleChange(event) {        
        setUserName(event.target.value);        
    }

    function handleSubmit(event){   
        let uName = event.target.userName.value
        sessionStorage.setItem("userName",uName);        
        setSName(uName);
        console.log("handleSubmit");
        console.log("value: ",uName);        
        // setNotes([...notes,{title:"Admin",message:"Welcome"+uName}])
    }

    // function handleQuery(note){
    //     setNotes([...notes,note])
    // }

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