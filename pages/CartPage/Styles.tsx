import styled from "styled-components/native";
import { GlobalColors } from "../../shared";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ViewContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 10px;
`;

export const TitleText = styled.Text`
  color: ${GlobalColors.grey800};
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const FlatList = styled.FlatList``;

export const TotalContainer = styled.View`
  width: 85%;
  background-color: white;
  border: 1px solid ${GlobalColors.grey80};
  padding-bottom: 20px;
  padding-left: 10px;
`;

export const TotalValue = styled.Text`
  font-size: 24px;
  color: ${GlobalColors.grey800};
`;

export const TotalOnCart = styled.Text`
  color: ${GlobalColors.grey800};
  font-weight: bold;
  font-style: italic;
  font-size: 24px;
`;

export const AlertText = styled.Text`
  text-align: center;
  color: ${GlobalColors.grey800};
  font-weight: 400;
  font-style: italic;
  font-size: 24px;
`;

export const MinValueText =styled.Text`
text-align: center;
color: red;
font-weight: 400;
font-style: italic;
font-size: 16px;
`;

export const Text = styled.Text``;

const Pressable = styled.Pressable`
  width: 85%;
  min-height: 60px;
  background-color: ${GlobalColors.grey70};
  border: 1px solid ${GlobalColors.grey80};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 0px;
  align-items: center;
  justify-content: center;
`;

const SaveText = styled.Text`
  color: ${GlobalColors.green200};
  font-weight: bold;
  font-size: 28px;
  font-style: italic;
`;

export const SaveButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && { opacity: 0.5 }}>
      <SaveText>
        Salvar <Ionicons name="arrow-forward-outline" color={GlobalColors.green200} size={28} />
      </SaveText>
    </Pressable>
  );
};

export const BetButtonContainer = styled.View`
  flex-direction: row;
`;

export const BetButtonView = styled.View<{ color: string }>`
  border-left-width: 4px;
  border-left-color: ${(p) => p.color};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 5px;
  padding-left: 10px;
  margin-bottom: 8px;
  margin-left: 5px;
`;

export const BetButtonNumbers = styled.Text`
  color: ${GlobalColors.grey200};
  font-weight: bold;
  font-style: italic;
  font-size: 15px;
`;

export const BetButtonType = styled.Text<{ color: string }>`
  color: ${(p) => p.color};
  font-weight: bold;
  font-style: italic;
  font-size: 16px;
`;

export const BetButtonValue = styled.Text`
  color: ${GlobalColors.grey200};
  font-size: 16px;
  font-weight: 400;
`;

export const PressableTrash = styled.Pressable`
  align-items: center;
  justify-content: center;
`;
export const TextTrash = styled.Text``;
