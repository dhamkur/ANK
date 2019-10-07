import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

export default class ContainerFluid extends Component {
  render() {
    return (
      <View style={styles.containerFluid}>
        {this.props.children}
      </View>
    )
  }
}