import Ionicons from "@expo/vector-icons/Ionicons";
import { ButtonPressable, ButtonText } from "./Styles";

interface props {
  onPress: () => void;
  children: string;
}

const AccountButton: React.FC<props> = ({ children, onPress }) => {
  return (
    <ButtonPressable
      android_ripple={{ color: "#ccc" }}
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
    >
      <ButtonText style={{ fontWeight: "bold" }}>
        {children} <Ionicons name="person" color="#B5C401" style={{ marginLeft: 5 }}></Ionicons>
      </ButtonText>
    </ButtonPressable>
  );
};

export default AccountButton;
