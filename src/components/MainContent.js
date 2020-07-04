import React from "react"
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

    return(
        <div>
        <p>This is main content</p>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <h1>Good{timeOfDay}!</h1>
        </div>
    )
}

export default MainContent