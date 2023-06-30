import React, { useEffect, useState } from 'react';
import Carrousel from '../components/Carrousel/Carrousel';
import Description from '../components/DescriptionApartment/DescriptionApartment';
import { useLocation } from 'react-router-dom';
import Collapse from '../components/Collapse/Collapse'


function Apartments() {
    const location = useLocation();
    //console.log("location", location);

    const [apartment, setApartment] = useState(null);

    useEffect(() => {
        fetch("annonces.json")
            .then((res) => res.json())
            .then((apartments) => {
                const apartment = apartments.find((apartment) => apartment.id === location.state.apartmentId);
                setApartment(apartment);
            })
            .catch(console.error);
    }, []);

    if (apartment == null) return <div>...Loading</div>;

    return (
        <>
            <Carrousel pictures={apartment.pictures} />
            <Description title={apartment.title} description={apartment.description} location={apartment.location} name={apartment.host.name} tags={apartment.tags} picture={apartment.host.picture} rating={apartment.rating} />
            <section className='collapse2'>
                <div className="collapse_container test">
                    <Collapse title="Description" text= {apartment.description}/>
                </div>
                <div className="collapse_container test">
                    <Collapse title="Équipements" text= {apartment.equipments} />
                </div>
            </section>
        </>
    );
}

export default Apartments;
