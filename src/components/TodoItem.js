import React from 'react'


class TodoItem extends React.Component{

    render(){
        return(
<div> 
<input  type="checkbox" checked={this.props.todoCard.completed}/>
    <p style={{color:'red'}}>{this.props.todoCard.text}</p>
    
      </div>
        )
    }
}

// function TodoItem(props){
//     return(
//         // <div>
//         // <input type="checkbox" />
//         // <p>THis is Placeholder</p>
//         // <input type="checkbox" />
//         // <p>THis is Placeholder</p>
//         // <input type="checkbox" />
//         // <p>THis is Placeholder</p>
//         // </div>

// <div> 
// <input  type="checkbox" checked={props.todoCard.completed}/>
//     <p style={{color:'red'}}>{props.todoCard.text}</p>
    
//       </div>

//     )
// }

export default TodoItem