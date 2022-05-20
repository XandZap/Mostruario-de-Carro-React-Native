import React from "react";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";
import { GlobalColors } from "../../shared";

interface props {
  onPress: () => void;
  right: boolean;
}

const Pressable = styled.Pressable`
  align-items: center;
  padding: 10px;
`;

const Text = styled.Text`
  color: ${GlobalColors.grey800};
`;

const BackButton: React.FC<props> = ({ children, onPress, right }) => {
  const ArrowIcon = (
    <Ionicons
      name={right ? "arrow-forward-outline" : "arrow-back-outline"}
      color={GlobalColors.grey900}
      style={{ marginLeft: 3 }}
    />
  );
  const textWithArrow = right ? (
    <Text>
      {children} {ArrowIcon}
    </Text>
  ) : (
    <Text>
      {ArrowIcon} {children}
    </Text>
  );

  return (
    <Pressable style={({ pressed }) => pressed && { opacity: 0.5 }} android_ripple={{ color: "#ccc" }} onPress={onPress}>
      <View>{textWithArrow}</View>
    </Pressable>
  );
};

export default BackButton;
