import { createStackNavigator } from "react-navigation";
import NgoList from "../screens/NgoList";

const AppNavigator = createStackNavigator(
  {
    NgoList: NgoList
  },
  {
    initialRouteName: "NgoList"
  }
);

export default AppNavigator;
