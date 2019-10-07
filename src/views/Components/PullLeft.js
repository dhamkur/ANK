import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class PullLeft extends Component {
  render() {
    return (
      <View style={styles.pullLeft}>
        {this.props.children}
      </View>
    )
  }
}