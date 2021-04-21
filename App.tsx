import React from "react";
import { StyleSheet } from "react-native";
import { Welcome } from "./src/pages/Welcome";
// import GlobalStyles from "./src/GlobalStyles";

export default function App() {
  return <Welcome />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
