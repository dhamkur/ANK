import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}