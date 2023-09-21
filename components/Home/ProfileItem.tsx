import { View, useWindowDimensions } from "react-native";
import React, { useCallback } from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { homeStyles } from "../../screens/Home/home.styles";

// 👇 models
import { iProfileItem } from "./ProfileItem/profileItem.model";

// 👇 utilities
import {
  isExtraLargeDevice,
  isExtraSmallDevice,
  isGreaterThanExtraLarge,
  isLargeDevice,
  isMediumDevice,
  isSmallDevice,
} from "../../utilities/styles.utility";

// 👇 components
import Profile from "./ProfileItem/Profile";

export default function ProfileItem(item: iProfileItem) {
  const { width, height } = useWindowDimensions();

  const isBigger =
    isLargeDevice(width) ||
    isExtraLargeDevice(width) ||
    isGreaterThanExtraLarge(width);

  const getWidth = useCallback(() => {
    if (isExtraSmallDevice(width)) return width - 20;
    if (isSmallDevice(width)) return width - 20;
    if (isMediumDevice(width)) return width - 30;
    if (isLargeDevice(width)) return width - 250;
    if (isExtraLargeDevice(width)) return width - 300;
    if (isGreaterThanExtraLarge(width)) return width - 130;
  }, [width]);

  return (
    <View
      style={[
        homeStyles.profileItem,
        {
          width: getWidth(),
          // marginLeft: item.id === 1 ? 0 : theme.sizes.appPadding * 2,
        },
      ]}
    >
      <Profile {...item} />
    </View>
  );
}
