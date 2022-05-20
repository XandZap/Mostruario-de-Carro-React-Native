import React from "react";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";

interface props {
  onPress: () => void;
}

const Text = styled.Text`
  color: "#B5C401";
`;

const CartButton: React.FC<props> = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && { opacity: 0.5 }}>
      <Text style={{ fontWeight: "bold", color: "#B5C401" }}>
        {children} <Ionicons name="cart" color="#B5C401" />
      </Text>
    </Pressable>
  );
};

export default CartButton;
