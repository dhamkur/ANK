import React, { Component } from "react";
import { Picker } from "react-native";

export default class Item extends Component {
  render() {
    return (
      <Picker.Item label={this.props.label} value={this.props.value} />
    )
  }
}