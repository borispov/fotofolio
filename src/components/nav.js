import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

// import HamburgerMenu from './HamburgerMenu'
import sizes from './assets/device'

const Nav = styled.header`
  background: ${props => props.theme = "primary" ? "#2E2D2B" : "#F9F9F9"};
  color: ${props => props.theme = "primary" ? "#F9F9F9" : "#141119"};
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 90px;
  height: 100vh;
  @media (max-width: 458px) {
    top: 0;
    width: 100vw;
    background: ${props => props.theme = "primary" ? "#2E2D2B88" : "#F9F9F977"};
    height: 45px;
  }
`

const LinksDiv = styled.div`
  display: none;
  @media ${sizes.mobileL} {
    display: block;
    height: auto;
    margin-top: 200px;
  }
`

const Title = styled.h1`
  text-align: center;
  color: "#F9F9F9";
  display: block;
  margin: 0 auto;
  text-decoration: none;
  font-size: 1.08rem;
  padding-top: 32px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  position: relative;
  > * {
    &:hover {
      text-shadow: 1px 2px 8px rgba(100,250,250,0.16);
      &:after {
        content: '';
        box-shadow: 1px 1px 12px 1px rgba(250,250,250,0.16);
        position: absolute;
        width: 30px;
        height: 2px;
        background: hsla(186, 80%, 60%, 0.6);
        bottom: -12%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 45%;
        // opacity: 0;
       }
      }
    }
  }
`

const Social = styled.p`
  position: absolute;
  text-align: center;
  bottom: 20%;
  left: 50%;
`

const Copyright = styled.p`
  font-size: 11px;
  font-family: georgia, sans-serif;
  text-align: center;
  color: #EDECEB;
  position: absolute;
  bottom: 0;
`

const NavLink = ({ whereto, title }) => (
  <Link 
    to={whereto}
    style={{
      color:"#F9F9F9",
      textDecoration:'none',
      fontSize: '0.8rem'
    }} >{title || null}</Link>
)

const FooterContent = () => (
  <div>
    <Social>
      <a
        href='https://instagram.com/u/borispov'>
          <span className="social" style={{color: 'white'}} />
      </a>
    </Social>
  </div>
)

const NavComponent = ({ siteTitle, links, theme = 'primary' }) => (
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
