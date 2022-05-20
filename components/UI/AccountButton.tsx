import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface props {
  onPress: () => void;
  children: string;
}

const AccountButton: React.FC<props> = ({ children, onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && { opacity: 0.5 },
      ]}
    >
      <Text style={styles.text}>
        {children} <Ionicons name="person" color="#B5C401" style={{ marginLeft: 5 }} ></Ionicons>
      </Text>
    </Pressable>
  );
};

export default AccountButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#B5C401",
  },
});
