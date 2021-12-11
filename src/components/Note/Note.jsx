import React from "react";
import './Note.css';

function Note({note}) {
    const {author,type,message,time} = note    
   const displayStyle= (type==="query")?{marginLeft:"50%"}:{marginRight:"50%"}

    return <>
    <div className="note" style={displayStyle}>
        <p className="title">{author}</p>
        <p className="message">{message}</p>  
        <p className="time">{time}</p>      
    </div>
   
    </>
}

export default Note;