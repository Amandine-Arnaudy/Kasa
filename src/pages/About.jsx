import React from 'react'
import Layout from '../components/About/Layout'
import AboutBanner from '../components/About/Banner2/About'
import PanelAbout from '../components/About/Collapse/Collapse'

function About() {
    return (
        <>
            <Layout>
                <AboutBanner />
                <PanelAbout />
            </Layout>
        </>
    )
}

export default About