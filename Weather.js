import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    setGradient: ["#f5af19", "#f12711"],
    title: "It's a nice day to go to see Hui-jung💖",
    subTitle: "Go to see Hui-jung❕",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    setGradient: ["#636363", "#a2ab58"],
    title: "Lightning is dangerous😖",
    subTitle: "I'm at home with Hui-jung🥰",
  },
  Drizzle: {
    iconName: "weather-rainy",
    setGradient: ["#22c1c3", "#fdbb2d"],
    title: "It rains a little☹",
    subTitle: "Play at home with Hui-jung💑",
  },
  Rain: {
    iconName: "weather-pouring",
    setGradient: ["#74ebd5", "#ACB6E5"],
    title: "It's raining a lot😐",
    subTitle: "I'll watch a movie with Hui-jung at home💑",
  },
  Snow: {
    iconName: "snowflake",
    setGradient: ["#D3CCE3", "#E9E4F0"],
    title: "It snows outside",
    subTitle: "I'm going to make a snowman with Hui-jung🤗",
  },
  Atmosphere: {
    iconName: "weather-fog",
    setGradient: ["#6D6027", "#D3CBB8"],
    title: "It's foggy",
    subTitle: "When I go out with Hui-jung, I wear a mask😷",
  },
  Clouds: {
    iconName: "cloud-outline",
    setGradient: ["#434343", "#000000"],
    title: "It's cloudy",
    subTitle: "I'm having a good time at home with Hui-jung😘",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].setGradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{condition}</Text>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 35,
    color: "white",
  },
  title: {
    fontSize: 35,
    fontWeight: "400",
    color: "white",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
