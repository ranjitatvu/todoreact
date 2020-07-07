import React from 'react'



class ContactCard extends React.Component{
    render(){
        return(
            <div className='contact-card'>
            <img src={this.props.contactcard.imgUrl} />
            <h3>{this.props.contactcard.name}</h3>
            <p>Phone: {this.props.contactcard.phone}</p>
            <p>Email:{this.props.contactcard.email}</p>
        </div>
        )
    }
}

// function ContactCard(props){
//     return(
//         <div className='contact-card'>
//             <img src={props.contactcard.imgUrl} />
//             <h3>{props.contactcard.name}</h3>
//             <p>Phone: {props.contactcard.phone}</p>
//             <p>Email:{props.contactcard.email}</p>
//         </div>
//     )
// }

export default ContactCard