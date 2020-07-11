import React from 'react'

class ConditionalRendering extends React.Component{

    constructor(){
        super()
        this.state={
            isLoggedIn:false
        }
        this.handleClick=this.handleClick.bind(this)
    }

handleClick(){
    console.log("I'm working")
    this.setState(prevState => {
        return{
            isLoggedIn: !prevState.isLoggedIn
        }
    })
}

    render(){

        let buttonText = this.state.isLoggedIn ? "Log Out": "Log In"
        let displayText = this.state.isLoggedIn ? "Logged in": "Logged Out"

        return(
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }

}

export default ConditionalRendering