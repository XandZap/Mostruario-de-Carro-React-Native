import React from "react";
import { StyledFor, StyledText, StyledView, ViewFor } from "./styles";

const TitleScreen: React.FC = () => {
  return (
    <StyledView>
      <StyledText>O Melhor App</StyledText>
      <ViewFor>
        <StyledFor>para</StyledFor>
      </ViewFor>
      <StyledText>LOTERIA</StyledText>
    </StyledView>
  );
};

export default TitleScreen;
