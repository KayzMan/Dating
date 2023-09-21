import {
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  useWindowDimensions,
} from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

export default function ContainerView({ children }: ScrollViewProps) {
  const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.lightContainerBackground,
      // padding: theme.sizes.appPadding,
    },
    containerWeb: {
      flex: 1,
      // padding: theme.sizes.appPadding,
      maxWidth: 800,
      minWidth: 700,
      marginHorizontal: "auto",
      // width: "80%",
      // backgroundColor: "red",
    },
  });
  return (
    <ScrollView
      // style={[
      //   width >= 767 ? styles.containerWeb : styles.container,
      //   width >= 1200 && { minWidth: width },
      // ]}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}
