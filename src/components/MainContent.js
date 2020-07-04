import React from "react"
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"
function MainContent(){

    const date = new Date()
    const hours  = date.getHours()
    let timeOfDay

    if (hours < 12){
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    } 

    const styles ={
        color:"#FF8C00",
        backroundColor:"rebeccapurple",
        fontSize:55
    }

    return(
        <div>
        <p>This is main content</p>
        
        <TodoItem />
        <TodoItem />
        <div>
            <ContactCard 
                    contact={{imgUrl:"http://placekitten.com/300/200",
                    phone:'(+61) 449 994 035',
                    name:'Ranjit Palaniappan',
                    email:'ranjit.palaniappan@gmail.com'}}
       
             />
        <ContactCard 
        
                contact={{imgUrl:"http://placekitten.com/300/200",
                phone:'(+61) 449 994 035',
                name:'Super Star',
                email:'super.star@gmail.com'}}
        
        />
        <ContactCard 
             contact={{imgUrl:"http://placekitten.com/300/200",
             phone:'(+61) 449 994 035',
             name:'Shri RajiniKanth',
             email:'rajini.kanth@gmail.com'}}
        
        />
        </div>
        <h1 style={styles}>Good{timeOfDay}!</h1>
        </div>
    )
}

export default MainContent