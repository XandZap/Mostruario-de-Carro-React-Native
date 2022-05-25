import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { GlobalColors } from "../shared/utils";
import {
  LoginPage,
  RegisterPage,
  ResetPassPage,
  ChangePassPage,
  HomePage,
  NewBetPage,
  AccountPage,
  CartPage,
} from "../pages";

import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserData } from "../redux/user/user.actions";
import { selectGames, selectUser, useAppDispatch } from "../redux/store";
import { fetchGamesData } from "../redux/games/games-actions";
import { Loading } from "../components/UI";

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: GlobalColors.grey50 },
      headerTintColor: GlobalColors.grey800,
    }}
  >
    <Stack.Screen name="Home" component={HomePage} options={{ title: "Jogos Recentes" }} />
    <Stack.Screen name="NewBet" component={NewBetPage} options={{ title: "Nova Aposta" }} />
    <Stack.Screen name="Account" component={AccountPage} options={{ title: "Minha Conta" }} />
    <Stack.Screen name="Cart" component={CartPage} options={{ title: "Carrinho" }} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: GlobalColors.grey50 },
      headerTintColor: GlobalColors.grey800,
    }}
  >
    <Stack.Screen name="Login" component={LoginPage} />
    <Stack.Screen name="Register" component={RegisterPage} options={{ title: "Registrar" }} />
    <Stack.Screen name="ResetPass" component={ResetPassPage} options={{ title: "Resetar Senha" }} />
    <Stack.Screen name="ChangePass" component={ChangePassPage} options={{ title: "Resetar Senha" }} />
  </Stack.Navigator>
);

const Navigation: React.FC = () => {
  const [isLoggin, setIsLoggin] = useState(true);
  const dispatch:any = useAppDispatch();
  const { types } = useSelector(selectGames);

  useEffect(() => {
    dispatch(fetchUserData());
    setTimeout(() => {
      setIsLoggin(false);
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(fetchGamesData());
  }, []);

  const { isLogged } = useSelector(selectUser);

  if (isLoggin) return <Loading message="Iniciando..." />;
  if (types.length === 0) return <Loading message="Iniciando..." />;

  return (
    <NavigationContainer>
      {!isLogged && <AuthStack />}
      {isLogged && <AuthenticatedStack />}
    </NavigationContainer>
  );
};

export default Navigation;
