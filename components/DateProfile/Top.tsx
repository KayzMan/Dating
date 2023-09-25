import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableRipple } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { dateProfileStyles } from "../../screens/DateProfile/dateProfile.styles";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

// 👇 models
import { mainNavigationProps } from "../../navigation/mainNavigator.models";

export default function Top() {
  const navigation = useNavigation<NavigationProp<mainNavigationProps>>();

  return (
    <View style={dateProfileStyles.topContainer}>
      <TouchableRipple
        style={dateProfileStyles.topIcon}
        rippleColor={theme.colors.primary_faded}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
      >
        <MaterialCommunityIcons {...common_icon_props} name="chevron-left" />
      </TouchableRipple>

      <TouchableRipple
        style={dateProfileStyles.topIcon}
        rippleColor={theme.colors.primary_faded}
        onPress={() => {
          navigation.navigate("chatScreen");
        }}
      >
        <MaterialCommunityIcons {...common_icon_props} name="chat-outline" />
      </TouchableRipple>
    </View>
  );
}
