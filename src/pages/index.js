import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Intro from "../components/intro"
import About from '../components/about'
import Experience from "../components/experience"
import Skill from '../components/skill'
import Portfolio from '../components/portfolio'

const IndexPage = () => {
    return <Layout>
        <Seo title="Home" />
        <Intro />
        <About />
        <Skill />
        <Experience />
        <Portfolio />
    </Layout>
}

export default IndexPage
