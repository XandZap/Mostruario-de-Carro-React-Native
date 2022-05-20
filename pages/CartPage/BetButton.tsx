import { initialCartArray, removeFromCart } from "../../redux/cart/cart.slice";
import { numberPad, priceOnBrl } from "../../shared";
import {
  BetButtonContainer,
  BetButtonNumbers,
  BetButtonType,
  BetButtonValue,
  BetButtonView,
  PressableTrash,
  TextTrash,
} from "./Styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";

interface props {
  item: initialCartArray;
}

interface trashProps {
  onPress: () => void;
}

const TrashButton: React.FC<trashProps> = ({ onPress }) => {
  return (
    <PressableTrash onPress={onPress}>
      <TextTrash>
        <Ionicons name="trash-outline" color="#888888" size={20} />
      </TextTrash>
    </PressableTrash>
  );
};

const BetButton: React.FC<props> = ({ item }) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(
      removeFromCart({
        betId: item.id,
        price: item.price,
      })
    );
  };

  const handleTrash = () => {
    Alert.alert(
      "Excluir aposta",
      `Deseja excluir essa aposta?\n${numberPad(item.choosen_numbers)}\n${item.type.type}`,
      [
        { text: "Excluir", style: "destructive", onPress: removeCartItem },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };
  return (
    <BetButtonContainer>
      <TrashButton onPress={handleTrash} />
      <BetButtonView color={item.type.color}>
        <BetButtonNumbers>{numberPad(item.choosen_numbers)}</BetButtonNumbers>
        <BetButtonType color={item.type.color}>
          {item.type.type} <BetButtonValue>{priceOnBrl(item.price)}</BetButtonValue>
        </BetButtonType>
      </BetButtonView>
    </BetButtonContainer>
  );
};

export default BetButton;
