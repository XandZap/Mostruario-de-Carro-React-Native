import { Text, View } from "react-native";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Controller } from "react-hook-form";
import ConfirmButton from "../UI/ConfirmButton";
import ButtonForget from "../UI/ButtonForget";
import styled from "styled-components/native";
import ErrorMessage from "./ErrorMessage";

interface props {
  name: boolean;
  email: boolean;
  password: boolean;
  title: string;
  onSubmit: SubmitHandler<Inputs>;
  navigation: any;
}

type Inputs = {
  email: string;
  password: string;
  name: string;
};

const TextInput = styled.TextInput`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
`;

const FormInput: React.FC<props> = ({ title, name, email, password, onSubmit, navigation }) => {
  let schema = yup.object({}).required();

  if (name && email && password) {
    schema = yup
      .object({
        email: yup.string().required("Você deve preencher o campo email").email("Email inválido"),
        name: yup.string().required("Você deve preencher o campo nome"),
        password: yup
          .string()
          .required("Você deve preencher o campo senha")
          .min(4, "Senha deve ter no mínimo 4 caracters"),
      })
      .required();
  } else if (email && password) {
    schema = yup
      .object({
        email: yup.string().required("Você deve preencher o campo email").email("Email inválido"),
        password: yup
          .string()
          .required("Você deve preencher o campo senha")
          .min(4, "Senha deve ter no mínimo 4 caracters"),
      })
      .required();
  } else if (email) {
    schema = yup
      .object({
        email: yup.string().required("Você deve preencher o campo email").email("Email inválido"),
      })
      .required();
  } else {
    schema = yup
      .object({
        password: yup
          .string()
          .required("Você deve preencher o campo senha")
          .min(4, "Senha deve ter no mínimo 4 caracters"),
      })
      .required();
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <View>
        {name && (
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
                placeholder="Nome"
              />
            )}
            name="name"
          />
        )}
        {name && errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

        {email && (
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
              />
            )}
            name="email"
          />
        )}
        {email && errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        {password && (
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Senha"
                secureTextEntry={true}
              />
            )}
            name="password"
          />
        )}
        {password && errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </View>
      {title === "Entrar" && (
        <ButtonForget onPress={() => navigation.navigate("ResetPass")}>Esqueceu a senha?</ButtonForget>
      )}
      <ConfirmButton onPress={handleSubmit(onSubmit)}>{title}</ConfirmButton>
    </>
  );
};

export default FormInput;
