import React from 'react'

class LoggedIn extends React.Component{
    
    constructor(){
        super()
            this.state={
                    isLoggedIn:true
            }
        
    }
    
    render(){
        let LogIn
            if(this.state.isLoggedIn === true){
                     LogIn='in'
            }
            else{LogIn='out'}

        return(
            <div>
            
        <h1>You are currently logged {LogIn}</h1>

            </div>
        )
    }
}

export default LoggedIn 