import { PressableFilter, TextFilter } from "./styles";

type propsFilter = {
  onPress: () => void;
};

export const ButtonFilters: React.FC<propsFilter> = ({ children, onPress }) => {
  return (
    <PressableFilter
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
      onPress={onPress}
    >
      <TextFilter>{children}</TextFilter>
    </PressableFilter>
  );
};
