import { useGlobalContext } from "../../../context/MyGlobalContext";
import { View, useWindowDimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../../theme";

//  👇 styles
import { homeStyles } from "../../../screens/Home/home.styles";

// 👇 utilities
import { common_icon_props } from "../../../utilities/props.utility";

// 👇 models
import { iProfileItem } from "./profileItem.model";
import { mainNavigationProps } from "../../../navigation/mainNavigator.models";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function Profile({
  avatar,
  nameAndAge,
  description,
}: iProfileItem) {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<mainNavigationProps>>();
  const getWidth = (_width: number): "100%" => "100%";

  const { profiles, setSelectedProfile, currentIndex } = useGlobalContext();

  return (
    <TouchableOpacity
      activeOpacity={theme.sizes.touchableOpacity_high}
      onPress={() => {
        navigation.navigate("dateProfileScreen");
        setSelectedProfile(profiles[currentIndex]);
      }}
      style={[homeStyles.profileContainer, { height: height / 1.5 }]}
    >
      <Avatar
        source={avatar}
        avatarStyle={homeStyles.profileAvatar}
        containerStyle={[
          homeStyles.profileAvatarContainer,
          {
            height: height / 1.5,
            width: getWidth(width),
          },
        ]}
      />

      {/* 👇 bottom */}
      <LinearGradient
        colors={[
          "transparent",
          "transparent",
          theme.colors.black_variableFade(0.3),
          theme.colors.black_variableFade(0.5),
          theme.colors.black_variableFade(0.9),
        ]}
        style={homeStyles.profileLinearGradient}
      >
        <View style={homeStyles.profileBottom}>
          <View style={homeStyles.profileSocialLinks}>
            <MaterialCommunityIcons
              {...common_icon_props}
              name="instagram"
              color={theme.colors.darker_white}
            />
            <MaterialCommunityIcons
              {...common_icon_props}
              name="facebook"
              color={theme.colors.darker_white}
              style={{ marginLeft: theme.sizes.appPadding }}
            />
          </View>

          {/* 👇 details */}
          <MyText
            fontWeight="cantarellBold"
            style={homeStyles.profileUserNameAndAge}
          >
            {nameAndAge || "My Name"}
          </MyText>
          <MyText style={homeStyles.profileDescription}>
            {description || "I am a Human"}
          </MyText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
