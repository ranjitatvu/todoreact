import React from 'react'
import Footer from "./Footer"
import MainContent from "./MainContent"
import Header from "./Header"
import TodoItem from './TodoItem'
import todoData from '../todoData'

class App extends React.Component{

constructor(){
  super()
  this.state ={
      todos: todoData
  }
}

  render(){
    const todoItems = this.state.todos.map(todoData => <TodoItem key={todoData.id} todoData={todoData}/>)
    return(
      <div>
    
    <Header />
    <MainContent />
    <Footer />
    
    <div>{todoItems}</div>

      <div>

        <img onMouseOver={()=>console.log("Hi i was hovered")} src="https://www.fillmurray.com/200/100"/>
        <br/>
        <br/>
        <button onMouseOver={()=>console.log("I was hover")}  onClick ={() => console.log("I was Clicked")}>Click Me</button>
      </div>
    </div> 
    )
  }
}

// function App (){
//   return(
//    <div>
//      <nav>
//     <ul>
//       <li>Thing 1</li>
//       <li>Thing 2</li>
//       <li>Thing 3</li>
//     </ul>
//     </nav>
//     <Header />
//     <MainContent />
//     <Footer />
//     </div> 
    
//   )}

export default App

