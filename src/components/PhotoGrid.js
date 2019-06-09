// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

import { photoBank } from './photos';

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(8, 5vw);
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15px;

  margin: 3em auto;
  width: 1200px;
  overflow: hidden;
  @media (min-width: 1201px) {
    width: 1200px;
    margin: 12px auto !important;
  }
`

const GridItem = styled.div`
  position: relatve;
  float: left;
  width: 300px;
  padding-bottom: 150px;
`

const PhotoBox = styled.div`
  float: left;
  overflow: hidden;
  @media (min-width: 1201px) {
    left: 10px;
    right: 10px;
    bottom: 10px;
    top: 10px;
  }
`

const Photo = styled.img`
  width: 290px;
  height: auto;
  max-height: 200px;
  border-radius: 2px;
  box-shadow: 0 2px 6px 2px hsla(210, 80%, 10%, 0.15);
`

const Post = props => <Photo src={props.pic} alt="" />

const PhotoGridComponent = () => (
  <PhotoGrid>
    {photoBank.map((p, i) => (
      <GridItem>
        <PhotoBox>
          <Post pic={p} />
        </PhotoBox>
      </GridItem>
    ))}
  </PhotoGrid>
)

export default PhotoGridComponent