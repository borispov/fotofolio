// purpose of link component; Click On Item TO Enlarge, FUTURE: Enter SLideshow mode.
// import { Link } from "gatsby";

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import sizes from './assets/device'

const PhotoGrid = styled.div`
  display: grid;
  width: calc(100vw * 0.65);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 10px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;

  @media ${sizes.desktopL} {
    grid-gap: 16px;
  }
`

const GridItem = styled.div`
  position: relatve;
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
