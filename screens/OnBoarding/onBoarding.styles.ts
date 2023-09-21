import { StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

export const onBoardingStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: theme.sizes.appPadding * 2,
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  avatar: {},
  avatarContainer: {
    alignSelf: "center",
    width: 400,
    height: 400,
  },
  bottom: {
    marginTop: theme.sizes.appPadding,
  },
  bottomText: {
    textAlign: "center",
    fontSize: theme.sizes.title_fontSize,
  },
  bottomBtn: {
    backgroundColor: theme.colors.primary_variableFade(0.8),
    padding: theme.sizes.appPadding * 1,
    paddingHorizontal: theme.sizes.appPadding * 2,
    borderRadius: theme.sizes.radius,
    marginTop: theme.sizes.appPadding * 2,
  },
  bottomBtnText: {
    fontSize: theme.sizes.title_fontSize,
    color: theme.colors.white,
    width: "100%",
    textAlign: "center",
  },
});
