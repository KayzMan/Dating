import { useGlobalContext } from "../../context/MyGlobalContext";
import React from "react";
import { Avatar } from "react-native-elements";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { dateProfileStyles } from "../../screens/DateProfile/dateProfile.styles";

export default function ProfileAvatar() {
  const { selectedProfile } = useGlobalContext();

  return (
    <Avatar
      source={selectedProfile?.avatar}
      avatarStyle={dateProfileStyles.avatar}
      containerStyle={dateProfileStyles.avatarContainer}
    />
  );
}
