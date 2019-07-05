import { createStackNavigator } from "react-navigation";
import NgoList from "../screens/NgoList";
import AddNgo from "../screens/AddNgo";
import Ngo from "../screens/Ngo";
import Events from "../screens/Events";

const AppNavigator = createStackNavigator(
  {
    NgoList: NgoList,
    AddNgo: AddNgo,
    Ngo: Ngo,
    Events: Events
  },
  {
    initialRouteName: "NgoList"
  }
);

export default AppNavigator;
