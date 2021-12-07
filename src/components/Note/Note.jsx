import React from "react";
import './Note.css';

function Note({note}) {
    const {title,type,message,time} = note
    console.log("note :",time);
   const displayStyle= (type==="query")?{marginLeft:"50%"}:{marginRight:"50%"}

    return <><div className="note" style={displayStyle}>
        <p className="title">{title}</p>
        <p className="message">{message}</p>        
    </div>
    <p style={displayStyle}>{time}</p>
    </>
}

export default Note;