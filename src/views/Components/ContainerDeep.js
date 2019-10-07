import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class ContainerDeep extends Component {
  render() {
    return (
      <View style={styles.containerDeep}>
        {this.props.children}
      </View>
    )
  }
}