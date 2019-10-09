import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NumberFormat from "react-number-format";
import ContainerDeep from "../Components/ContainerDeep";
import Row from "../Components/Row";
import List from "../Components/List";
import Column12 from "../Components/Column12";
import PullRight from "../Components/PullRight";
import Select from "../Components/Select";
import Item from "../Components/SelectItem";
import styles from "../styles";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "George",
      balance: "3564012",
      sort: ""
    }
  }

  onSort(value) {
    this.setState({
      sort: value
    });
  }

  render() {
    return (
      <ScrollView style={styles.bgHome}>
        <ContainerDeep>
          <ImageBackground source={require("../../assets/img/bg.png")} style={styles.imgBg} />

          <Row>
            <Column12>
              <PullRight>
                <TouchableOpacity>
                  <Icon name="bell-o" size={22} color="#fff" />
                  <Icon name="circle" size={14} color="#EFB810" style={styles.dotNotification} />
                </TouchableOpacity>
              </PullRight>
            </Column12>
          </Row>

          <View style={styles.titleWelcome}>
            <Text style={styles.titleHome1}>Welcome back</Text>
            <Text style={styles.titleHome2}>{this.state.name}</Text>
          </View>
          <View style={styles.titleWelcome}>
            <Text style={styles.titleHome1}>Your balance</Text>
            <NumberFormat
              value={this.state.balance}
              displayType="text"
              thousandSeparator={true}
              prefix="$"
              renderText={value =>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <Text style={styles.titleHome2}>
                    {value}
                  </Text>
                  <Icon name="caret-right" size={28} color="#fff" style={{ marginLeft: 10, marginTop: 6 }} />
                </TouchableOpacity>
              }
            />
          </View>
        </ContainerDeep>

        <View style={styles.containerBtnAdd}>
          <TouchableOpacity style={styles.btnAdd}>
            <Icon name="plus" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.homeCard}>
          <ContainerDeep>
            <Text style={styles.titleHome3}>Transactions</Text>
            <Select
              selectedValue={this.state.sort}
              onValueChange={value => this.onSort(value)}
              mode="dropdown"
            >
              <Item label="Today" value="today" />
              <Item label="This Week" value="this_week" />
              <Item label="This Month" value="this_month" />
            </Select>

            <List bgColor="#7760a4" iconName="shopping-cart" iconColor="#fff" title="Walmart" category="Shopping" currency="$350.00" />
            <List bgColor="#6699cc" iconName="apple" iconColor="#fff" title="iTunes" category="Entertainments" currency="$25.00" />
            <List bgColor="#ea9007" iconName="credit-card-alt" iconColor="#fff" title="ATM" category="Withdrawals" currency="$25.00" />
            <List bgColor="#7760a4" iconName="shopping-cart" iconColor="#fff" title="USB Flashdisk" category="Shopping" currency="$10.00" />
          </ContainerDeep>
        </View>
      </ScrollView>
    )
  }
}