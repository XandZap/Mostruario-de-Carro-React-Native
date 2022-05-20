import { ActivityIndicator, Text, View } from "react-native";

type props = { message: string };

const Loading: React.FC<props> = ({ message }) => {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
        <Text>{message}</Text>
      </View>
    </>
  );
};

export default Loading;
