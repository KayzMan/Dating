import { Dimensions, StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
} from "../../utilities/styles.utility";

const { height, width } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: theme.sizes.appPadding,
    paddingVertical: theme.sizes.appPadding,
    // paddingBottom: theme.sizes.appPadding * 5,
    // minHeight: height,
  },
  topContainer: {
    ...center_flexRow_spaceApart,
    marginBottom: theme.sizes.appPadding * 2,
    backgroundColor: theme.colors.primary_variableFade(0.1),
    padding: theme.sizes.appPadding,
    paddingVertical: theme.sizes.appPadding * 1.5,
    borderRadius: theme.sizes.radius,
    marginHorizontal: theme.sizes.appPadding * 2,
  },
  topLeft: {
    ...center_flexRow,
  },
  topLeft_icon: {},
  topLeft_detail: {
    marginLeft: theme.sizes.appPadding,
  },
  topLeft_bigText: {},
  topLeft_smallText: {},
  topRight: {
    backgroundColor: theme.colors.primary_variableFade(0.15),
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.appPadding * 0.8,
  },
  profileContainer: {
    flex: 1,
    width: width,
    maxWidth: 500,
    // backgroundColor: "red",
    // marginBottom: theme.sizes.appPadding * 1,
  },
  profileItem: {
    flex: 1,
  },
  profileLinearGradient: {
    position: "absolute",
    left: theme.sizes.appPadding * 2,
    right: theme.sizes.appPadding * 2,
    bottom: 0,
    top: 0,
    borderRadius: theme.sizes.radius * 2,
  },
  profileAvatar: {
    borderRadius: theme.sizes.radius * 2,
    objectFit: "cover",
    resizeMode: "cover",
    marginHorizontal: theme.sizes.appPadding * 2,
  },
  profileAvatarContainer: {
    width: "100%",
  },
  profileBottom: {
    position: "absolute",
    bottom: theme.sizes.appPadding * 2,
    left: theme.sizes.appPadding * 2,
  },
  profileSocialLinks: {
    ...center_flexRow,
    marginBottom: theme.sizes.appPadding,
  },
  profileUserNameAndAge: {
    color: theme.colors.darker_white,
    fontSize: theme.sizes.title_fontSize * 0.9,
  },
  profileDescription: {
    color: theme.colors.title_fadedColor,
    fontSize: theme.sizes.title_fontSize * 0.6,
  },
  actionButtonsContainer: {
    ...center_flexRow_spaceApart,
    justifyContent: "space-around",
    marginTop: theme.sizes.appPadding * 5,
  },
  actionButton: {
    // marginTop: theme.sizes.appPadding * 5,
    borderRadius: theme.sizes.radius * 3000,
    padding: theme.sizes.appPadding * 1.5,
    width: 56,
    height: 56,
  },
  middle_actionButton: {
    marginTop: 0,
    top: -30,
  },
});
