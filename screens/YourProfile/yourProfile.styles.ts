import { Dimensions, StyleSheet } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 utilities
import {
  center_flexRow,
  center_flexRow_spaceApart,
} from "../../utilities/styles.utility";

const { width } = Dimensions.get("window");

export const yourProfileStyles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.sizes.appPadding * 2,
    width: width,
    maxWidth: 500,
    flex: 1,
  },
  topContent_container: {
    backgroundColor: theme.colors.gray_variableFade(0.05),
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.appPadding * 2,
    paddingVertical: theme.sizes.appPadding * 3,
  },
  topContent_Top: {
    ...center_flexRow,
  },
  topContent_TopRight: {
    marginLeft: theme.sizes.appPadding,
  },
  topContent_TopRightName: {
    fontSize: theme.sizes.title_fontSize * 0.6,
    marginBottom: theme.sizes.appPadding * 0.3,
  },
  topContent_TopRightDescription: {
    fontSize: theme.sizes.title_fontSize * 0.55,
    marginBottom: theme.sizes.appPadding * 0.3,
  },
  topContent_TopRightLocation: {
    fontSize: theme.sizes.title_fontSize * 0.55,
  },
  topContent_Interests: {
    marginVertical: theme.sizes.appPadding * 1,
  },
  topContent_about: {
    color: theme.colors.gray_variableFade(1),
    fontSize: theme.sizes.title_fontSize * 0.55,
  },
  dataItems: {
    marginTop: theme.sizes.appPadding * 2,
  },
  dataItem: {
    ...center_flexRow_spaceApart,
    backgroundColor: theme.colors.gray_variableFade(0.05),
    padding: theme.sizes.appPadding,
    borderRadius: theme.sizes.radius,
    paddingVertical: theme.sizes.appPadding * 1.3,
    marginBottom: theme.sizes.appPadding * 1.5,
  },
  dataItemLeft: {
    ...center_flexRow,
  },
  dataItemLeftText: {
    marginLeft: theme.sizes.appPadding,
  },
});
