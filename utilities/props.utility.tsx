import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import { useGlobalContext } from "../context/MyGlobalContext";

// 👇 theme
import { theme } from "../theme";

// 👇 utilities
import { center_flexRow } from "./styles.utility";

const { width } = Dimensions.get("screen");

export const get_common_mainStackOptions = () => {
  const { Cantarell_FontLoaded } = useGlobalContext();

  return {
    animation: "flip",
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTitleStyle: Cantarell_FontLoaded && {
      fontFamily: theme.font.cantarell,
    },
    headerTintColor: theme.colors.white,
    // headerTitleAlign: "center",
    statusBarColor: theme.colors.fadedBlack,
    statusBarStyle: "light",
    statusBarTranslucent: true,
    headerShown: false,
    headerShadowVisible: false,
  } as NativeStackNavigationOptions;
};

export const get_drawer_mainStackOptions = () => {
  const Cantarell_FontLoaded = true;

  return {
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTintColor: theme.colors.white,
    headerTitleStyle: Cantarell_FontLoaded && {
      fontFamily: theme.font.cantarell,
    },
  } as DrawerNavigationOptions;
};

export const common_icon_props = {
  size: theme.sizes.icon,
  color: theme.colors.primary,
};

export const common_text_input_props = {
  underlineColor: "transparent",
  underlineColorAndroid: "transparent",
  activeUnderlineColor: "transparent",
  activeOutlineColor: theme.colors.primary,
  cursorColor: theme.colors.primary,
  placeholderTextColor: theme.colors.gray,
  textColor: theme.colors.black,
  selectionColor: theme.colors.primary,
  theme: theme,
};

export const topTab_common_options: MaterialTopTabNavigationOptions = {
  tabBarActiveTintColor: theme.colors.white,
  tabBarInactiveTintColor: theme.colors.topTabsLabelInActiveColor,
  tabBarStyle: {
    backgroundColor: theme.colors.primary,
    elevation: 0,
  },
  tabBarLabelStyle: {
    // fontFamily: theme.font.PoppinsSemiBold,
    fontSize: theme.sizes.title_fontSize * 0.6,
    textTransform: "none",
    fontWeight: "bold",
  },
  tabBarIndicatorStyle: {
    backgroundColor: theme.colors.topTabsIndicatorColor,
  },
};
