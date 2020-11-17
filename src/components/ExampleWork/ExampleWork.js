
import PropTypes from 'prop-types'
import React from 'react'

const ExampleWork = (props) => (
    <blockquote className="card">
    <div className="card-block">
      <h4>Example Work</h4>
      { props.text }
    </div>
  </blockquote>
)

ExampleWork.propTypes = {
    text: PropTypes.array
}

export default ExampleWork
