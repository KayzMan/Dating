import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
} from "../../utilities/styles.utility";

const { width, height } = Dimensions.get("window");

export const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    maxWidth: 500,
    backgroundColor: theme.colors.white,
    paddingTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight
          ? StatusBar.currentHeight * 1.5
          : theme.sizes.appPadding * 2
        : 0,
  },
  headerContainer: {
    top: -1.4,
    width: "100%",
    paddingBottom: theme.sizes.appPadding * 2.5,
  },
  detailContainer: {
    ...center_flexRow,
    width: "100%",
    maxWidth: "100%",
  },
  detailLeft: {},
  detailRight: {
    marginLeft: theme.sizes.appPadding,
  },
  header_nameAndAge: {
    fontSize: theme.sizes.title_fontSize * 0.6,
    marginBottom: theme.sizes.appPadding * 0.2,
  },
  header_description: {
    fontSize: theme.sizes.title_fontSize * 0.5,
    color: theme.colors.gray_variableFade(0.8),
  },
  chatsContainer: {
    flex: 1,
    padding: theme.sizes.appPadding,
    paddingVertical: theme.sizes.appPadding * 3,
    borderTopColor: theme.colors.gray_variableFade(0.05),
    borderTopWidth: 1,
  },
  chats_messageItem: {
    borderRadius: theme.sizes.radius * 1.2,
    padding: theme.sizes.appPadding,
    marginVertical: theme.sizes.appPadding * 0.6,
  },
  chats_messageItemText: {
    // color: "",
  },
  chats_systemMessage: {
    alignSelf: "center",
    textAlign: "center",
    marginVertical: theme.sizes.appPadding,
    fontSize: theme.sizes.title_fontSize * 0.5,
  },

  sendMessageContainer: {
    // position: "absolute",
    // bottom: 10,
    // left: 0,
    // right: 0,
    paddingHorizontal: theme.sizes.appPadding,
    backgroundColor: theme.colors.white,
    marginBottom: theme.sizes.appPadding * 1.6,
  },
  sendMessageWrapper: {
    ...center_flexRow_spaceApart,
    backgroundColor: theme.colors.gray_variableFade(0.05),
    borderRadius: theme.sizes.appPadding,
    paddingHorizontal: theme.sizes.appPadding,
  },
  sendMessageTextBox: {
    width: "90%",
    maxWidth: "90%",
  },
});
