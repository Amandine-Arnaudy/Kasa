import React from 'react'
import { Link } from 'react-router-dom'

function Apartment(props) {

    const state = {
            apartmentId: props.id  
    };

    return (
        <Link to= "/apartment" state={state}>
            <h3 className='annonces_desciption'>{props.title}</h3>
            <img src={props.imageURL} alt="" />
        </Link>
    )
}

export default Apartment
