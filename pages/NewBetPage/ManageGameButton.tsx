import { CompletePressable, CompleteText } from "./styles";

interface props {
  onPress: () => void;
  text: string;
  isCarrinho?: boolean;
}

const ManageGameButton: React.FC<props> = ({ onPress, text, isCarrinho }) => {
  return (
    <CompletePressable style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={onPress} isCarrinho={isCarrinho}>
      <CompleteText isCarrinho={isCarrinho}>{text}</CompleteText>
    </CompletePressable>
  );
};

export default ManageGameButton;
