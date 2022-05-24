import Ionicons from "@expo/vector-icons/Ionicons";
import { ButtonPressable, ButtonText } from "./Styles";

interface props {
  onPress: () => void;
  header?: boolean;
  children: string;
}

const ConfirmButton: React.FC<props> = ({ children, onPress, header }) => {
  return (
    <ButtonPressable
      android_ripple={{ color: "#ccc" }}
      onPress={onPress}
      style={({ pressed }) => [!header && { margin: 5, padding: 3, marginTop: 15 }, pressed && { opacity: 0.5 }]}
    >
      <ButtonText style={{ fontWeight: "bold" }}>
        {children} <Ionicons name="arrow-forward-outline" color="#B5C401" style={{ marginLeft: 5 }} />
      </ButtonText>
    </ButtonPressable>
  );
};

export default ConfirmButton;
