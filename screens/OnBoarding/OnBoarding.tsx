import { View, useWindowDimensions } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { onBoardingStyles } from "./onBoarding.styles";

// 👇 utilities
import {
  isExtraLargeDevice,
  isExtraSmallDevice,
  isGreaterThanExtraLarge,
  isLargeDevice,
  isMediumDevice,
  isSmallDevice,
} from "../../utilities/styles.utility";

// 👇 models
import { mainNavigationProps } from "../../navigation/mainNavigator.models";

// 👇 components
import ContainerView from "../../components/Global/ContainerView/ContainerView";
import MyText from "../../components/Global/MyText/MyText";
const image = require("../../assets/images/guy_and_girl_kissing.png");

export default function OnBoarding() {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<mainNavigationProps>>();

  return (
    <ContainerView>
      <View
        style={[
          onBoardingStyles.container,
          width < theme.sizes.largeDevice && {
            minHeight: height - 110,
          },
        ]}
      >
        {/* 👇 top */}
        <View style={onBoardingStyles.imageContainer}>
          <Avatar
            source={image}
            size={"xlarge"}
            avatarStyle={onBoardingStyles.avatar}
            containerStyle={[
              onBoardingStyles.avatarContainer,
              isExtraSmallDevice(width) && {
                width: 350,
                height: 350,
              },
              isSmallDevice(width) && {
                width: 350,
                height: 350,
              },
              isMediumDevice(width) && {
                width: 600,
                height: 600,
              },
              isLargeDevice(width) && {
                width: 500,
                height: 500,
              },
              isExtraLargeDevice(width) && {
                width: 500,
                height: 500,
              },
              isGreaterThanExtraLarge(width) && {
                width: 500,
                height: 500,
              },
            ]}
          />
        </View>

        {/* 👇 bottom */}
        <View style={onBoardingStyles.bottom}>
          <MyText style={onBoardingStyles.bottomText}>Find your</MyText>
          <MyText style={onBoardingStyles.bottomText}>Best Matches</MyText>

          <TouchableRipple
            onPress={() => {
              navigation.navigate("homeScreen");
            }}
            rippleColor={theme.colors.primary}
            style={[
              onBoardingStyles.bottomBtn,
              width >= 575 && {
                width: 400,
                alignSelf: "center",
              },
            ]}
          >
            <MyText style={onBoardingStyles.bottomBtnText}>Find Someone</MyText>
          </TouchableRipple>
        </View>
      </View>
    </ContainerView>
  );
}
