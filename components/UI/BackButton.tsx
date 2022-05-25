import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalColors } from "../../shared/utils";
import { BackButtonPressable, BackButtonText } from "./Styles";

interface props {
  onPress: () => void;
  right: boolean;
}

const BackButton: React.FC<props> = ({ children, onPress, right }) => {
  const ArrowIcon = (
    <Ionicons
      name={right ? "arrow-forward-outline" : "arrow-back-outline"}
      color={GlobalColors.grey900}
      style={{ marginLeft: 3 }}
    />
  );
  const textWithArrow = right ? (
    <BackButtonText>
      {children} {ArrowIcon}
    </BackButtonText>
  ) : (
    <BackButtonText>
      {ArrowIcon} {children}
    </BackButtonText>
  );

  return (
    <BackButtonPressable
      style={({ pressed }) => pressed && { opacity: 0.5 }}
      android_ripple={{ color: "#ccc" }}
      onPress={onPress}
    >
      <View>{textWithArrow}</View>
    </BackButtonPressable>
  );
};

export default BackButton;
