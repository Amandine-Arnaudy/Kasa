import React, { useEffect, useState } from 'react'
import '././Grid.scss'
import Apartment from './Apartment.jsx'


function Apartement() {
    const [apartments, setApartments] = useState([]);

    useEffect(fetchApartments, []);

    function fetchApartments() {
        fetch("annonces.json")
            .then((res) => res.json())
            .then((res) => setApartments(res))
            .catch(console.error);
    }
    return (
        <section className='apartment'>

            <div className="annonces">

                {apartments.map((apartment) => (
                    <Apartment key={apartment.id} title={apartment.title} imageURL={apartment.cover} />
                ))}

            </div>

        </section>
    )
}

export default Apartement
