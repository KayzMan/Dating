import { View, useWindowDimensions } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { dateProfileSkeletonStyles } from "./dateProfileSkeleton.styles";

// 👇 components
import ContainerView from "../../components/Global/ContainerView/ContainerView";
import CardSkeleton from "../../skeletons/CardSkeleton";

export default function DateProfileSkeleton() {
  const { width } = useWindowDimensions();

  return (
    <ContainerView>
      <View style={dateProfileSkeletonStyles.container}>
        <CardSkeleton
          height={200}
          width={width - theme.sizes.appPadding * 20}
        />

        {/* 👇 spacer */}
        <View style={{ marginBottom: theme.sizes.appPadding * 1.5 }} />

        <CardSkeleton width={width - theme.sizes.appPadding * 5} />

        {/* 👇 spacer */}
        <View style={{ marginBottom: theme.sizes.appPadding * 1.5 }} />

        <CardSkeleton width={width - theme.sizes.appPadding * 5} height={100} />

        {/* 👇 spacer */}
        <View style={{ marginBottom: theme.sizes.appPadding * 1.5 }} />

        <CardSkeleton width={width - theme.sizes.appPadding * 5} height={150} />
      </View>
    </ContainerView>
  );
}
