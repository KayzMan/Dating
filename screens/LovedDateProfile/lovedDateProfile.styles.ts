import { Dimensions, StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_justifyCenter,
} from "../../utilities/styles.utility";

const { width, height } = Dimensions.get("window");

export const lovedDateProfileStyles = StyleSheet.create({
  container: {
    ...center_flexRow_justifyCenter,
    flexDirection: "column",
    alignItems: "stretch",
    minHeight: height,
    width: width,
    maxWidth: 500,
    paddingHorizontal: theme.sizes.appPadding * 2,
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.sizes.title_fontSize * 1.2,
    marginBottom: theme.sizes.appPadding * 2,
    alignSelf: "center",
  },
  avatarsContainer: {
    ...center_flexRow,
    marginBottom: theme.sizes.appPadding * 3,
    alignSelf: "center",
  },
  avatar: {
    borderRadius: theme.sizes.radius * 3000,
  },
  avatarContainer: {
    width: 100,
    height: 100,
  },
  description: {
    color: theme.colors.darker_white,
    alignSelf: "center",
    textAlign: "center",
  },
  buttonsContainer: {
    marginTop: theme.sizes.appPadding * 3,
    marginHorizontal: theme.sizes.appPadding * 2,
  },
  button: {
    paddingVertical: theme.sizes.appPadding * 0.4,
  },
  buttonContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.radius,
    marginTop: theme.sizes.appPadding * 2,
  },
  buttonText: {
    color: theme.colors.white,
  },
});
