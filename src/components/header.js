import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

import headerLine from './headerLine.png';

const Title = styled.h1`
  text-align: center;
  font-size: 1.85rem;
  color: #F9F9F9;
`

const Subtitle = styled.h3`
  text-align: center;
  color: #D9D9D9;
`

const Header = styled.div`
  position: relative;
  padding: 1.45rem 1.0875rem;
  max-width: 1024px;
  margin: 0 auto;
  // padding-left: 130px;
`

const defaultSubtitle = `
  Welcome to my Photography Nest.
  To learn about my endeavors in other fields, read my Bio
`

const HeaderComp = ({title = 'Boris Po', subt = defaultSubtitle }) => (
  <Header>
    <Title>{title}</Title>
    <Subtitle>{subt}</Subtitle>
    <div>
      <img src={headerLine} alt=""/>
    </div>
  </Header>
)

Header.propTypes = {
  title: PropTypes.string,
  subt: PropTypes.string
}

export default HeaderComp