import React from 'react'
import '././About.scss'
import bannerAbout from '../../../assets/Banner_about.png'

function Banner2() {
  return (
    <div className='banner'>
        <img src={bannerAbout} alt="Image banner" />
        <div></div>
    </div>
  )
}

export default Banner2