import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface props {
  onPress: () => void;
  header?: boolean;
  children: string;
}

const ConfirmButton: React.FC<props> = ({ children, onPress, header }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      onPress={onPress}
      style={({pressed}) => [styles.container, !header && { margin: 5, padding: 3, marginTop: 15 }, pressed && {opacity: 0.5}]}
    >
      <Text style={styles.text}>
        {children} <Ionicons name="arrow-forward-outline" color="#B5C401" style={{ marginLeft: 5 }} />
      </Text>
    </Pressable>
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#B5C401",
  },
});
