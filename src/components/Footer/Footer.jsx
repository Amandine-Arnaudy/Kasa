import React from 'react'
import './Footer.scss'
import footerImg from '../../assets/Logo_footer.png'

function Footer() {
    return (
        <footer className='footer'>
        <div className="footer_logo">
            <img src={footerImg} alt="logo Kasa" />
        </div>
      
        <div className="footer_texte">© 2020 Kasa. All rights reserved</div>
    </footer>
    )
}

export default Footer