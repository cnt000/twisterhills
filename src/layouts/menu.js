import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'
import {css} from 'glamor'
import {rhythm} from '../utils/typography'
import menuIcon from './menu-icon.svg'
import UlMenu from './ul-menu'

let menuRule = css({
  width: rhythm(3),
  padding: rhythm(.3),
  textAlign: 'right',
  '& > div': {
    cursor: 'pointer'
  },
  '@media(min-width: 768px)': {
    width: rhythm(6),
    '& > div': {
      display: 'none'
    },
    '& > ul': {
      display: 'block'
    }
  }
})

let mobileMenuRule = css({
  position: 'absolute',
  right: 0,
  top: 0,
  backgroundColor: 'white',
  borderLeft: '2px solid orange',
  borderBottom: '2px solid orange',
  padding: rhythm(0.2)
})

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.onClickMenuIcon = this
      .onClickMenuIcon
      .bind(this);
    this.state = {
      opened: this.props.opened
    };
  }

  onClickMenuIcon() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    return <div {...menuRule}>
      {!this.state.opened && <div>
        <g.Img
          src={menuIcon}
          alt=""
          height={42}
          margin={0}
          onClick={this.onClickMenuIcon}/>
      </div>}

      {this.state.opened && <div {...mobileMenuRule}>
        <g.Img
          src={menuIcon}
          alt=""
          height={42}
          margin={0}
          onClick={this.onClickMenuIcon}/>
        <div>
          <UlMenu display={'block'}/>
        </div>
      </div>}
      <UlMenu/>
    </div>
  }
}

export default Menu