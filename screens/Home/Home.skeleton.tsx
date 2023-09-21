import React, { useCallback } from "react";
import { useWindowDimensions, View } from "react-native";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { homeSkeletonStyles } from "./homeSkeleton.styes";

// 👇 utilities
import {
  isExtraLargeDevice,
  isGreaterThanExtraLarge,
  isLargeDevice,
} from "../../utilities/styles.utility";

// 👇 components
import CardSkeleton from "../../skeletons/CardSkeleton";
import ContainerView from "../../components/Global/ContainerView/ContainerView";

export default function HomeSkeleton() {
  const { width, height } = useWindowDimensions();

  const getBar = useCallback(() => {
    if (
      isLargeDevice(width) ||
      isExtraLargeDevice(width) ||
      isGreaterThanExtraLarge(width)
    )
      return <CardSkeleton width={width / 2.1} />;
    else return <CardSkeleton width={width / 1.1} />;
  }, [width, height]);

  const getMiddleBox = useCallback(() => {
    if (
      isLargeDevice(width) ||
      isExtraLargeDevice(width) ||
      isGreaterThanExtraLarge(width)
    )
      return <CardSkeleton height={height / 1.5} width={width / 2.1} />;
    else return <CardSkeleton height={height / 1.5} width={width / 1.1} />;
  }, [width, height]);

  return (
    <ContainerView>
      <View style={homeSkeletonStyles.container}>
        {/* 👇 top */}
        {getBar()}

        {/* 👇 spacer */}
        <View style={{ marginBottom: theme.sizes.appPadding }} />

        {/* 👇 middle */}
        {getMiddleBox()}

        {/* 👇 spacer */}
        <View style={{ marginBottom: theme.sizes.appPadding }} />

        {/* 👇 bottom */}
        {getBar()}
      </View>
    </ContainerView>
  );
}
