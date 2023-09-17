import React from 'react'
import '././Banner.scss'
import imgMac from '../../assets/Desktop.png'


function Banner() {
  return (

    <div className='desktop'>
      <h1>Développeuse</h1>
      <img src={imgMac} alt="banner" />
    </div>

  )
}

export default Banner
