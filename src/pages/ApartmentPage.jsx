import { useParams } from "react-router-dom";
import apartmentsDatas from '../assets/annonces.json';
import Error from './ErrorPage';
import Carrousel from '../components/Carrousel/Carrousel';
import Collapse from '../components/Collapse/Collapse';
import Apartment from '../components/DescriptionApartment/DescriptionApartment';

function Apartments() {
    const params = useParams();

    const { id } = useParams();
    const apartment = apartmentsDatas.find(apartment => apartment.id === id);
    if (!apartment) {
        return <Error />
    }

    return (
        apartment && (
            <div key={params.id}>
                <Carrousel pictures={apartment.pictures} />
                <Apartment title={apartment.title} description={apartment.description} 
                location={apartment.location} name={apartment.host.name} tags={apartment.tags} 
                picture={apartment.host.picture} rating={apartment.rating} />
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
