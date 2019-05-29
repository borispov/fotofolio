import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

const HeaderDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = styled.header`
  background: ${props => props.theme = "primary" ? "#14191c" : "#F9F9F9"};
  color: ${props => props.theme = "primary" ? "#F9F9F9" : "#141119"};
  position: fixed;
  left: 0;
  width: 220px;
  max-width: 220px;
  height: 100vh;
`

const Title = styled.h1`
  text-align: center;
  color: "#F9F9F9";
  display: block;
  margin: 0 auto;
  text-decoration: none;
` 

const navLink = styled(props => <Link />)`
  color: #F9F9F9;
  text-decoration: none;
`

const HeaderComponent = ({ siteTitle, links, theme }) => (
  <Header theme>
    {
      links.map(l => {
        return (
          <Title>
            <navLink 
              to="/page2/">{l.title}
            </navLink>
          </Title>
        )
      })
    }
  </Header>
)

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderComponent.defaultProps = {
  siteTitle: ``,
}

export default HeaderComponent
