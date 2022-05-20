import styled from "styled-components/native";

import React from "react";
import TitleScreen from "../TitleScreen";
import { KeyboardAvoidingView, ScrollView, StyleSheet, useWindowDimensions, View } from "react-native";

const FormContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

const CardForm = styled.View`
  background-color: white;
  border-radius: 15px;
  padding: 25px;
  min-width: 80%;
`;

const Form: React.FC = ({ children }) => {
  return (
    <>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="padding">
          <View style={styles.rootContainer}>
            <TitleScreen />
            <FormContainer>
              <CardForm>{children}</CardForm>
            </FormContainer>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
