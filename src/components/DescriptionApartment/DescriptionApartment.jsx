import React from 'react'
import '././DescriptionApartment.scss';

function Description(props) {
    return (
        <>
            <div className='description'>
                <div className='description_title'>
                    <h1>{props.title}</h1>
                    <h2>{props.location}</h2>
                    <ul>
                        {props.tags.map((tag) => (<li key={tag}>{tag}</li>))}
                    </ul>
                </div>

                <div className='description_author'>
                    <div className='description_author_img'>
                        <h3>{props.name}</h3>
                        <img src={props.picture} alt="Photo de profil" />
                    </div>
                    <ul>
                        {[1, 2, 3, 4, 5].map((number) => <li key={number} className={props.rating >= number ? "full" : ""}>★</li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Description