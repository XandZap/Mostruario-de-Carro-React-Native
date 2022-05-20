import styled from "styled-components/native";
import { GlobalColors } from "../../shared";

export const Card = styled.View`
  width: 85%;
  height: 90%;
  padding: 10px;
  padding-top: 30px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid ${GlobalColors.grey80};
`;

export const CartCard = styled.View`
  width: 85%;
  height: 70%;
  padding: 10px;
  padding-top: 30px;
  background-color: white;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 1px solid ${GlobalColors.grey80};
  border-bottom: none;
`;
