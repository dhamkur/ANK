import React, { Component } from "react";
import { View, TextInput } from "react-native";

export default class Input extends Component {
  render() {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 5
        }}
      >
        <TextInput
          underlineColorAndroid="transparent"
          autoCapitalize={this.props.autoCapitalize}
          autoCorrect={this.props.autoCorrect}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          maxLength={this.props.maxLength}
          secureTextEntry={this.props.secureTextEntry}
          keyboardType={this.props.keyboardType}
        />
      </View>
    )
  }
}