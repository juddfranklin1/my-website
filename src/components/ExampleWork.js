
import PropTypes from 'prop-types'
import React from 'react'

class ExampleWork extends React.Component {
  render() {
    return (
        <blockquote className="card">
        <div className="card-block">
          <h4>Example Work</h4>
          { this.props.text }
        </div>
      </blockquote>
    )
  }
}

ExampleWork.propTypes = {
    text: PropTypes.array
}

export default ExampleWork
