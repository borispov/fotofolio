import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

const Nav = styled.header`
  background: ${props => props.theme = "primary" ? "#2E2D2B" : "#F9F9F9"};
  color: ${props => props.theme = "primary" ? "#F9F9F9" : "#141119"};
  position: fixed;
  left: 0;
  width: 220px;
  max-width: 220px;
  height: 100vh;
`

const LinksDiv = styled.div`
  display: block;
  height: auto;
  margin-top: 250px; 
`

const Title = styled.h1`
  text-align: center;
  color: "#F9F9F9";
  display: block;
  margin: 0 auto;
  text-decoration: none;
  font-size: 1.08rem;
  padding-top: 15.5px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

const Social = styled.p`
  text-align: center;
  height: 20px;
  width: auto;
  margin-top: 40%;
  color: white;
`

const Copyright = styled.p`
  font-size: 11px;
  font-family: georgia, sans-serif;
  color: #ededec;
  // background: white;
  text-align: center;
  color: #EDECEB;
  margin: auto;
  height: 60px;
  position: relative;
  bottom: 1.25rem;
  margin-top: 100%;
`

const styledAnchor = styled.a`
  // background-image: url(https://img.icons8.com/small/16/000000/instagram-new.png);
  background: white;
  height: 14px;
  width: 16px;
  text-align: center;
  display: inline-block;
`

const NavLink = ({ whereto, title }) => (
  <Link 
    to={whereto}
    style={{
      color:"#F9F9F9",textDecoration:'none'
    }} >{title || null}</Link>
)

const FooterContent = () => (
  <div>
    <Social>
      <a
        class="instagram"
        href='https://instagram.com/u/borispov'
      />
    </Social>
  </div>
)

const NavComponent = ({ siteTitle, links, theme }) => (
  <Nav theme>
    <LinksDiv>
      {
        links.map((l,i)=> {
          return (
            <Title key={l.title} >
              <NavLink
                whereto={l.address} 
                title={l.title} 
              />
            </Title>
          )
        })
      }
    </ LinksDiv>
    <FooterContent />
    <Copyright> © Boris Po. 2019. All Rights Reserved </ Copyright>
  </ Nav>
)

NavComponent.propTypes = {
  siteTitle: PropTypes.string,
}

NavComponent.defaultProps = {
  siteTitle: ``,
}

export default NavComponent
