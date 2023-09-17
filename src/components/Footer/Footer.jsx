import React from 'react'
import './Footer.scss'
import footerImg from '../../assets/Logo_footer.png'
import email from '../../assets/Email.png'
import linkedin from '../../assets/Linkedin.png'
import github from '../../assets/Github.png'

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <img className='footer_logo' src={footerImg} alt="logo" />
            </div>

            <ul>
                <li><a href="mailto:amandine.arnaudy11@gmail.com"><img className='footer_email' src={email} alt="logo mail" /></a></li>
                <li><a href="https://www.linkedin.com/in/amandine-arnaudy/"><img className='footer_linkedin' src={linkedin} alt="logo linkedin" /></a></li>
                <li><a href="https://github.com/Amandine-Arnaudy"><img className='footer_github' src={github} alt="logo github" /></a></li>
            </ul>
        </footer>
    )
}

export default Footer