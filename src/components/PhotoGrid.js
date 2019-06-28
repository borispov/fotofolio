// purpose of link component; Click On Item TO Enlarge, FUTURE: Enter SLideshow mode.
// import { Link } from "gatsby";

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(8, 5vw);
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 10px;

  margin: 2em auto;
  max-width: 1200px;
  overflow: hidden;
  @media (min-width: 1201px) {
    width: 1024px;
    margin: 12px auto !important;
  }
`

const GridItem = styled.div`
  position: relatve;
  max-width: 320px;
  padding-bottom: 15px;
`

const PhotoBox = styled.div`
  overflow: hidden;
  border-radius: 2px;
  opacity: 0.5;
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }
  // @media (min-width: 1201px) {
  //   left: 10px;
  //   right: 10px;
  //   bottom: 10px;
  //   top: 10px;
  // }
`

const PhotoGridComponent = (props) => (
  <PhotoGrid>
    {
       props.children && props.children.map((x, i) => (
        <GridItem key={i}>
          <PhotoBox>
            {x}
          </PhotoBox>
        </GridItem>
      ))
    }
  </PhotoGrid>
)

PhotoGridComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default PhotoGridComponent
