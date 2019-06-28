import React from "react"
import Img from "gatsby-image"
import styled from 'styled-components';

import ImageAll from './helpers/ImageAll';
import ImagePortraits from './helpers/ImagePortraits';

const StyledImg = styled(Img)`
  border-radius: 4px;
`

const Image = ({name = null, typeOfImages = null}) => {

  if (typeOfImages && typeOfImages === 'portraits') {
    console.log('Executing Portraiture Component')
    return <ImagePortraits />
  }
  return <ImageAll />
}

export default Image