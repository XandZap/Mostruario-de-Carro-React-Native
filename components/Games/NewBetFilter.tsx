import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { GameType } from "../../redux/games/interfaces";

const Pressable = styled.Pressable<{ color: string; selected: boolean }>`
  background-color: ${(p) => (p.selected ? p.color : "#FFFFFF")};
  border-color: ${(p) => p.color};
  border-width: 2px;
  min-width: 100px;
  padding: 3px;
  border-radius: 15px;
  margin: 5px;
  justify-content: center;
`;

const Text = styled.Text<{ color: string; selected: boolean }>`
  color: ${(p) => (p.selected ? "#FFFFFF" : p.color)};
  text-align: center;
`;

interface props {
  game: GameType;
  onPress: (id: number) => void;
  selected: GameType;
}

const NewBetFilter: React.FC<props> = ({ game, onPress, selected }) => {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (selected.id === game.id) setIsSelected(true);
    else setIsSelected(false);
  }, [selected]);

  return (
    <Pressable onPress={() => onPress(game.id)} color={game?.color} selected={isSelected} style={({pressed})=>pressed && {opacity: 0.5}}>
      <Text color={game.color} selected={isSelected}>
        {game.type}
      </Text>
    </Pressable>
  );
};

export default NewBetFilter;
