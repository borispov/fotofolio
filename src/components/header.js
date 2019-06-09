import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

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
  margin: 0 auto;
  max-width: 970px;
  padding: 1.45rem 1.0875rem;
`

const defaultSubtitle = `
  Welcome to my Photography Nest.
  To hop into my software Engineering, click here
`

const HeaderComp = ({title = 'Boris Po', subt = defaultSubtitle }) => (
  <Header>
    <Title>{title}</Title>
    <Subtitle>{subt}</Subtitle>
  </Header>
)

Header.propTypes = {
  title: PropTypes.string,
  subt: PropTypes.string
}

export default HeaderComp