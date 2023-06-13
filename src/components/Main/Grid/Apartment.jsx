import React from 'react'
import { Link } from 'react-router-dom'

function Apartment(props) {
    return (
        <Link to="/apartment">
            <h3 className='annonces_desciption'>{props.title}</h3>
            <img src={props.imageURL} alt="" />
        </Link>
    )
}

export default Apartment
