import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavLinks from './paths'
import PhotoGrid from "../components/PhotoGrid"

const Gallery = () => (
  <Layout navlinks={NavLinks} >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PhotoGrid />
  </Layout>
)

export default Gallery
