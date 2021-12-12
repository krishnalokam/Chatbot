import responses from "./responseData";

const greetings = [
    "How are you today",
    "how can I help you",
    "what do you want me to find today"
]

function greet(){
    return greetings[Math.floor(Math.random()*greetings.length)]
}



function identifyType(message) {   
    message = message.toLowerCase();
    let keywords = Object.keys(responses);
    
    for(let keyword of keywords){ // loop over all the existig keywords
        for(let word of message.split(" ")){ //loop over the words of the input message
            if(word === keyword){
                return word;
            }
        }
    }     
    
    
}
const defaultMessage = {
    answer : "Sorry , I didnt understand you",
    chips:[
    
    ]
 };


function parser(message){
    let matchword = identifyType(message)            
    return matchword? responses[matchword]: defaultMessage;
}

function getReply(inputMessage){
    return parser(inputMessage)
}

export {getReply,greet};