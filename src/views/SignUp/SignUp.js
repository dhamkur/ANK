import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import FormGroup from "../Components/FormGroup";
import Input from "../Components/Input";
import ButtonInfo from "../Components/ButtonInfo";
import ButtonDefault from "../Components/ButtonDefault";

export default class SignUp extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={{ padding: 25 }}>
          <View style={{ marginTop: 60, marginBottom: 30 }}>
            <Image source={require("../../assets/img/acme.png")} style={{ marginBottom: 30, width: 155, height: 43 }} />
            <Text style={{ fontSize: 32, fontWeight: "600", color: "#494949" }}>
              Welcome, <Text style={{ color: "#cecece" }}>create new account</Text>
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
            <Input placeholder="Password Confirmation" secureTextEntry={true} />
          </FormGroup>
          <FormGroup>
            <ButtonInfo>
              Login
            </ButtonInfo>
          </FormGroup>
          <FormGroup>
            <Text style={{ textAlign: "center" }}>or already have an account?</Text>
          </FormGroup>
          <FormGroup>
            <ButtonDefault onPress={() => Actions.LoginPage()}>
              Login
            </ButtonDefault>
          </FormGroup>
        </View>
      </ScrollView>
    )
  }
}