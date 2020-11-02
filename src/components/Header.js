import PropTypes from 'prop-types'
import React from 'react'

class Header extends React.Component {
  render() {

    return (
      <header id="header" style={this.props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
          <span className="icon fa-code"></span>
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
            { this.props.workSections.map((sect, ind) => (
              <li key={ 'section-navigation-' + ind }>
                <button
                  onClick={() => {
                    console.log(sect.node)
                    this.props.onOpenArticle(sect.node.slug)
                  }}
                >
                  { sect.node.headline }
                </button>  
              </li>
            )) }
            <li>
              <button
                onClick={() => {
                  this.props.onOpenArticle('about')
                }}
              >
                About
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

