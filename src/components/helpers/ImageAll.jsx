import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PhotoGridComponent from '../PhotoGrid';
import Img from 'gatsby-image';

const ImageAll = () => (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
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
          <div>
            <PhotoGridComponent>
              {data.images.edges.map(imgNode => (
                <Img
                  key={imgNode.node.name}  
                  fluid={imgNode.node.childImageSharp.fluid} 
                />
              ))}
            </PhotoGridComponent>
          </div>
        )
      }
    />
)

export default ImageAll