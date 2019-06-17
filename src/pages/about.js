import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="My Bio" />
    <Header title="My Bio" subt="Quick Summary For Those Unfamiliar With Boris Po" />
    <Link to="/">Go Back</Link>
  </Layout>
)

export default AboutPage