import { TouchableOpacity } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { dateProfileStyles } from "../../screens/DateProfile/dateProfile.styles";

// 👇 components
import MyText from "../Global/MyText/MyText";

export default function InterestItem({
  title,
  size,
}: {
  title: string;
  size?: "big" | "small";
}) {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={1}
      style={[
        dateProfileStyles.bottomBottomInterestItem,
        size === "small" && {
          paddingVertical: theme.sizes.appPadding * 0.3,
          paddingHorizontal: theme.sizes.appPadding * 0.8,
        },
      ]}
    >
      <MyText
        style={[
          dateProfileStyles.bottomBottomInterestItemTile,
          size === "small" && { fontSize: theme.sizes.title_fontSize * 0.55 },
        ]}
      >
        {title || "interest"}
      </MyText>
    </TouchableOpacity>
  );
}
