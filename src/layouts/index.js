import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import g from 'glamorous'
import { css } from 'glamor'
import { rhythm } from "../utils/typography"
import Menu from "./menu"

// make css rules
let headerRule = css({
  height: rhythm(3),
  background: 'red',
  margin: rhythm(1),
  '@media(min-width: 768px)': {
    height: rhythm(6),
    background: 'pink',
  }
})

let logoRule = css({
  height: rhythm(3),
  '@media(min-width: 768px)': {
    height: rhythm(6),
  }
})

let titlesStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '& > h1': {
    fontSize: '1.6em',
    margin: 0,
    padding: 0
  },
  '& > h2': {
    fontSize: '1.2em'
  },
  '@media(min-width: 768px)': {
    height: rhythm(6),
    '& > h1': {
      fontSize: '2.2em',
    },
    '& > h2': {
      fontSize: '1.8em'
    },
  }
})

const Header = () => (
  <g.Header
    margin={`0 auto`}
    borderBottom='2px solid orange'
    {...headerRule}
  >
    <g.Div
      margin='0 auto'
      maxWidth={960}
      display='flex'
      justifyContent='space-between'
    >
      <g.Div
        display={'flex'}
      >
        <g.Img 
          src="https://freestylebologna.files.wordpress.com/2013/07/cropped-thb1.jpg" 
          alt="twister hills logo"
          {...logoRule}
        />
        <g.Div
          {...titlesStyle}
        >
          <g.H1>
            <Link
              to="/"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Twister Hills
            </Link>
          </g.H1>
          <h2>Frisbee Freestyle Bologna</h2>
        </g.Div>
      </g.Div>
      <div>
        <Menu />
      </div>
    </g.Div>
  </g.Header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Twister Hills Frisbee Freestyle"
      meta={[
        { name: 'description', content: 'Twister Hills Frisbee Freestyle website' },
        { name: 'keywords', content: 'frisbee, freestyle, bologna, lazzaroni, tournament' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: rhythm(1),
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
