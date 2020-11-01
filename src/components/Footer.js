import React from 'react'
import PropTypes from 'prop-types'


const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; <span className="copyright-year">{currentYear}</span> Judd Franklin; Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a> using Dimension Starter. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
