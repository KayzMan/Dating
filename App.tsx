import { StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";

// 👇 screens
// import Navigator from "./navigation/Navigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <Text>Dating App</Text>
      {/* <Navigator /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
