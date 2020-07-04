import React from 'react'
import Footer from "./Footer"
import MainContent from "./MainContent"
import Header from "./Header"

function App (){
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
    
  )}

export default App

