import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  searchUser = async text => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    if(res){
      this.setState({users: res.data.items, loading: false});
    }
  }

  clearUser = () => this.setState({users: [], loading: false});

  render(){
    const { users, loading } = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUser={this.searchUser}
            clearUser={this.clearUser}
            showClear={this.state.users.length > 0 ? true : false} />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
