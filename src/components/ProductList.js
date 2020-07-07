import React from 'react'

class ProductList extends React.Component{

    render(){
        return(
            <div>
            <h1>{this.props.product.name}</h1>
            <p>{this.props.product.price}</p>
            <p>{this.props.product.description}</p>
            
        </div> 
        )
    }
}

// function ProductList(props){
//     return(
//         <div>
//             <h1>{props.product.name}</h1>
//             <p>{props.product.price}</p>
//             <p>{props.product.description}</p>
            
//         </div>

//     )
// }

export default ProductList