/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Nav from "./nav"
import Header from './header'
import "./layout.css"

const Wrapper = styled.div`
  display: block;
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 130px;
  padding-top: 55px;
`

const Layout = ( props,{ children }) => (
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
      <>
        <Nav siteTitle={data.site.siteMetadata.title} links={props.navlinks} theme="primary" />
          <Header />
          <Wrapper>
            {props.children}
          </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
