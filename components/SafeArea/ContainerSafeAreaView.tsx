import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const ContainerSafeAreaView: React.FC = ({ children }) => {
  const insets = useSafeAreaInsets();
  return <Container style={{ marginHorizontal: insets.left }}>{children}</Container>;
};

export default ContainerSafeAreaView;
