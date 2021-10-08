import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "./src/Title/title";
import Main from "./src/Main";
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Title />
        <Main />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    paddingTop: 100,
  },
});
