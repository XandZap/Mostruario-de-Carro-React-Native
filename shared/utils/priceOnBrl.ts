import { Platform } from "react-native";

export function priceOnBrl(price: number) {
  return Platform.OS === "android"
    ? "R$ " + price.toFixed(2).replace('.',',')
    : price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
