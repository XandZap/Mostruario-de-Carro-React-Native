import { ActivityIndicator, FlatList, useWindowDimensions, View } from "react-native";
import { initialRecentBetsValue } from "../../redux/recentBets/recentBets.slice";
import { spaceOnString, priceOnBrl, dateOnString } from "../../shared";
import { GamesType } from "../../shared/interfaces/ListGamesInterfaces";
import { BetContainer, ContainerInterno, Linha, TextGameType, TextInfo } from "./styles";

interface props {
  recentBets: initialRecentBetsValue[] | undefined;
  games: GamesType[] | undefined;
}

const ListRecentBets: React.FC<props> = ({ games, recentBets }) => {
  const { width } = useWindowDimensions();

  if (!recentBets)
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator />
      </View>
    );
  return (
    <FlatList
      data={recentBets}
      renderItem={({ item }) => {
        let color = "#ffff";

        games &&
          games.forEach((value: GamesType) => {
            if (value.id === item.game_id) color = value.color;
          });
        const date = dateOnString(new Date(item.created_at));
        const priceBrl = priceOnBrl(item.price);
        const choosenNumbers = spaceOnString(item.choosen_numbers);
        return (
          <BetContainer color={color}>
            <Linha color={color}></Linha>
            <ContainerInterno width={width}>
              <TextInfo style={{ fontWeight: "bold" }}>{choosenNumbers}</TextInfo>
              <TextInfo>
                {date} ({priceBrl})
              </TextInfo>
              <TextGameType color={color}>{item.type.type}</TextGameType>
            </ContainerInterno>
          </BetContainer>
        );
      }}
    />
  );
};

export default ListRecentBets;
