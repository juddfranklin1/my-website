
import PropTypes from 'prop-types'
import React from 'react'
import ExampleWork from './ExampleWork'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class Section extends React.Component {
  render() {
    let close = (
      <button
        className="close"
        tabIndex={ 0 }
        onClick={(e) => {
          e.preventDefault();
          this.props.onCloseArticle()
        }}
        onKeyPress={(e) => {
          if(e.key === 'Enter') {
            this.props.onCloseArticle()
          }
        }}
      >close</button>
    )

    const content = documentToReactComponents(this.props.content.json)

    return (
        <article
          id={ this.props.name }
          className={`${this.props.article === this.props.name ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">{ this.props.title }</h2>
          <h3>{ this.props.subtitle }</h3>
          <span className="image main">
            <img src={this.props.pic} alt="" />
          </span>
          { content }
          <ExampleWork
            text={ documentToReactComponents(this.props.exampleWork.json) }
          ></ExampleWork>
          {close}
        </article>
    )
  }
}

Section.propTypes = {
  route: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.object,
  exampleText: PropTypes.object,
  article: PropTypes.string,
  name: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Section
