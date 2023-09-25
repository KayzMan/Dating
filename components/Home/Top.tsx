import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableRipple } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { homeStyles } from "../../screens/Home/home.styles";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

// 👇 models
import { mainNavigationProps } from "../../navigation/mainNavigator.models";

// 👇 components
import MyText from "../Global/MyText/MyText";

export default function Top() {
  const navigation = useNavigation<NavigationProp<mainNavigationProps>>();

  return (
    <TouchableRipple
      onPress={() => {
        navigation.navigate("yourProfileScreen");
      }}
      style={homeStyles.topContainer}
      rippleColor={theme.colors.primary_faded}
    >
      <>
        <View style={homeStyles.topLeft}>
          <MaterialCommunityIcons
            {...common_icon_props}
            name="lightning-bolt-circle"
            size={theme.sizes.icon * 1.4}
          />

          <View style={homeStyles.topLeft_detail}>
            <MyText
              fontWeight="cantarellBold"
              style={homeStyles.topLeft_bigText}
            >
              Upgrade to Premium
            </MyText>
            <MyText style={homeStyles.topLeft_smallText}>
              Your date is waiting!
            </MyText>
          </View>
        </View>

        {/* 👇 right */}
        <TouchableRipple
          onPress={() => {
            navigation.navigate("yourProfileScreen");
          }}
          rippleColor={theme.colors.primary_faded}
          style={homeStyles.topRight}
        >
          <MaterialCommunityIcons
            {...common_icon_props}
            name="account-cog-outline"
          />
        </TouchableRipple>
      </>
    </TouchableRipple>
  );
}
