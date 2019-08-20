/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>BCH</strong> <span>JavaScript Toolkit</span></Link>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
