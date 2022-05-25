import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { Alert, ScrollView, useWindowDimensions } from "react-native";
import { useDispatch } from "react-redux";

import { removeUser, updateUserRedux } from "../../redux/user/user.slice";
import { userServices } from "../../shared/services";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Card } from "../../components/UI";
import AccountInput from "./AccountInput";
import { NavigatorParamsList } from "../../shared/utils";
import { AccountContainer, LogoutButton, TextButton } from "./Styles";

interface props {
  navigation: NativeStackNavigationProp<NavigatorParamsList, "Home">;
}

type Inputs = {
  name: string;
  email: string;
};

const { updateUser } = userServices();

const AccountPage: React.FC<props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const headerButtonRigth = () => {
    dispatch(removeUser());
  };

  const ButtonTologout = (
    <LogoutButton onPress={headerButtonRigth}>
      <TextButton>Sair <Ionicons name="log-out-outline" color="#B5C401" size={18}/></TextButton>
    </LogoutButton>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => ButtonTologout,
    });
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await updateUser(data);
      dispatch(updateUserRedux(data));
      Alert.alert("Atualização de usuário", "Usuário atualizado com sucesso");
    } catch (error) {
      Alert.alert("Erro", "Erro ao atualizar nome");
    }
  };

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <AccountContainer height={height}>
          <Card style={{ borderRadius: 10 }}>
            <AccountInput onSubmit={onSubmit} />
          </Card>
        </AccountContainer>
      </ScrollView>
    </>
  );
};

export default AccountPage;
