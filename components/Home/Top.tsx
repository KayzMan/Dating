import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableRipple } from "react-native-paper";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { homeStyles } from "../../screens/Home/home.styles";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

// 👇 components
import MyText from "../Global/MyText/MyText";

export default function Top() {
  return (
    <View style={homeStyles.topContainer}>
      {/* 👇 left */}
      <View style={homeStyles.topLeft}>
        <MaterialCommunityIcons
          {...common_icon_props}
          name="lightning-bolt-circle"
          size={theme.sizes.icon * 1.4}
        />

        <View style={homeStyles.topLeft_detail}>
          <MyText fontWeight="cantarellBold" style={homeStyles.topLeft_bigText}>
            Upgrade to Premium
          </MyText>
          <MyText style={homeStyles.topLeft_smallText}>
            Your date is waiting!
          </MyText>
        </View>
      </View>

      {/* 👇 right */}
      <TouchableRipple
        onPress={() => {}}
        rippleColor={theme.colors.primary_faded}
        style={homeStyles.topRight}
      >
        <MaterialCommunityIcons
          {...common_icon_props}
          name="account-cog-outline"
        />
      </TouchableRipple>
    </View>
  );
}
