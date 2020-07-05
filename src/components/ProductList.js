import React from 'react'

function ProductList(props){
    return(
        <div>
            <h1>{props.product.name}</h1>
            <p>{props.product.price}</p>
            <p>{props.product.description}</p>
            
        </div>

    )
}

export default ProductList