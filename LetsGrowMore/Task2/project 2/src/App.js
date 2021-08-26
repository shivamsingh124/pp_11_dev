import Users from "./components/user";
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      users_data: [],
      loading: true
    }

    // Binding this keyword
    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    console.log("VT");
    document.getElementById("main").style.display = 'flex';
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then(response => response.json())
      .then((users) => {

        this.setState({
          users_data: users.data,
          loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (<>
      <nav className="navbar navbar-expand-l navbar-light nt">
        <div className="container-fluid">
          <img height="306" width="705" className="imgl" src="https://letsgrowmore.in/wp-content/uploads/2021/05/growmore-removebg-preview-768x314.png"></img>


          <button onClick={this.updateState}>Load Users</button>
        </div>
      </nav>
      <Users loading={this.state.loading} users={this.state.users_data} />
    </>
    )
  }
}

export default App;

