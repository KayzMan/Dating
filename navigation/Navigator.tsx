import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 👇 initialize the main stack navigator!
const Stack = createNativeStackNavigator();

// 👇 utilities
import { get_common_mainStackOptions } from "../utilities/props.utility";

// 👇 screens
import OnBoarding from "../screens/OnBoarding/OnBoarding";
import Home from "../screens/Home/Home";
import DateProfileDetail from "../screens/DateProfile/DateProfileDetail";
import LovedDatingProfile from "../screens/LovedDateProfile/LovedDatingProfile";
import Chat from "../screens/Chat/Chat";
import YourProfile from "../screens/YourProfile/YourProfile";

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={get_common_mainStackOptions()}>
        <Stack.Screen name="OnBoardingScreen" component={OnBoarding} />
        <Stack.Screen name="homeScreen" component={Home} />
        <Stack.Screen name="dateProfileScreen" component={DateProfileDetail} />
        <Stack.Screen
          name="lovedDatingProfileScreen"
          component={LovedDatingProfile}
        />
        <Stack.Screen name="chatScreen" component={Chat} />
        <Stack.Screen name="yourProfileScreen" component={YourProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
