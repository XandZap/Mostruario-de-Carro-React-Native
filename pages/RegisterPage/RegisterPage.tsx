import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

import FormInput from "../../components/FormInput";
import { Form, BackButton, Loading } from "../../components/UI/";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorParamsList } from "../../shared/utils/types";
import { userServices } from "../../shared/services";
import { Alert, Text } from "react-native";

type Inputs = {
  email: string;
  password: string;
  name: string;
};

export interface RegisterProps {
  navigation: NativeStackNavigationProp<NavigatorParamsList, "Register">;
}

const { registerUser } = userServices();

const RegisterPage: React.FC<RegisterProps> = ({ navigation }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const body = { name: data.name, email: data.email, password: data.password };
    setIsAuthenticating(true);
    try {
      await registerUser(body);
      Alert.alert("Usuário criado com sucesso");
      navigation.navigate("Login");
    } catch (error: any) {
      if (error.data.error.message === "Email already exists")
        setErrorMessage("Falha ao criar usuário: Email cadastrado já existe");
      else if (error.data.error.message) setErrorMessage(`Falha ao criar usuário: ${error.data.error.message}`);
      else console.log(error);
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <Loading message="Criando usuário..." />;
  }

  return (
    <>
      <Form>
        <FormInput
          email={true}
          name={true}
          password={true}
          onSubmit={onSubmit}
          title="Registrar"
          navigation={navigation}
        />
        {errorMessage.length > 0 && <Text style={{ color: "red" }}>{errorMessage}</Text>}
        <BackButton right={false} onPress={() => navigation.navigate("Login")}>
          Voltar
        </BackButton>
      </Form>
    </>
  );
};

export default RegisterPage;
