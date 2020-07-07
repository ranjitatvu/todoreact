import React from 'react'

class StateCompo extends React.Component{
    constructor(){
        super()
        this.state={

            name:"Rajinikanth",
            age:69
        }
    }

render(){
    return(

        <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
        </div>

    )
}
}

export default StateCompo