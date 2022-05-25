import styled from "styled-components/native";
import { GlobalColors } from "../../shared/utils";

type props = any;

export const ViewRecent = styled.View`
  flex: 1;
  align-items: center;
`;

export const RecentBetView = styled.View<props>`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  height: 50px;
  justify-content: center;
`;

export const BetContainer = styled.View<props>`
  background-color: white;
  flex-direction: row;
  margin-top: 5px;
`;

export const Linha = styled.View<props>`
  padding: 2px;
  background-color: ${(p) => p.color};
  border-radius: 1px;
  margin-right: 5px;
  height: 100%;
`;

export const ContainerInterno = styled.View<{ width: number }>`
  max-width: 95%;
  min-height: 70px;
  justify-content: center;
`;

export const TextGameType = styled.Text<props>`
  color: ${(p) => p.color};
  font-size: 16px;
`;

export const TextInfo = styled.Text`
  color: ${GlobalColors.grey200};
  flex-wrap: wrap;
  margin-top: 3px;
  font-size: 16px;
`;

export const TextFilter = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${GlobalColors.grey200};
`;

export const PressableFilter = styled.Pressable`
  justify-content: center;
  margin-top: 20px;
  min-width: 70px;
  min-height: 30px;
  background-color: white;
  border-radius: 15px;
  padding: 5px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  overflow: hidden;
  elevation: 4;
`;

export const AlertRecentBetText = styled.Text`
  text-align: center;
  color: ${GlobalColors.grey800};
  font-weight: 400;
  font-style: italic;
  font-size: 24px;
`