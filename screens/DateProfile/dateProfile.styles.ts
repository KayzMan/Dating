import { Dimensions, StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
} from "../../utilities/styles.utility";

const { height, width } = Dimensions.get("window");

export const dateProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.sizes.appPadding,
    paddingHorizontal: theme.sizes.appPadding * 2,
    width: width,
    maxWidth: 500,
  },
  topContainer: {
    ...center_flexRow_spaceApart,
    marginBottom: theme.sizes.appPadding * 2,
  },
  topIcon: {
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.primary_variableFade(0.1),
    padding: theme.sizes.appPadding * 0.6,
    paddingVertical: theme.sizes.appPadding * 0.4,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  avatar: {
    borderRadius: theme.sizes.radius,
    objectFit: "cover",
  },
  avatarContainer: {
    width: "100%",
    height: height / 2,
    marginBottom: theme.sizes.appPadding * 2,
  },
  bottomContainer: {
    marginBottom: theme.sizes.appPadding * 5,
  },
  bottomTitle: {
    marginBottom: theme.sizes.appPadding,
    fontSize: theme.sizes.title_fontSize * 0.6,
  },
  bottomTop: {
    ...center_flexRow_spaceApart,
    alignItems: "flex-start",
    marginBottom: theme.sizes.appPadding * 2,
  },
  bottomTopLeft: {},
  bottomTopLeftName: {
    fontSize: theme.sizes.title_fontSize * 0.75,
  },
  bottomTopLeftDescription: {
    color: theme.colors.gray_variableFade(1),
    fontSize: theme.sizes.title_fontSize * 0.56,
  },
  bottomTopRight: {
    ...center_flexRow,
  },
  bottomTopRightIcon: {
    marginLeft: theme.sizes.appPadding,
  },
  bottomMiddle: {
    marginBottom: theme.sizes.appPadding * 2,
  },
  bottomMiddleAbout: {
    color: theme.colors.gray_variableFade(1),
    fontSize: theme.sizes.title_fontSize * 0.56,
  },
  bottomBottom: {},
  bottomBottomInterestItems: {
    ...center_flexRow,
    flexWrap: "wrap",
  },
  bottomBottomInterestItem: {
    marginRight: theme.sizes.appPadding * 1,
    marginBottom: theme.sizes.appPadding * 1.5,
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.primary_variableFade(0.1),
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingVertical: theme.sizes.appPadding * 0.4,
    paddingHorizontal: theme.sizes.appPadding,
  },
  bottomBottomInterestItemTile: {
    color: theme.colors.primary,
  },
});
