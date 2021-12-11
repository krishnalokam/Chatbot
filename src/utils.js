import messagesList from "./messageList";
let keywords = pre_process(messagesList)

const greetings = [
    "How are you today",
    "how can I help you",
    "what do you want me to find today"
]

const weather_Replies=[
    "Its gonna rain today, Better carry an umberlla",
    "Today is very hot, it can reach upto 50deg by noon",
    "Its a good day today, Temperature will be very normal",
    "Expecting heavy rains today, if possible avoid going out side"
];

const cricketReplies=[
    "Todays match is between Ind Vs NZ",
    "Ind Won today in the ICC match between Ind Vs Aus",
    "IPL Auction is planned for next week ",
    "There are 11 teams playing in IPL this season"
]

const learningReplies = [
    "JS is invented by Brenden Eich",
    "React uses virtual dom to render the components",
    "Java is Object Oriented Programming language",
    "C is the very old programming language that most people start to study"
]

const restaurantReplies = [
    "We support Chinese, Italian ,SouthIndian , NorthIdian dishes in our restaurant",
    "Ours is South Indian Restaurant, our special dishes are idly, dosa, pongal served with delicious sambar",
    "In our restaurant we serve the best thali, along with kurma",
    "Kindly reserve a seat before coming to our restaurant, we have limited seats compared to our demand"
]

const defaultReplies = [
    "Sorry, I didnt get you, Please search with proper keyword",
    "pls ask again with keywords like weather,cricket, learning,restaurants",
    "I can say only about weather,cricket, learning,restaurants, ask me on these"

]

function greet(){
    return greetings[Math.floor(Math.random()*greetings.length)]
}

function prepare_random_reply(data){
    return data[Math.floor(Math.random()*data.length)]
}
function pre_process(messages){
    messages = messages.map(message => message.toLowerCase())
    messages.sort()        
    return messages
}

function identifyType(message){

    
    message = message.toLowerCase();
    let matchword = "unknown"
    
    for (let keyword of keywords){     
        console.log(keyword+" "+message);   
        if(message.search(keyword)>=0){
            
            matchword = keyword;            
            break;
        }
    }    
    return matchword;
}

function parser(message){

    let matchword = identifyType(message)    
    let reply = "";

    switch(matchword) {

      case "weather": 
                        reply = prepare_random_reply(weather_Replies);
                        break;
      case "cricket": 
                        reply = prepare_random_reply(cricketReplies);
                        break;

      case "learning": 
                        reply = prepare_random_reply(learningReplies);
                        break;

      case "restaurants": 
                        reply =prepare_random_reply(restaurantReplies); 
                        break;
      
      default: reply = reply =prepare_random_reply(defaultReplies);

    };
    
    return reply;
}

function getReply(inputMessage){
    return parser(inputMessage)
}

export {getReply,greet};