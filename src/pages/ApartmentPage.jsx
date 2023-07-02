import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from '../components/Carrousel/Carrousel';
import Collapse from '../components/Collapse/Collapse';
import Apartment from '../components/DescriptionApartment/DescriptionApartment';

function Apartments() {
    const params = useParams();
    const navigate = useNavigate();
    const [apartment, setApartment] = useState();

    useEffect(() => {

        const apartmentData = async () => {
            const res = await fetch("/annonces.json");
            const data = await res.json();
            const apartments = data.find(({ id }) => id === params.id);
            data.map(() => setApartment(apartments));
            if (apartments) {
                setApartment(apartments);
            } else {
                navigate('*');
            }
        };
        apartmentData();

    }, [params.id, navigate]);

    return (
        apartment && (
            <div key={params.id}>
                <Carrousel pictures={apartment.pictures} />
                <Apartment title={apartment.title} description={apartment.description} location={apartment.location} name={apartment.host.name} tags={apartment.tags} picture={apartment.host.picture} rating={apartment.rating} />
                <section className='collapse2'>
                    <div className="collapse_container secondPage">
                        <Collapse title="Description" text={apartment.description} />
                    </div>
                    <div className="collapse_container secondPage">
                        <Collapse title="Équipements" text={apartment.equipments} />
                    </div>
                </section>
            </div>
        )
    );
}

export default Apartments;
