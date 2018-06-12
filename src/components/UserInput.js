import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {
        username: '',
        hometown: ''
      }
    }


  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
        className="username"
        type="text"
        onChange={(event) => this.handleChange(event)}
        value={this.state.username}
        />
        <input
        className="username"
        type="text"
        onChange={(event) => this.handleChange(event)}
        value={this.state.hometown}
        />
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
