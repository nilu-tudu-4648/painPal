import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

const Value = ({ label, value }) => {
  return (
    <ThemedView
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 15,
      }}
    >
      <ThemedText type="h3mid">{label}</ThemedText>
      <ThemedText type="h1">{value}</ThemedText>
    </ThemedView>
  );
};

export default Value;
