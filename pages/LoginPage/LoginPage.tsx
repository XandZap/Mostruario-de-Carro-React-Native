import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Form from "../../components/UI/Form";
import { NavigatorParamsList } from "../../shared/utils/types";

import { SubmitHandler } from "react-hook-form";
import FormInput from "../../components/FormInput";
import BackButton from "../../components/UI/BackButton";
import { useState } from "react";
import Loading from "../../components/UI/Loading";
import { authServices } from "../../shared/services";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user/user.slice";

export interface LoginProps {
  navigation: NativeStackNavigationProp<NavigatorParamsList, "Login">;
}

type Inputs = {
  email: string;
  password: string;
};

const { login } = authServices();

const LoginPage: React.FC<LoginProps> = ({ navigation }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsAuthenticating(true);
    try {
      const { email, password } = data;
      const response = await login({ email, password });
      dispatch(addUser(response.data));
    } catch (error: any) {
      if (error.data.error.message) setErrorMessage(`Falha no login: ${error.data.error.message}`);
      else console.log("erro do console:", error);
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <Loading message="Efetuando login..." />;
  }

  return (
    <>
      <Form>
        <FormInput
          email={true}
          name={false}
          password={true}
          onSubmit={onSubmit}
          title="Entrar"
          navigation={navigation}
        />
        <BackButton right={true} onPress={() => navigation.navigate("Register")}>
          Registrar
        </BackButton>
      </Form>
    </>
  );
};

export default LoginPage;
