import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

export const homeSkeletonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.sizes.appPadding,
    alignSelf: "center",
  },
});
