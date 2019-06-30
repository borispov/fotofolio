import React from "react"
import { graphql } from "gatsby"

import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import headerLine from '../components/headerLine.png'

const Paragraph = styled.p`
  color: ${props => props.color ? props.color : '#b7a777'};
`

const Title = styled.h1`
  color: #c7c7c7;
  font-size: 1.9rem;
  margin-bottom: -3px;
  font-family: 'PT Serif';
  font-weight: 400;
`

function splitToParagraphs(text) {
  return text.split('\n').map(line => line.length ? <Paragraph>{line}</Paragraph> : null)
}

const StyledImg = styled(Img)`
  margin-top: -30px;
  border-radius: 4px;
  margin-bottom: 25px;
`

const AboutPage = ({ data }) => {
  const { title, subtitle, bio } = data.allUserDataJson.nodes[0]
  const aboutPhoto = data.allImageSharp.nodes[0]
  return (
    <Layout title={title} subtitle={subtitle} >
      <SEO title="My Bio" />
      <StyledImg 
        fluid={aboutPhoto.fluid}
        fadeIn="true" 
        alt="about page portrait"
        imgSyle={{ 
          objectPosition: 'left bottom !important',  
          objectFit: 'fill',
        }}
      />
      <Title>BIO</Title>
      <div>
        <img src={headerLine} alt=""/>
      </div>
      {
        splitToParagraphs(bio)
      }
    </Layout>
  )
}

export const aboutPageQuery = graphql`

  query {
    allUserDataJson {
      nodes {
        aboutTitle
        aboutSubtitle
        bio
      }
    }
      allImageSharp(filter: {fluid: {originalName: {eq: "AboutPagePhoto.jpg"} }}) {
        nodes {
          fluid(maxWidth: 720, maxHeight: 280, cropFocus: NORTHWEST) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

export default AboutPage