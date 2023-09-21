import { TouchableOpacity, View, Pressable } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { TouchableRipple } from "react-native-paper";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { homeStyles } from "../../screens/Home/home.styles";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";
import { scrollListToPosition } from "../../utilities/methods.utility";

export default function ActionButtons({
  profilesListRef,
  currentIndex,
  setCurrentIndex,
}: {
  profilesListRef: React.MutableRefObject<null>;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <View style={homeStyles.actionButtonsContainer}>
      <TouchableOpacity
        activeOpacity={theme.sizes.touchableOpacity_medium}
        onPress={() => {
          scrollListToPosition(profilesListRef, currentIndex + 1, true);
          setCurrentIndex(currentIndex + 1);
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
        onPress={() => {}}
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
        onPress={() => {}}
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
