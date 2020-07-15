import React from "react"

class Forms extends React.Component{

    constructor(){
        super()
        this.state={
                firstName:"",
                lastName:"",
                isFriendly:true,
                favColor:"red"
            
        }
    
    this.handleChange=this.handleChange.bind(this)
    }


    handleChange(event){
        const {name, value, type, checked} = event.target

        type === "checkbox" ? this.setState({[name]: checked}):
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
                        <label>
                        <input 
                        name="isFriendly"
                        type="checkbox" 
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}

                        /> Is Friendly?
                        </label>
                        <select value={this.state.favColor}>
                            <option value="blue"></option>
                            <option value="red"></option>
                            <option value="orange"></option>
                            <option value="yellow"></option>
                        </select>
                    
                        <h1>{this.state.firstName} {this.state.lastName}</h1>    
                    
                                        
                    </form>


            </div>
        )
    }

}
export default Forms