import React from "react";
import styled from "styled-components/native";

type props = {
  onPress: () => void;
};

const SPressable = styled.Pressable`
  margin-top: 30px;
`;

const Text = styled.Text`
  text-align: right;
  color: #c1c1c1;
`;

const ButtonForget: React.FC<props> = ({ onPress, children }) => {
  return (
    <SPressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={onPress}>
      <Text>{children}</Text>
    </SPressable>
  );
};

export default ButtonForget;
