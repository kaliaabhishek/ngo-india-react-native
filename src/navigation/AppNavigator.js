import { createStackNavigator } from "react-navigation";
import NgoList from "../screens/NgoList";
import AddNgo from "../screens/AddNgo";
import Ngo from "../screens/Ngo";

const AppNavigator = createStackNavigator(
  {
    NgoList: NgoList,
    AddNgo: AddNgo,
    Ngo: Ngo
  },
  {
    initialRouteName: "NgoList"
  }
);

export default AppNavigator;
