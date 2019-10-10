import React, { Component } from "react";
import { ScrollView, View, Text, Dimensions } from "react-native";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Column4 from "../Components/Column4";
import List from "../Components/List";
import ButtonOutline from "../Components/ButtonOutlineCust1";
import styles from "../styles";

export default class Reports extends Component {
  render() {
    return (
      <ScrollView style={styles.bgScreen}>
        <Container>
          <View style={styles.containerHeader}>
            <Text style={styles.titlePage1}>Reports</Text>
          </View>
          <Row>
            <Column4>
              <ButtonOutline focused>
                <Text>Week</Text>
              </ButtonOutline>
            </Column4>
            <Column4>
              <ButtonOutline focused={false}>
                <Text>Month</Text>
              </ButtonOutline>
            </Column4>
            <Column4>
              <ButtonOutline focused={false}>
                <Text>Year</Text>
              </ButtonOutline>
            </Column4>
          </Row>

          <List bgColor="#AD97F2" iconName="shopping-cart" iconColor="#fff" title="Walmart" category="Shopping" date="1 Oct 2019" currency="$350.00" />
          <List bgColor="#89CEF4" iconName="apple" iconColor="#fff" title="iTunes" category="Entertainments" date="30 Sept 2019" currency="$25.00" />
          <List bgColor="#FFA565" iconName="credit-card-alt" iconColor="#fff" title="ATM" category="Withdrawals" date="25 Sept 2019" currency="$25.00" />
          <List bgColor="#AD97F2" iconName="shopping-cart" iconColor="#fff" title="USB Flashdisk" category="Shopping" date="20 Sept 2019" currency="$10.00" />
          <List bgColor="#AD97F2" iconName="shopping-cart" iconColor="#fff" title="Camera" category="Shopping" date="10 Sept 2019" currency="$300.00" />
          <List bgColor="#89CEF4" iconName="apple" iconColor="#fff" title="iTunes" category="Entertainments" date="10 Sept 2019" currency="$30.00" />
          <List bgColor="#FFA565" iconName="credit-card-alt" iconColor="#fff" title="ATM" category="Withdrawals" date="1 Sept 2019" currency="$1,000.00" />
        </Container>
      </ScrollView>
    )
  }
}