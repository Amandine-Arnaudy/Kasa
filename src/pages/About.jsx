import React from 'react'
import Main2 from '../components/About/Main2'
import AboutBanner from '../components/About/Banner2/About'
import PanelAbout from '../components/About/Collapse/Collapse'

function About() {
    return (
        <>
            <Main2>
                <AboutBanner />
                <PanelAbout />
            </Main2>
        </>
    )
}

export default About