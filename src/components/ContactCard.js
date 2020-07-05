import React from 'react'

function ContactCard(props){
    return(
        <div className='contact-card'>
            <img src={props.contactcard.imgUrl} />
            <h3>{props.contactcard.name}</h3>
            <p>Phone: {props.contactcard.phone}</p>
            <p>Email:{props.contactcard.email}</p>
        </div>
    )
}

export default ContactCard