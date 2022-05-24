import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, useWindowDimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../../redux/cart/cart.slice";
import { fetchRecentBetData } from "../../redux/recentBets/recentBets.actions";
import { selectCart } from "../../redux/store";

import { NavigatorParamsList, priceOnBrl } from "../../shared";
import { betsServices } from "../../shared/services";

import { SaveButton } from "./SaveButton";
import { CartCard } from "../../components/UI";
import BetButton from "./BetButton";

import {
  AlertText,
  FlatList,
  MinValueText,
  TitleText,
  TotalContainer,
  TotalOnCart,
  TotalValue,
  ViewContainer,
} from "./Styles";

const { saveNewBet } = betsServices();

interface CartProps {
  navigation: NativeStackNavigationProp<NavigatorParamsList, "Cart">;
}

const CartPage: React.FC<CartProps> = ({ navigation }) => {
  const { jogos, min_cart_value, valorTotal } = useSelector(selectCart);
  const { height } = useWindowDimensions();
  const [isMinValueMessage, setIsMinValueMessage] = useState(false);
  const dispatch: any = useDispatch();

  const _renderItem = ({ item }: { item: any }) => {
    return <BetButton item={item} />;
  };

  const handleSave = async () => {
    if (min_cart_value <= valorTotal) {
      try {
        const gameToSave = jogos.map((value) => {
          return { numbers: value.choosen_numbers.split(", ").map(Number), game_id: value.game_id };
        });

        await saveNewBet({ games: gameToSave });

        dispatch(fetchRecentBetData());
        dispatch(clearCart());
        Alert.alert("Apostas salvas", "Apostas salvas com sucesso", [
          { text: "ok", onPress: () => navigation.navigate("Home") },
        ]);
      } catch (error) {
        Alert.alert("ERRO", "Erro ao salvar jogos");
      }
    } else {
      setIsMinValueMessage(true);
      setTimeout(() => {
        setIsMinValueMessage(false);
      }, 3000);
    }
  };

  const minValueMessage = (
    <MinValueText>{"Valor mínimo para salvar jogo é " + priceOnBrl(min_cart_value)}</MinValueText>
  );

  return (
    <ViewContainer style={{ height: height }}>
      <CartCard style={{ borderBottomWidth: 0 }}>
        <TitleText>carrinho</TitleText>
        {jogos.length > 0 && (
          <FlatList data={jogos} renderItem={_renderItem} keyExtractor={(item: any) => item.id}></FlatList>
        )}
        {jogos.length === 0 && <AlertText>Adicione apostas ao carrinho</AlertText>}
      </CartCard>
      <TotalContainer style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        {isMinValueMessage && minValueMessage}
        <TotalValue>
          <TotalOnCart>Total no Carrinho: </TotalOnCart>
          {priceOnBrl(valorTotal)}
        </TotalValue>
      </TotalContainer>
      <SaveButton onPress={handleSave} />
    </ViewContainer>
  );
};

export default CartPage;
