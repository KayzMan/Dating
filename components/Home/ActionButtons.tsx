import { useGlobalContext } from "../../context/MyGlobalContext";
import { TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { homeStyles } from "../../screens/Home/home.styles";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";
import { scrollListToPosition } from "../../utilities/methods.utility";

// 👇 models
import { mainNavigationProps } from "../../navigation/mainNavigator.models";

export default function ActionButtons({
  profilesListRef,
}: {
  profilesListRef: React.MutableRefObject<null>;
}) {
  const {
    profiles,
    currentIndex,
    setCurrentIndex,
    setSelectedProfile,
    selectedProfile,
  } = useGlobalContext();

  const navigation = useNavigation<NavigationProp<mainNavigationProps>>();

  return (
    <View style={homeStyles.actionButtonsContainer}>
      <TouchableOpacity
        activeOpacity={theme.sizes.touchableOpacity_medium}
        onPress={() => {
          scrollListToPosition(profilesListRef, currentIndex + 1, true);
          setCurrentIndex(currentIndex + 1);
          setSelectedProfile(profiles[currentIndex + 1]);
        }}
        style={[
          homeStyles.actionButton,
          {
            backgroundColor: "rgba(255, 69, 0, .1)",
          },
        ]}
      >
        <MaterialCommunityIcons
          {...common_icon_props}
          name="close"
          color={"orangered"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={theme.sizes.touchableOpacity_medium}
        onPress={() => {
          setSelectedProfile(profiles[currentIndex]);
          navigation.navigate("lovedDatingProfileScreen");
        }}
        style={[
          homeStyles.actionButton,
          homeStyles.middle_actionButton,
          {
            backgroundColor: theme.colors.primary,
          },
        ]}
      >
        <MaterialCommunityIcons
          {...common_icon_props}
          name="heart-outline"
          color={theme.colors.white}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={theme.sizes.touchableOpacity_medium}
        onPress={() => {
          setSelectedProfile(profiles[currentIndex]);
          navigation.navigate("chatScreen");
        }}
        style={[
          homeStyles.actionButton,
          {
            backgroundColor: theme.colors.primary_variableFade(0.1),
            borderColor: theme.colors.primary,
            borderWidth: 1,
          },
        ]}
      >
        <MaterialCommunityIcons
          {...common_icon_props}
          name="chat-outline"
          color={theme.colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
}
