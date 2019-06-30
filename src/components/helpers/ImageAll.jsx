import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PhotoGridComponent from '../PhotoGrid';
import Img from 'gatsby-image';

const ImageAll = () => (
    <StaticQuery
      query={graphql`
        query {
          images: allImageSharp {
            edges {
              node {
                id
                fluid (maxWidth: 320, maxHeight: 170){
                  ...GatsbyImageSharpFluid
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
                key={imgNode.node.id}
                fluid={imgNode.node.fluid} 
              />
            ))}
          </PhotoGridComponent>
        )
      }
    />
)

export default ImageAll