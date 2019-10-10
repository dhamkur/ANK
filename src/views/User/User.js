import React, { Component } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import ListTransparent from "../Components/ListTransparent";
import styles from "../styles";

export default class User extends Component {
  render() {
    return (
      <ScrollView style={styles.bgScreen}>
        <TouchableOpacity onPress={() => Actions.LoginPage()}>
          <ListTransparent title="Logout" />
        </TouchableOpacity>
      </ScrollView>
    )
  }
}