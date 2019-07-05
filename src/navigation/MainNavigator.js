import { createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from "../screens/AuthLoading";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const MainNavigator = createSwitchNavigator(
  {
    AuthLoadingScreen: AuthLoadingScreen,
    App: AppNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "AuthLoadingScreen"
  }
);

export default MainNavigator;
