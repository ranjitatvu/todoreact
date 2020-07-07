import React from "react"
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"
import Joke from './Joke'
import jokesData from '../jokesData'
import contactData from "../contactData"
import vschoolProducts from '../vschoolProducts'
import ProductList from './ProductList'
import todoData from '../todoData'
function MainContent(){

    const productComponents = vschoolProducts.map(product =>
        <ProductList key={product.id} product ={product}/> )

    const contactComponents =  contactData.map(contact => 
        <ContactCard key={contact.id} contactcard={contact} 
        /> )
     
        const todoDataComponents  =  todoData.map(todo =>
            <TodoItem key={todo.id} todoCard= {todo}/>)

   const jokeComponents =  jokesData.map(joke => 
        
            <Joke key={joke.id} question ={joke.question} 
            punchline={joke.punchLine} />)

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

    const styles ={
        color:"#FF8C00",
        backroundColor:"rebeccapurple",
        fontSize:55
    }

    return(
        <div>
        <p>This is main content</p>
        
     
        <div>
    <div>{contactComponents}</div>

   <div>{jokeComponents}</div> 

    <div>{productComponents}</div>

    <div>{todoDataComponents}</div>
    {/* /* <Joke 
        content={{
            Question:"How are you?",
            Answer:"Im Alien"
        }}
        />
        <Joke 
       content={{
        Question:"How are you?",
        Answer:"Im Alien"
    }}
        />
        <Joke 
         content={{
            Question:"How are you?",
            Answer:"Im Alien"
        }}
        />
        <Joke 
         content={{
            Question:"How are you?",
            Answer:"Im Alien"
        }}
        />
        <Joke 
         content={{
            Question:"How are you?",
            Answer:"Im Alien"
        }}
        />
        <Joke 
        
        content={{
            // Question:"How are you?",
            Answer:"Im Alien"
        }}
    /> */ }
        </div>
        <h1 style={styles}>Good {timeOfDay}!</h1>
        </div>
    )
}

export default MainContent