import { useGlobalContext } from "../../context/MyGlobalContext";
import { View } from "react-native";
import React, { useEffect, useState } from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { dateProfileStyles } from "./dateProfile.styles";

// 👇 components
import ContainerView from "../../components/Global/ContainerView/ContainerView";
import DateProfileSkeleton from "./DateProfile.skeleton";
import Top from "../../components/DateProfile/Top";
import ProfileAvatar from "../../components/DateProfile/ProfileAvatar";
import Bottom from "../../components/DateProfile/Bottom";

export default function DateProfileDetail() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { selectedProfile } = useGlobalContext();

  // 👇 component did mount.
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, theme.sizes.skeletonTime);
  }, []);

  return isLoading ? (
    <DateProfileSkeleton />
  ) : (
    <ContainerView>
      <View style={dateProfileStyles.container}>
        <Top />
        <ProfileAvatar />
        <Bottom />
      </View>
    </ContainerView>
  );
}
