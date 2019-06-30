import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PhotoGridComponent from '../PhotoGrid';
import Img from 'gatsby-image';

const ImagePortraits = () => (
    <StaticQuery
      query={graphql`
        query {
          images: allFile (filter: {relativeDirectory: {eq: "portraits"}}) {
            edges {
              node {
                name
                childImageSharp {
                  fluid (maxWidth: 320, maxHeight: 170){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
          <PhotoGridComponent>
            {data.images.edges.map(imgNode => (
              <Img
                key={imgNode.node.name}  
                fluid={imgNode.node.childImageSharp.fluid} 
              />
            ))}
          </PhotoGridComponent>
        )
      }
    />
)

export default ImagePortraits