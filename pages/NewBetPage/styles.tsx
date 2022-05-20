import styled from "styled-components/native";
import { GlobalColors } from "../../shared/utils/colors";

export const ContainerFilters = styled.View<{ width: number }>`
  width: ${(p) => p.width}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6px;
`;

export const MaxNumberText = styled.Text`
  text-align: center;
  color: red;
`;

export const ManageButtonsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CompletePressable = styled.Pressable<{ isCarrinho?: boolean }>`
  margin: 10px;
  width: 110px;
  min-height: 25px;
  border-radius: 15px;
  border-width: 1px;
  background-color: ${(p) => p.isCarrinho && GlobalColors.green200};
  border-color: ${GlobalColors.green200};
  justify-content: center;
`;

export const CompleteText = styled.Text<{ isCarrinho?: boolean }>`
  text-align: center;
  font-weight: bold;
  color: ${(p) => (p.isCarrinho ? "#fff" : GlobalColors.green200)};
`;
