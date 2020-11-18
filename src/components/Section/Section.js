
import PropTypes from 'prop-types'
import React from 'react'
import ExampleWork from '../ExampleWork/'
import CloseButton from '../CloseButton/'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Section = props => {
  const content = documentToReactComponents(props.content.json)

  return (
      <article
        role="dialog"
        aria-labelledby={'heading-' + props.name}
        aria-describedby={'subheading-' + props.name}
        id={ props.name }
        className={`${props.article === props.name ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 id={'heading-' + props.name} className="major">{ props.title }</h2>
        <h3 id={'subheading-' + props.name}>{ props.subtitle }</h3>
        { content }
        <ExampleWork
          text={ documentToReactComponents(props.exampleWork.json) }
        ></ExampleWork>
        
        <CloseButton
          onCloseArticle={ props.onCloseArticle }
        ></CloseButton>
      </article>
  )
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
