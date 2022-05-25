import styled from "styled-components/native";
import { GlobalColors } from "../../shared/utils";

export const AccountContainer = styled.View<{ height: number }>`
  align-items: center;
  justify-content: center;
  height: ${(p) => p.height * 0.7}px;
`;

export const TextInput = styled.TextInput`
  border: 1px solid ${GlobalColors.grey100};
  border-radius: 8px;
  min-width: 80%;
  padding: 10px;
  font-size: 18px;
  margin: 10px;
  color: ${GlobalColors.grey200};
`;

export const Text = styled.Text`
  color: ${GlobalColors.grey700};
  font-style: italic;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  margin-top: 60px;
  align-items: center;
  justify-content: center;
`;

export const ButtonConfirm = styled.Pressable`
  margin-top: 30px;
  min-height: 40px;
  padding: 10px;
  border: 2px solid ${GlobalColors.green300};
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  color: ${GlobalColors.green300};
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
`;

export const LogoutButton = styled.Pressable`
  
`
