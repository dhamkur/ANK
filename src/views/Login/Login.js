import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import FormGroup from "../Components/FormGroup";
import Input from "../Components/Input";
import ButtonInfo from "../Components/ButtonInfo";
import ButtonDefault from "../Components/ButtonDefault";

export default class Login extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={{ padding: 25 }}>
          <View style={{ marginTop: 60, marginBottom: 30 }}>
            <Image source={require("../../assets/img/acme.png")} style={{ marginBottom: 30, width: 155, height: 43 }} />
            <Text style={{ fontSize: 32, fontWeight: "600", color: "#494949" }}>
              Welcome, <Text style={{ color: "#cecece" }}>sign in to</Text>
            </Text>
            <Text style={{ fontSize: 32, fontWeight: "600", color: "#cecece" }}>continue</Text>
          </View>

          <FormGroup>
            <Input placeholder="Email Address" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Password" secureTextEntry={true} />
          </FormGroup>
          <FormGroup>
            <ButtonInfo>
              Login
            </ButtonInfo>
          </FormGroup>
          <FormGroup>
            <Text style={{ textAlign: "center" }}>or haven't an account yet?</Text>
          </FormGroup>
          <FormGroup>
            <ButtonDefault onPress={() => Actions.SignUpPage()}>
              Sign Up
            </ButtonDefault>
          </FormGroup>
        </View>
      </ScrollView>
    )
  }
}