import { useGlobalContext } from "../../context/MyGlobalContext";
import { View, ImageBackground } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { Button } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { lovedDateProfileStyles } from "./lovedDateProfile.styles";

// 👇 models
import { mainNavigationProps } from "../../navigation/mainNavigator.models";

// 👇 components
import ContainerView from "../../components/Global/ContainerView/ContainerView";
import MyText from "../../components/Global/MyText/MyText";

const coverImage = require("../../assets/images/general/general1.jpg");

export default function LovedDatingProfile() {
  const { selectedProfile, Cantarell_FontLoaded } = useGlobalContext();
  const navigation = useNavigation<NavigationProp<mainNavigationProps>>();

  return (
    <ImageBackground source={coverImage} style={{ flex: 1 }}>
      <ContainerView style={{ backgroundColor: "transparent", paddingTop: 0 }}>
        {/* 👇 container */}
        <View style={lovedDateProfileStyles.container}>
          {/* 👇 title */}
          <MyText
            fontWeight="cantarellBold"
            style={lovedDateProfileStyles.title}
          >
            It's Awesome !!
          </MyText>

          {/* 👇 lover's avatars */}
          <View style={lovedDateProfileStyles.avatarsContainer}>
            <Avatar
              containerStyle={lovedDateProfileStyles.avatarContainer}
              avatarStyle={lovedDateProfileStyles.avatar}
              source={selectedProfile?.avatar}
              size={"large"}
              rounded
            />

            {/* 👇 spacer */}
            <View style={{ marginHorizontal: theme.sizes.appPadding }} />

            <Avatar
              containerStyle={lovedDateProfileStyles.avatarContainer}
              avatarStyle={lovedDateProfileStyles.avatar}
              source={require("../../assets/images/me/me.jpg")}
              size={"large"}
              rounded
            />
          </View>

          <MyText style={lovedDateProfileStyles.description}>
            You both like each other, ask her about something interesting.
          </MyText>

          {/* 👇 action buttons */}
          <View style={lovedDateProfileStyles.buttonsContainer}>
            <Button
              theme={theme}
              style={lovedDateProfileStyles.buttonContainer}
              contentStyle={lovedDateProfileStyles.button}
              labelStyle={[
                lovedDateProfileStyles.buttonText,
                Cantarell_FontLoaded && {
                  fontFamily: theme.font.cantarellBold,
                },
              ]}
              onPress={() => {
                navigation.navigate("chatScreen");
              }}
            >
              Say Hello
            </Button>

            <Button
              theme={theme}
              style={[
                lovedDateProfileStyles.buttonContainer,
                { backgroundColor: theme.colors.white },
              ]}
              contentStyle={[lovedDateProfileStyles.button]}
              labelStyle={[
                lovedDateProfileStyles.buttonText,
                { color: theme.colors.primary },
                Cantarell_FontLoaded && {
                  fontFamily: theme.font.cantarellBold,
                },
              ]}
              onPress={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }}
            >
              Keep Swiping
            </Button>
          </View>
        </View>
      </ContainerView>
    </ImageBackground>
  );
}
