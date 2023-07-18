import Banner from '../components/Banner/Banner'
import apartments from '../assets/annonces.json';
import { Link } from 'react-router-dom';
import '../components/Styles/Grid/Grid.scss';

function App() {

  return (
    <>
      <Banner />
      <section className='apartment'>
        <div className="annonces" >
          {apartments.map((apartment) => (
            <Link to={`/apartment/${apartment.id}`} key={apartment.id}>
              <h3 className='annonces_description'>{apartment.title}</h3>
              <img src={apartment.cover} alt="" />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default App