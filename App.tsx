import { StatusBar } from "expo-status-bar";
import store from "./redux/store";
import { Provider } from "react-redux";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="dark" />
        <Navigation />
      </Provider>
    </>
  );
}
