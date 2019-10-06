import React, { Component } from 'react';
import { Router, Scene } from "react-native-router-flux";
import LoginPage from "./src/views/Login/Login";
import SignUpPage from "./src/views/SignUp/SignUp";
import HomePage from "./src/views/Home/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="LoginPage"
            component={LoginPage}
            title="LoginPage"
            hideNavBar={true}
            initial
          />
          <Scene
            key="SignUpPage"
            component={SignUpPage}
            title="SignUpPage"
            hideNavBar={true}
          />
          <Scene
            key="HomePage"
            component={HomePage}
            title="HomePage"
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}