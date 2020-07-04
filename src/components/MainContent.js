import React from "react"
import TodoItem from "./TodoItem"
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
        <h1 style={styles}>Good{timeOfDay}!</h1>
        </div>
    )
}

export default MainContent