import Banner from '../components/Banner/Banner'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Styles/Grid/Grid.scss';

function App() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("annonces.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);

  }, []);
  return (
    <>
      <Banner />
      <section className='apartment'>
        <div className="annonces" >
          {apartments.map((apartment, id) => (

            <Link to={`/apartment/${apartment.id}`} key={id}>
              <h3 className='annonces_description'>{apartment.title}</h3>
              <img src={apartment.cover} alt="" />
            </Link>

          )
          )}
        </div>
      </section>
    </>
  )
}

export default App