import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import {addGuns, removeGuns} from './reducer.redux';


class App extends Component {
  render() {
    return (
      <div>
      <div>现有武器{this.props.num}</div>
      <button onClick={this.props.addGuns}>添加武器</button>
      <button onClick={this.props.removeGuns}>去除武器</button>
      </div>
    );
  }
}



export default connect(state=>({num:state}),{addGuns, removeGuns})(App);
