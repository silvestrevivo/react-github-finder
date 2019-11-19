import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1><i className={icon}>{title}</i></h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Github finder",
  icon: "fa fa-github"
}

Navbar.propTypes = {
  tittle: PropTypes.string,
  icon: PropTypes.string,
}

export default Navbar

