import React from 'react'


class Joke extends React.Component{
    render(){
        return(
            <div>
            <h3 style={{display: !this.props.question && "none",backgroundColor:'red'}}>Question:{this.props.question}</h3>
            <h3>Answer:{this.props.punchline}</h3>

    </div>
        )
    }
}

// function Joke(props){
//     return(
//         <div>
//                 <h3 style={{display: !props.question && "none",backgroundColor:'red'}}>Question:{props.question}</h3>
//                 <h3>Answer:{props.punchline}</h3>

//         </div>
//     )
// }

export default Joke