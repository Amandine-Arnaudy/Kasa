import React from 'react'
import './Skills.scss';
import Typed from 'react-typed';
import { useInView } from 'react-intersection-observer';
import htmlLogo from '../../assets/Html_logo.png'
import cssLogo from '../../assets/Css_logo.png'
import jsLogo from '../../assets/JavaScript_Logo.png'
import reactLogo from '../../assets/React_logo.png'
import reduxLogo from '../../assets/Redux_logo.png'
import githubLogo from '../../assets/Github.png'
import wordpressLogo from '../../assets/WordPress_logo.png'
import figmaLogo from '../../assets/Figma_logo.png'
import adobexdLogo from '../../assets/Adobe-XD_logo.webp'
import canvaLogo from '../../assets/Canva_logo.webp'
import procreateLogo from '../../assets/Procreate_logo.png'
import adobeLogo from '../../assets/Adobe_logo-2017.png'



function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Déclencher l'animation une seule fois
        threshold: 0.2,    // Pourcentage de visibilité nécessaire pour déclencher l'animation
    });
    return (

        <div className='competences'>
            <Typed className='parcours'
                strings={[
                    "Mes competences"
                ]}
                typeSpeed={100}
            />
            <div className="competences_logo" ref={ref}>
                <div className={`competences_logo_flex ${inView ? 'fade-in active' : 'fade-in'}`}>
                    <img className='competences_logo_html' src={htmlLogo} alt="Logo Html" />
                    <img className='competences_logo_css' src={cssLogo} alt="Logo Css" />
                    <img className='competences_logo_js' src={jsLogo} alt="Logo JavaScript" />
                    <img className='competences_logo_react' src={reactLogo} alt="Logo React" />
                    <img className='competences_logo_redux' src={reduxLogo} alt="Logo Redux" />
                    <img className='competences_logo_github' src={githubLogo} alt="Logo Github" />
                </div>
                <div className={`competences_logo_flex ${inView ? 'fade-in active' : 'fade-in'}`} >
                    <img className='competences_logo_wordpress' src={wordpressLogo} alt="Logo WordPress"/>
                    <img className='competences_logo_figma' src={figmaLogo} alt="Logo Figma" />
                    <img className='competences_logo_adobexd' src={adobexdLogo} alt="Logo Adobe XD" />
                </div>
                <div className={`competences_logo_flex_gap ${inView ? 'fade-in active' : 'fade-in'}`} >
                    <img className='competences_logo_procreate' src={procreateLogo} alt="Logo Procreate" />
                    <img className='competences_logo_canva' src={canvaLogo} alt="Logo Canva" />
                    <img className='competences_logo_adobe' src={adobeLogo} alt="Logo Adobe" />
                </div>
            </div>
        </div>

    )
}

export default Skills