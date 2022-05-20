import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Controller } from "react-hook-form";
import ErrorMessage from "../../components/FormInput/ErrorMessage";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/store";
import { ButtonConfirm, InputContainer, Text, TextButton, TextInput } from "./Styles";

interface props {
  onSubmit: SubmitHandler<Inputs>;
}

type Inputs = {
  email: string;
  name: string;
};

const AccountInput: React.FC<props> = ({ onSubmit }) => {
  const { user } = useSelector(selectUser);

  const schema = yup
    .object({
      email: yup
        .string()
        .required("Você deve preencher o campo email")
        .email("Email inválido")
        .default(user.email),
      name: yup.string().required("Você deve preencher o campo nome").default(user.name),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <InputContainer>
        <Text>Atualizar Nome</Text>
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
              defaultValue={user.name}
              autoCorrect={false}
              placeholder="Nome"
            />
          )}
          name="name"
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <Text>Atualizar Email</Text>
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
              defaultValue={user.email}
              value={value}
              placeholder="Email"
            />
          )}
          name="email"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <ButtonConfirm onPress={handleSubmit(onSubmit)} style={({ pressed }) => pressed && { opacity: 0.5 }}>
          <TextButton>Atualizar</TextButton>
        </ButtonConfirm>
      </InputContainer>
    </>
  );
};

export default AccountInput;
