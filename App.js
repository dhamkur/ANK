import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import TabIcon from "./src/views/Components/TabIcon";
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
            key="main"
            tabs={true}
            tabBarStyle={styles.tabBar}
            hideNavBar={true}
            showLabel={false}
          >
            <Scene
              key="HomePage"
              component={HomePage}
              selected
              name="home"
              icon={TabIcon}
              hideNavBar={true}
            />
            <Scene
              key="TransactionPage"
              // component={HomePage}
              selected
              name="bar-chart"
              icon={TabIcon}
              hideNavBar={true}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#E8F0FE",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    opacity: 1
  },
  navigationBarStyle: {
    backgroundColor: "red",
  },
  navigationBarTitleStyle: {
    color: "white",
  },
});