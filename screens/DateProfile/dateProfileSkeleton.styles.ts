import { Dimensions, StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

const { width } = Dimensions.get("window");

export const dateProfileSkeletonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: theme.sizes.appPadding,
    width: width,
    maxWidth: 500,
  },
});
