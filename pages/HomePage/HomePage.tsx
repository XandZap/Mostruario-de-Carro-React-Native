import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, useWindowDimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigatorParamsList } from "../../shared/utils/types";

import { selectGames, selectRecentBet } from "../../redux/store";
import { fetchFilteredBetsData, fetchRecentBetData } from "../../redux/recentBets/recentBets.actions";

import AccountButton from "../../components/UI/AccountButton";
import ConfirmButton from "../../components/UI/ConfirmButton";
import Filters from "../../components/Games/Filters";
import { ButtonFilters } from "./ButtonFilter";
import ListRecentBets from "./ListRecentBets";
import { AlertRecentBetText, RecentBetView, ViewRecent } from "./styles";
import ContainerSafeAreaView from "../../components/SafeArea/ContainerSafeAreaView";

interface props {
  navigation: NativeStackNavigationProp<NavigatorParamsList, "Home">;
}

const HomePage: React.FC<props> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const games = useSelector(selectGames);
  const recentBets = useSelector(selectRecentBet);
  const dispatch: any = useDispatch();
  const [isFilters, setIsFilters] = useState(false);
  const [checkedGames, setCheckedGames] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchRecentBetData());
  }, [dispatch]);

  const headerButtonRigth = () => {
    navigation.navigate("NewBet");
  };
  const headerButtonLeft = () => {
    navigation.navigate("Account");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ConfirmButton onPress={headerButtonRigth} header={true}>
          Nova Aposta
        </ConfirmButton>
      ),
      headerLeft: () => <AccountButton onPress={headerButtonLeft}>Conta</AccountButton>,
    });
  });

  const handleFilters = () => {
    if(isFilters) setCheckedGames([])
    setIsFilters(!isFilters);
  };

  const handleCheck = (id: number) => {
    const gamePressed = games.types.find((game) => game.id === id);
    if (gamePressed) {
      if (checkedGames.includes(gamePressed.type)) {
        checkedGames.splice(checkedGames.indexOf(gamePressed.type), 1);
      } else checkedGames.push(gamePressed.type);
      if (checkedGames.length > 0) dispatch(fetchFilteredBetsData(checkedGames));
      else dispatch(fetchRecentBetData());
    }
  };

  return (
    <ContainerSafeAreaView>
      <ViewRecent>
        <ButtonFilters onPress={handleFilters}>Filtros</ButtonFilters>
        {isFilters && <Filters games={games.types} onCheck={handleCheck} />}
        <RecentBetView windowWidth={width}>
          {recentBets.length > 0 && <ListRecentBets recentBets={recentBets} games={games.types} />}
          {recentBets.length === 0 && <AlertRecentBetText>Nenhuma aposta recente encontrada</AlertRecentBetText>}
        </RecentBetView>
      </ViewRecent>
    </ContainerSafeAreaView>
  );
};

export default HomePage;
