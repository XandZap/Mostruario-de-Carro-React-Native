import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import FormInput from "../../components/FormInput";
import BackButton from "../../components/UI/BackButton";
import Form from "../../components/UI/Form";

import { SubmitHandler } from "react-hook-form";

import { NavigatorParamsList } from "../../shared/utils/types";
import { authServices } from "../../shared/services";
import { useState } from "react";
import axios from "axios";
import { ErrorText } from "./styles";

type Inputs = {
  email: string;
};

export interface RegisterProps {
  navigation: NativeStackNavigationProp<NavigatorParamsList, "ResetPass">;
}

const { resetPassword } = authServices();

const ResetPassPage: React.FC<RegisterProps> = ({ navigation }) => {
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [message, setMessage] = useState("Falha ao resetar senha");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await resetPassword(data);
      const token = response.data.token;
      navigation.navigate("ChangePass", { token });
    } catch (error) {
      if (error.status === 422) setMessage(error.data.errors[0].message);
      else if (error.status === 404) setMessage(error.data.message);
      setIsErrorMessage(true);
      setTimeout(() => {
        setIsErrorMessage(false);
      }, 3000);
    }
  };

  const errorMessage = <ErrorText>{message}</ErrorText>;

  return (
    <>
      <Form>
        {isErrorMessage && errorMessage}
        <FormInput
          email={true}
          name={false}
          password={false}
          onSubmit={onSubmit}
          title="Enviar"
          navigation={navigation}
        />
        <BackButton right={false} onPress={() => navigation.navigate("Login")}>
          Voltar
        </BackButton>
      </Form>
    </>
  );
};

export default ResetPassPage;
