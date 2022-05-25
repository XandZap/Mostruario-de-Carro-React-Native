import styled from "styled-components/native";
import { GlobalColors } from "../../shared/utils";

export const ButtonPressable = styled.Pressable`
  
`;

export const ButtonText = styled.Text`
text-align: center;
  color: ${GlobalColors.green300};
`;

export const BackButtonPressable = styled.Pressable`
  align-items: center;
  padding: 10px;
`;

export const BackButtonText = styled.Text`
  color: ${GlobalColors.grey800};
`;

export const ButtonForgetPressable = styled.Pressable`
  margin-top: 30px;
`;

export const ButtonForgetText = styled.Text`
  text-align: right;
  color: #c1c1c1;
`;

export const ButtonGreenText = styled.Text`
  color: ${GlobalColors.green300};
`;


export const FormContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const CardForm = styled.View`
  background-color: white;
  border-radius: 15px;
  padding: 25px;
  min-width: 80%;
`;

export const FormScrollView = styled.ScrollView`
  flex: 1;
`;

export const FormKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const FormView = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;
