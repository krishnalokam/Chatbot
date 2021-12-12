import React from "react";
import './Note.css';
import Chips from "../Chips/Chips";

function Note({note}) {
    const {author,type,message,time} = note    
    const {answer,chips} = message;
    

   const displayStyle= (type==="query")?{marginLeft:"50%"}:{marginRight:"50%"}

    return <>
    <div className="note" style={displayStyle}>
        <p className="title">{author}</p>
        <p className="message">{answer}</p>  
        <p className="time">{time}</p>      
    </div>
    <div>
        {chips && chips.length>0 && <Chips data={chips} />}
    </div>
   
    </>
}

export default Note;