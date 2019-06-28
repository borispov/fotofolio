import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BioContent = `
  Boris Povolotsky is a photographer born in Ukraine, raised and based in Israel. Boris Po has began his professional life in humanitarian field obtaining a Bachelor's degree in Social Work and still practicing Social Work to this day. The fascination with the whole human being, the human mind, has pulled him towards photography as well. While the first motivation appeared as the longing to capturing breathtaking momemnts in the Nature, it transfered to Street photography as well and then came to realization he cannot escape nor should he, Portraiture. In particular, he appreciates portraiture that captures a bit of some of the deepest experiences and feelings of the subject and the vulnerability that is involved in the process.
`
const AboutPage = () => (
  <Layout>
    <SEO title="My Bio" />
    <Image />
    <Header title="My Bio" subt="Quick Summary For Those Unfamiliar With Boris Po" />
    <hr></hr>
    <p>{BioContent}</p>
    <Link to="/">Go Back</Link>
  </Layout>
)

export default AboutPage