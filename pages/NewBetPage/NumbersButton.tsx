import styled from "styled-components/native";
import { GlobalColors } from "../../shared";

const View = styled.View`
  justify-content: center;
  flex: 1;
`;

const Pressable = styled.Pressable<{ color: string; selected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${(p) => (p.selected ? p.color : GlobalColors.blue50)};

  margin: 5px;
`;

const Text = styled.Text`
  text-align: center;
  color: white;
`;

interface props {
  onPress: (id: number) => void;
  color: string;
  id: number;
  selectedArray: number[];
}

const NumbersButton: React.FC<props> = ({ onPress, children, color, id, selectedArray }) => {
  return (
    <Pressable
      color={color}
      onPress={() => onPress(id)}
      selected={selectedArray.includes(id)}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
    >
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

export default NumbersButton;
