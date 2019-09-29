import React, { Component } from "react";
import { View } from "react-native";

export default class FormGroup extends Component {
  render() {
    return (
      <View style={{ paddingTop: 10, paddingBottom: 10 }}>
        {this.props.children}
      </View>
    )
  }
}