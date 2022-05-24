import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { SubmitHandler } from "react-hook-form";
import styled from "styled-components/native";

import { GlobalColors } from "../../shared";
import { NavigatorParamsList } from "../../shared/utils/types";

import FormInput from "../../components/FormInput";
import { BackButton, Form } from "../../components/UI";
import { authServices } from "../../shared/services";
import { Alert } from "react-native";

type Inputs = {
  password: string;
};

interface RegisterProps {
  navigation: NativeStackNavigationProp<NavigatorParamsList, "ChangePass">;
  route: RouteProp<NavigatorParamsList, "ChangePass">;
}

const Text = styled.Text`
  color: ${GlobalColors.grey700};
`;

const { changePassword } = authServices();

const ChangePassPage: React.FC<RegisterProps> = ({ navigation, route }) => {
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await changePassword(data, route.params.token);
      Alert.alert("Alteração de senha", "Senha alterada com sucesso", [
        {
          text: "Ok",
          onPress: () => {
            navigation.navigate("Login");
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Alteração de senha", "Falha ao alterar senha", [
        {
          text: "Ok",
          onPress: () => {
            navigation.navigate("ResetPass");
          },
        },
      ]);
    }
  };
  return (
    <>
      <Form>
        <Text>Digite a nova Senha</Text>
        <FormInput
          email={false}
          name={false}
          password={true}
          onSubmit={onSubmit}
          title="Enviar"
          navigation={navigation}
        />
        <BackButton right={false} onPress={() => navigation.navigate("ResetPass")}>
          Voltar
        </BackButton>
      </Form>
    </>
  );
};

export default ChangePassPage;
