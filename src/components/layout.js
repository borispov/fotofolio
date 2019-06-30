import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import sizes from './assets/device'
import Nav from "./nav"
import Header from './header'
import "./layout.css"
import NavLinks from '../pages/paths'

const LayoutContainer = styled.div`
  @media (min-width: 425px) {
    margin-left: 90px;
    // padding-left: 90px;
  }
`
const Wrapper = styled.div`
  display: block;
  position: relative;
  padding-top: 55px;
  height: 800px;
`

const Layout = ({ children, title, subtitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutContainer>
        <Nav siteTitle={data.site.siteMetadata.title} links={NavLinks} theme="primary" />
          <Header title={title} subt={subtitle} />
          <Wrapper>
            {children}
          </Wrapper>
      </LayoutContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
