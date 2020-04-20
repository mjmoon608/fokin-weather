import React from "react";
import Loading from "./Loding";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다.", "위치 설정을 확인해 주세요.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
