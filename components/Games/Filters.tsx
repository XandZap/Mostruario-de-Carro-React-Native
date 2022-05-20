import BouncyCheckbox from "react-native-bouncy-checkbox";
import styled from "styled-components/native";
import { GamesType } from "../../shared/interfaces/ListGamesInterfaces";

const View = styled.View`
  margin: 5px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FlatList = styled.FlatList``;

interface props {
  games: GamesType[];
  onCheck: (id: number) => void;
}

const Filters: React.FC<props> = ({ games, onCheck }) => {
  return (
    <View>
      {games.map((game) => (
        <BouncyCheckbox
          key={game.id}
          text={game.type}
          fillColor={game.color}
          style={{ marginHorizontal: 10, marginTop: 5 }}
          textStyle={{
            textDecorationLine: "none",
            color: game.color,
          }}
          onPress={() => onCheck(game.id)}
        />
      ))}
    </View>
  );
};

export default Filters;
