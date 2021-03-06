import React from 'react'
import Link from 'gatsby-link'
import {css} from 'glamor'
import g from 'glamorous'
import frisbeeLogo from './images/frisbeescritta.png'

let imgStyle = css({
  float: 'left',
  width: 120,
  margin: 0,
})

const IndexPage = () => (
  <article>
      <h1>From 2005... Frisbee freestyle Bologna</h1>
      <div>
        <img src={frisbeeLogo} alt="frisbee freestyle logo" {...imgStyle} />
        <g.Span fontWeight={'bold'}>Twister Hills Bologna</g.Span> is one of most famous Freestyle Frisbee association in the World, founded by Manuel Cesari and Andrea Poli (both based in Bologna) in 2005. 
        Manuel and Andrea had always loved Freestyle Frisbee spirit and they have been sharing this love with any person they met since 2005. 
        Twister Hills Bologna incorporated in 2012 the best crew of Freestyle Frisbee Show, the <g.Span fontWeight={'bold'}>Acrobatic Frisbee Team</g.Span>, together with many other great showmen and performers such Clay Collerà, Fabio Sanna, Claudio Cigna, Marco Prati, Antonio Cusmà, Valerio Occorsio...
        In the last 3 years Twister Hills Bologna and Acrobatic Frisbee Team got a lot of sport achievements: 5 World titles, 10 European titles, 15 Italian titles, 10 Paganello titles... 
        If you want to jam with some of the best players of the planet, well, you are on right place!!!</div>
  </article>
)

export default IndexPage
