import { TouchableOpacity } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { dateProfileStyles } from "../../screens/DateProfile/dateProfile.styles";

// 👇 components
import MyText from "../Global/MyText/MyText";

export default function InterestItem({ title }: { title: string }) {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={1}
      style={dateProfileStyles.bottomBottomInterestItem}
    >
      <MyText style={dateProfileStyles.bottomBottomInterestItemTile}>
        {title || "interest"}
      </MyText>
    </TouchableOpacity>
  );
}
