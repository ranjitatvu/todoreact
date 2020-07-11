import React from 'react'

function Condition(props){
    console.log(props.isLoading)
    if(props.isLoading===true){
        return(
            <h1>
            Loading
        </h1>
        )
    } 
    return(
        <div>

            <h1>
                Some cool stuff about conditional rendering
            </h1>

        </div>
    )
}

export default Condition