import React from "react";

function Chips({data}) {
    
    return (
        <div>
            {data.map(chip => {
                return <a  href={chip.link} target="_blank">{chip.text}</a>
            })}
        </div>
    )
    
}
export default Chips;