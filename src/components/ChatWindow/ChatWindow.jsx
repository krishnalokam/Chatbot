import React,{useEffect, useRef, useState} from "react"
import Note from "../Note/Note";
import moment from "moment";

function ChatWindow({sName}) {
    const messageRef = useRef("");
   const [notes,setNotes] = useState([])
    
    useEffect(() => {
        setNotes([...notes,{title:"Admin",type:"reply",message:"Wecome "+sName}])
    },[]);

    function Query(){
        let qna=[];
        let query = messageRef.current.value;
        let note = {title:sName,type:"query",message:query,time:moment().format("hh:mm a")} ;       
        
        qna.push(note);
        let reply = query.search("weather") >=0 
                ? "Its gonna rain today, please carry an umberella."
                :"I didnt understand you"
        let replynote = {title:"Admin",type:"reply",message:reply,time:moment().format("hh:mm a")};
        qna.push(replynote);
        messageRef.current.value="";
        setNotes([...notes,...qna]);
        console.log(qna);
        // setNotes([...notes,note])                
        // getReply(query)
    }

    function getReply(query) {
                
        let reply = query.search("weather") >=0 
                ? "Its gonna rain today, please carry an umberella."
                :"I didnt understand you"
        let replynote = {title:"Admin",type:"reply",message:reply,time:moment().format("hh:mm a")}
        // qna.push(replynote);
        setNotes([...notes,replynote])
    }
    return (
        <div>    
            <div  className="message-area">
                 { notes.map((note,idx) => <Note key={idx} note={note} /> )}               
            </div>  
            <div style={{width:"57%", margin:"auto" ,padding:"0px 20px"}} > 
                <input ref={messageRef} type="text"  style={{padding:"10px",width:"80%"}} name="message" placeholder="Type weather ..."></input>
                <button type="submit" onClick={Query} style={{fontSize:"32px"}}>Q</button>
            </div>
        </div>
    )
}

export default ChatWindow;
            