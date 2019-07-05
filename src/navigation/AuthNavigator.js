import { createStackNavigator } from "react-navigation";
import Login from "../screens/Login";

const AuthNavigator = createStackNavigator({
  Login: Login
});

export default AuthNavigator;
