import React from 'react'
import Footer from "./Footer"
import MainContent from "./MainContent"
import Header from "./Header"

class App extends React.Component{
  render(){
    return(
      <div>
     <nav>
    <ul>
      <li>Thing 1</li>
      <li>Thing 2</li>
      <li>Thing 3</li>
    </ul>
    </nav>
    <Header />
    <MainContent />
    <Footer />
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

