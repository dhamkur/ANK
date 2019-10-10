import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Router, Scene, Tabs } from "react-native-router-flux";
import TabIcon from "./src/views/Components/TabIcon";
import LoginPage from "./src/views/Login/Login";
import SignUpPage from "./src/views/SignUp/SignUp";
import HomePage from "./src/views/Home/Home";
import ReportsPage from "./src/views/Reports/Reports";
import SavingPage from "./src/views/Saving/Saving";
import UserPage from "./src/views/User/User";

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
          <Tabs
            key="tabbar"
            tabs
            tabBarStyle={styles.tabBar}
            tabBarPosition="bottom"
            hideNavBar={true}
            showLabel={false}
          >
            <Scene
              key="HomePage"
              component={HomePage}
              focused
              name="home"
              icon={TabIcon}
              hideNavBar={true}
            />
            <Scene
              key="ReportsPage"
              component={ReportsPage}
              focused
              name="bar-chart"
              icon={TabIcon}
              hideNavBar={true}
            />
            <Scene
              key="SavingPage"
              component={SavingPage}
              focused
              name="briefcase"
              icon={TabIcon}
              hideNavBar={true}
            />
            <Scene
              key="UserPage"
              component={UserPage}
              focused
              name="user"
              icon={TabIcon}
              hideNavBar={true}
            />
          </Tabs>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#E8F0FE",
    height: 65
  }
});