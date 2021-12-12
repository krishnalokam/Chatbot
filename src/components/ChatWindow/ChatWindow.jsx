import React,{useEffect, useRef, useState} from "react"
import Note from "../Note/Note";
import moment from "moment";
import {getReply,greet} from "../../utils"

import "../chat/Chat.css"

function ChatWindow({sName}) {

   const messageRef = useRef("");
   const [notes,setNotes] = useState([])

   useEffect(() => {
        setNotes([...notes,{author:"Admin",type:"reply",message:{answer:"Welcome "+sName+" "+greet(),chips:[]},time:moment().format("hh:mm a")}]);                               
    },[]);
    
    function Clear(){
        setNotes([{author:"Admin",type:"reply",message:{answer:"Welcome "+sName+" "+greet(),chips:[]},time:moment().format("hh:mm a")}]);                               
    }
    function Query() {
        let inputMessge = messageRef.current.value;
        if(inputMessge===""){
            messageRef.current.placeholder="pls ask some thing on  weather,cricket, learning,restaurants";
            return;         
        }
                
        let note = {author:sName,type:"query",message:{answer:inputMessge,chips:[]},time:moment().format("hh:mm a")}
        messageRef.current.value = "";         
        setNotes((prev) => [...prev,note]);
       
        let replyObject = getReply(inputMessge);        
        let replyNote = {author:"Admin",type:"reply",message:replyObject,time:moment().format("hh:mm a")}         
        setNotes((prev) => [...prev,replyNote]);
    }
    
    return (
        <div>    
            <div  className="message-area">
                    { notes.map((note,idx) => <Note key={idx} note={note} /> )}  
                                 
            </div>  
            <div className="input-area"> 
                <input ref={messageRef} type="text"  className="input"  name="message" placeholder="Ask me anything on weather,cricket, learning,restaurants..." />
                
                <button  className="search" type="submit" onClick={Query} Value="Q" size="30">Q</button>
                <button  className="search" type="submit" onClick={Clear} Value="C" size="30">C</button>
                
                
            </div>
            
        </div>
    )
}

export default ChatWindow;