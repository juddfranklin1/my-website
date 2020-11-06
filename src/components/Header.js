import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/judd-logo.png'

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo} alt="Judd Franklin" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Judd Franklin: Code is for people, not computers.</h1>
        <p>
          Engineers should aim to satisfy people, not computers. From this belief, I have built a career producing satisfaction for site owners, end users, and my colleagues.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        { props.workSections.map((sect, ind) => (
          <li key={ 'section-navigation-' + ind }>
            <button
              onClick={() => {
                props.onOpenArticle(sect.node.slug)
              }}
            >
              { sect.node.headline }
            </button>  
          </li>
        )) }
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  </header>
)


Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

