import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'
import {rhythm} from "../utils/typography"

const UlMenu = ({
  display = 'none'
}) => <g.Ul listStyle='none' width={rhythm(6)} margin={rhythm(0.2)} display={display}>
  <g.Li margin={0}>
    <Link to="/contacts">
      Contatti
    </Link>
  </g.Li>
  <g.Li margin={0}>
    <Link to="/cosa_e_il_frisbee_freestyle">
      Frisbee freestyle
    </Link>
  </g.Li>
  <g.Li margin={0}>
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

export default UlMenu