import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import { useFonts } from "expo-font";
import { MyGlobalContext } from "./context/MyGlobalContext";

// 👇 theme
import { theme } from "./theme";

// 👇 screens
import Navigator from "./navigation/Navigator";

// 👇 controllers
import { loadProfiles } from "./screens/Home/home.controller";

export default function App() {
  const [Cantarell_FontLoaded] = useFonts({
    cantarell: require("./assets/fonts/Cantarell/Cantarell-Regular.ttf"),
    cantarellItalic: require("./assets/fonts/Cantarell/Cantarell-Italic.ttf"),
    cantarellBold: require("./assets/fonts/Cantarell/Cantarell-Bold.ttf"),
    cantarellBoldItalic: require("./assets/fonts/Cantarell/Cantarell-BoldItalic.ttf"),
  });

  // 👇 configure the theme
  const temp_theme = useTheme();
  temp_theme.colors.primary = theme.colors.primary;
  temp_theme.colors.secondaryContainer = "transparent";

  return (
    <MyGlobalContext.Provider
      value={{ Cantarell_FontLoaded, profiles: loadProfiles() }}
    >
      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="default" />
          <Navigator />
        </SafeAreaView>
      </PaperProvider>
    </MyGlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: theme.colors.lightContainerBackground,
  },
});
