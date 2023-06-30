import React from 'react'
import '././carrousel.scss';

function Carrousel(props) {
  return (
    <>
      <div className='carrousel'>
        {props.pictures.map((picture) => <img key={picture} src={picture} alt="images carrousel" />)}
      </div>

    </>
  )
}

export default Carrousel