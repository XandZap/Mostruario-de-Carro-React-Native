import { ButtonForgetPressable, ButtonForgetText } from "./Styles";

type props = {
  onPress: () => void;
};

const ButtonForget: React.FC<props> = ({ onPress, children }) => {
  return (
    <ButtonForgetPressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={onPress}>
      <ButtonForgetText>{children}</ButtonForgetText>
    </ButtonForgetPressable>
  );
};

export default ButtonForget;
