import TitleScreen from "../TitleScreen";
import { CardForm, FormContainer, FormKeyboardAvoidingView, FormScrollView, FormView } from "./Styles";

const Form: React.FC = ({ children }) => {
  return (
    <>
      <FormScrollView>
        <FormKeyboardAvoidingView behavior="padding">
          <FormView>
            <TitleScreen />
            <FormContainer>
              <CardForm>{children}</CardForm>
            </FormContainer>
          </FormView>
        </FormKeyboardAvoidingView>
      </FormScrollView>
    </>
  );
};

export default Form;
