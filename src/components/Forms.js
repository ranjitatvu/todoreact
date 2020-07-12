import React from "react"

class Forms extends React.Component{

    constructor(){
        super()
        this.state={
                firstName:"",
                lastName:"",
                isFriendly:true
        }
    
    this.handleChange=this.handleChange.bind(this)
    }


    handleChange(event){
        const {name, value, type, checked} = event.target
            this.setState({
                [name]: value
            })
    }



    render(){
        return(
            <div>
                    <form>
                        <input type="text" name ="firstName" placeholder="First Name" onChange={this.handleChange} />
                        <br/>  
                        <input type="text" name ="lastName" placeholder="Last Name" onChange={this.handleChange} />                 
                        <textarea value="default value"/>
                        <br/>
                        <input 
                        name="isFriendly"
                        type="checkbox" 
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                        />
                    
                        <h1>{this.state.firstName} {this.state.lastName}</h1>    
                    
                                        
                    </form>


            </div>
        )
    }

}
export default Forms