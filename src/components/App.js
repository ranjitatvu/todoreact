import React from 'react'
import Footer from "./Footer"
import MainContent from "./MainContent"
import Header from "./Header"
import TodoItem from './TodoItem'
import todoData from '../todoData'
import Condition from './Condition'
import ConditionRendering from './ConditionalRendering'
class App extends React.Component{

constructor(){
  super()
  this.state ={
      todos: todoData,
      count:0,
      new:2000,
      isLoading:true,
      character:{}
  }

 

    this.handleClick = this.handleClick.bind(this)
    this.halfClick=this.halfClick.bind(this)
    this.handleChange=this.handleChange.bind(this)
}

componentDidMount(){
  console.log('hi')
  setTimeout(() => {
    this.setState({
      isLoading:false
    })
  }, 3000)

  fetch("https://api.github.com/users/hadley/orgs")
      .then(response => response.json())
      .then(data =>{
        this.setState({
          character:data
        })
        
      })
      
}


handleClick(){
  console.log('click count')
  this.setState(prevState=>{
    return{
      count:prevState.count+1
    }
  })
}

halfClick(){
  this.setState(prevState=>{
    return{
      new:prevState.new/2
    }
  })
}

handleChange(id){
  this.setState(prevState=>{
    const updateTodos = prevState.todos.map(todo => {
      if(todo.id===id){
        todo.completed =!todo.completed
      }
      return todo
    })
    return{
      todos:updateTodos
    }
  })
}

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
    handleChange={this.handleChange}/>)
    return(
      <div>
        <ConditionRendering />

        {this.state.character.login}
        <div>

          <h1>{this.state.count}</h1>
          <h1>{this.state.new}</h1>
          <button onClick={this.handleClick}>Change!</button>
          <button onClick={this.halfClick}>Change!</button>
        
        </div>
    
    <Header />
    <MainContent />
    <Footer />
    <Condition isLoading={this.state.isLoading} />
    
    <div>{todoItems}</div>

      <div>

        <img onFocus={()=> console.log("This is on Focus")} onMouseOver={()=>console.log("Hi i was hovered")} src="https://www.fillmurray.com/200/100"/>
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

