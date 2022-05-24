import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ButtonGreenText } from "./Styles";

interface props {
  onPress: () => void;
}

const CartButton: React.FC<props> = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && { opacity: 0.5 }}>
      <ButtonGreenText style={{ fontWeight: "bold" }}>
        {children} <Ionicons name="cart" color="#B5C401" />
      </ButtonGreenText>
    </Pressable>
  );
};

export default CartButton;
