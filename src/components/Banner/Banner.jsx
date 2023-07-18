import React from 'react'
import '././Banner.scss'
import bannerPage from '../../assets/Banner.png'

function Banner() {
  return (
    <div className='banner'>
        <img src={bannerPage} alt="Image banner" />
        <div></div>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
