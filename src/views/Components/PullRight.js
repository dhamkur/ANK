import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class PullRight extends Component {
  render() {
    return (
      <View style={styles.pullRight}>
        {this.props.children}
      </View>
    )
  }
}