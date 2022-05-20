import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";

import { selectCart, selectGames, selectUser } from "../../redux/store";
import { GameType } from "../../redux/games/interfaces";

import { ContainerFilters, ManageButtonsContainer, MaxNumberText } from "./styles";
import { NavigatorParamsList } from "../../shared/utils/types";
import { GlobalColors } from "../../shared";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import CartButton from "../../components/UI/CartButton";
import Loading from "../../components/UI/Loading";
import NewBetFilter from "../../components/Games/NewBetFilter";

import NumbersButton from "./NumbersButton";
import ManageGameButton from "./ManageGameButton";
import ContainerSafeAreaView from "../../components/SafeArea/ContainerSafeAreaView";
import { addToCart } from "../../redux/cart/cart.slice";

interface props {
  navigation: NativeStackNavigationProp<NavigatorParamsList, "NewBet">;
}

const NewBetPage: React.FC<props> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const { types } = useSelector(selectGames);
  const { user } = useSelector(selectUser);
  const { jogos } = useSelector(selectCart);
  const [gameType, setGameType] = useState<GameType>(types[0]);

  const [numbers, setNumbers] = useState<any[]>();
  const [numbersSelected, setNumbersSelected] = useState<number[]>([]);

  const [isMaxNumber, setIsMaxNumber] = useState(false);
  const [isMaxNumberToAddCart, setIsMaxNumberToAddCart] = useState(false);

  useEffect(() => {
    getNumbersButtons();
    setNumbersSelected([]);
  }, [gameType]);

  const headerButtonRigth = () => {
    navigation.navigate("Cart");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: gameType.type,
      headerTintColor: gameType.color,
      headerRight: () => <CartButton onPress={headerButtonRigth}>Carrinho</CartButton>,
    });
  }, [gameType]);

  const getNumbersButtons = () => {
    const auxNumbers: JSX.Element[] = [];
    for (let i = 1; i <= gameType.range; i++) {
      auxNumbers.push(
        <NumbersButton
          key={i}
          id={i}
          onPress={handleSelectedButtons}
          color={gameType.color}
          selectedArray={numbersSelected}
        >
          {i.toString().padStart(2, "0")}
        </NumbersButton>
      );
    }
    setNumbers(auxNumbers);
  };

  if (!gameType) return <Loading message="Iniciando apostas" />;

  const handleFilterGame = (id: number) => {
    setGameType(types[types.findIndex((value) => value.id === id)]);
    setNumbersSelected([]);
  };

  const handleSelectedButtons = (id: number) => {
    if (numbersSelected.length < gameType.max_number) {
      if (numbersSelected.includes(id)) {
        const AuxNumbersSelectedToExclude = numbersSelected;
        AuxNumbersSelectedToExclude.splice(numbersSelected.indexOf(id), 1);

        setNumbersSelected(AuxNumbersSelectedToExclude);
      } else {
        const AuxNumbersSelectedToInclude = numbersSelected;
        AuxNumbersSelectedToInclude.push(id);
        setNumbersSelected(AuxNumbersSelectedToInclude);
      }
    } else if (numbersSelected.length === gameType.max_number) {
      if (numbersSelected.includes(id)) {
        const AuxNumbersSelectedToExclude = numbersSelected;
        AuxNumbersSelectedToExclude.splice(numbersSelected.indexOf(id), 1);
        setNumbersSelected(AuxNumbersSelectedToExclude);
      } else {
        setIsMaxNumber(true);
        setTimeout(() => {
          setIsMaxNumber(false);
          return () => {
            setIsMaxNumber(true);
          };
        }, 2000);
      }
    }
    getNumbersButtons();
  };

  const handleCompleteGame = () => {
    if (numbersSelected.length < gameType.max_number) {
      const randomNumber = Math.floor(Math.random() * gameType.range) + 1;
      if (!numbersSelected.includes(randomNumber)) handleSelectedButtons(randomNumber);
      handleCompleteGame();
    }
  };

  const handleClearGame = () => {
    setNumbersSelected([]);
    getNumbersButtons();
  };

  const handleAddToCart = () => {
    if (numbersSelected.length === gameType.max_number) {
      let date = new Date();
      dispatch(
        addToCart({
          id: Math.floor(Math.random() * new Date().valueOf()),
          user_id: user.id,
          game_id: gameType.id,
          choosen_numbers: numbersSelected.sort((a, b) => a - b).join(", "),
          price: gameType.price,
          created_at: date.toString(),
          type: {
            id: gameType.id,
            type: gameType.type,
            color: gameType.color,
          },
        })
      );
      handleClearGame();
    } else {
      setIsMaxNumberToAddCart(true);
      setTimeout(() => {
        setIsMaxNumberToAddCart(false);
      }, 2000);
    }
  };

  useEffect(() => {
    getNumbersButtons();
  }, [numbersSelected, setNumbersSelected]);

  const maxNumberMessage = <MaxNumberText>Número máximo de numeros escolhidos</MaxNumberText>;
  const maxNumberToAddCartMessage = (
    <>
      <MaxNumberText>Quantidade mínima pra adicionar ao carrinho é {gameType.max_number}.</MaxNumberText>
      <MaxNumberText>
        Adicione mais {gameType.max_number - numbersSelected.length}{" "}
        {gameType.max_number - numbersSelected.length > 1 ? "números" : "número"}!
      </MaxNumberText>
    </>
  );

  return (
    <>
      <ScrollView>
        <ContainerSafeAreaView>
          <ContainerFilters width={width}>
            {types.map((value) => (
              <NewBetFilter key={value.id} selected={gameType} game={value} onPress={handleFilterGame} />
            ))}
          </ContainerFilters>
          <Text style={{ color: GlobalColors.grey200, marginHorizontal: 10 }}>{gameType.description}</Text>

          <ManageButtonsContainer>
            <ManageGameButton onPress={handleCompleteGame} text="Completar Jogo" />
            <ManageGameButton onPress={handleClearGame} text="Limpar Jogo" />
            <ManageGameButton onPress={handleAddToCart} text="Adicionar ao Carrinho" isCarrinho={true} />
            {isMaxNumberToAddCart && maxNumberToAddCartMessage}
          </ManageButtonsContainer>
          {isMaxNumber && maxNumberMessage}
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", margin: 10 }}>
            {numbers && numbers.map((element) => element)}
          </View>
        </ContainerSafeAreaView>
      </ScrollView>
    </>
  );
};

export default NewBetPage;
