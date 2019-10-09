import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import FormGroup from "../Components/FormGroup";
import Input from "../Components/Input";
import ButtonInfo from "../Components/ButtonInfo";
import ButtonDefault from "../Components/ButtonDefault";
import styles from "../styles";

export default class Login extends Component {
  render() {
    return (
      <ScrollView style={styles.bgLogin}>
        <View style={styles.containerLogin}>
          <View style={styles.headerLogin}>
            <Image source={require("../../assets/img/ank.png")} style={styles.logoLogin} />
            <Text style={styles.titleLogin1}>
              Welcome, <Text style={styles.colorGrey}>sign in to</Text>
            </Text>
            <Text style={styles.titleLogin2}>continue</Text>
          </View>

          <FormGroup>
            <Input placeholder="Email Address" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Password" secureTextEntry={true} />
          </FormGroup>
          <FormGroup>
            <ButtonInfo onPress={() => Actions.HomePage()}>
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