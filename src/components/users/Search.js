import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  }

  state = {
    text: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({text: ''});
  }

  render() {
    const { showClear, clearUser } = this.props
    const { text } = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={this.onChange} />
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
        {showClear && <button className="btn btn-light btn-block" onClick={clearUser}>Clear</button>}
      </div>
    )
  }
}

export default Search
