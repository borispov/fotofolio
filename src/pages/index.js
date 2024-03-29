import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NavLinks from "./paths"

const IndexPage = () => (
  <Layout navlinks={NavLinks}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Image typeOfImages='portrait' />
  </Layout>
)

export default IndexPage
