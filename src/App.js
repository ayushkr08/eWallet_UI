import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
    this.username = ""
    this.password = ""

  }
  onClickHandler(event) {
    event.preventDefault();
    // alert("username:", this.username) ye galat hai 
    alert(`username: ${this.username}`)
    alert(`password: ${this.password}`)
    console.log("username:", this.username)
  }
  onChangeHandler(event) {
    event.preventDefault();
    if (event.target.id == "username")
      this.username = event.target.value
    else if (event.target.id == "password")
      this.password = event.target.value
    // console.log("something entered")
    // console.log(" entered letter: ", event.target.value)
  }
  render() {
    return (
      <div className="App">
        <form>
          <label id='username'>username:
            <input type="text" name='username' id="username" onChange={this.onChangeHandler}></input>
          </label>
          <br></br>
          <label id='password'>password:
            <input type="text" name='password' id="password" onChange={this.onChangeHandler}></input>
          </label>
          <br></br>
          <input type="submit" name="submit" onClick={this.onClickHandler}></input>
        </form>
      </div>
    );
  }
}

export default App;
