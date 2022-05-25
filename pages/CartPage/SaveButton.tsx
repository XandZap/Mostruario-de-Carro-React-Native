import { GlobalColors } from "../../shared/utils";
import { PressableSaveButton, SaveText } from "./Styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SaveButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <PressableSaveButton onPress={onPress} style={({ pressed }) => pressed && { opacity: 0.5 }}>
      <SaveText>
        Salvar <Ionicons name="arrow-forward-outline" color={GlobalColors.green200} size={28} />
      </SaveText>
    </PressableSaveButton>
  );
};