import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'
import { css } from 'glamor'
import { rhythm } from "../utils/typography"
import menuIcon from "./menu-icon.svg"

let menuRule = css({
  height: rhythm(3),
  margin: rhythm(.5),
  '& > img': {
    cursor: 'pointer',
  },
  '@media(min-width: 768px)': {
    '& > img': {
      display: 'none',
    },
    '& > ul': {
      display: 'block'
    }
  },
})

class Menu extends React.Component {
  render() {
    return <div 
      {...menuRule}
    >
      <g.Img
      src={menuIcon} 
      alt="" 
      height={'50%'}
      onClick={function(e) {showMenu} }
      />
      <g.Ul
        listStyle='none'
        width={rhythm(6)}
        display={'none'}
      >
        <g.Li
          margin={0}
        >
          <Link to="/contacts">
            Contatti
          </Link>
        </g.Li>
        <g.Li
          margin={0}
        >
          <Link to="/cosa_e_il_frisbee_freestyle">
            Frisbee freestyle
          </Link>
        </g.Li>
        <g.Li
          margin={0}
        >
          <Link to="/lazzaroni2013">
            Lazzaroni 2013
          </Link>
        </g.Li>
        <li>
          <Link to="/video">
            Videos
          </Link>
        </li>
      </g.Ul>
    </div>
  }
}

export default Menu