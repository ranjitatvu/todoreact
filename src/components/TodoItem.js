import React from 'react'
//import todoData from '../todoData'


function TodoItem(props){
    const completedStyle ={
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration:"line-through"
    }
            
          return(
             <div className='todo-item'> 
                  <input 
                     type="checkbox" 
                     checked={props.item.completed}
                     onChange={()=>props.handleChange(props.item.id)}
                   /> 
                  
                   <p style={props.item.completed ? completedStyle:null}>{props.item.text}</p>
            
               </div>
         
        )
    
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