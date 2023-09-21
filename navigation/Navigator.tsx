import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 👇 initialize the main stack navigator!
const Stack = createNativeStackNavigator();

// 👇 utilities
import { get_common_mainStackOptions } from "../utilities/props.utility";

// 👇 screens
import OnBoarding from "../screens/OnBoarding/OnBoarding";
import Home from "../screens/Home/Home";

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={get_common_mainStackOptions()}>
        <Stack.Screen name="OnBoardingScreen" component={OnBoarding} />
        <Stack.Screen name="homeScreen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
