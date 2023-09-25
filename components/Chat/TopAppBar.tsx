import { useGlobalContext } from "../../context/MyGlobalContext";
import { View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { chatStyles } from "../../screens/Chat/chat.styles";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

// 👇 components
import MyText from "../Global/MyText/MyText";

export default function TopAppBar() {
  const navigation = useNavigation();
  const { selectedProfile } = useGlobalContext();

  return (
    <Appbar style={chatStyles.headerContainer}>
      <Appbar.Header style={chatStyles.headerContainer}>
        <View style={chatStyles.detailContainer}>
          <EvilIcons
            {...common_icon_props}
            name="chevron-left"
            size={theme.sizes.icon * 1.5}
            style={{ marginRight: theme.sizes.appPadding * 0.4 }}
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}
          />
          <Avatar source={selectedProfile?.avatar} rounded size={"medium"} />

          <View style={chatStyles.detailRight}>
            <MyText
              fontWeight="cantarellBold"
              style={chatStyles.header_nameAndAge}
            >
              {selectedProfile?.nameAndAge || "Name"}
            </MyText>

            <MyText style={chatStyles.header_description}>
              {selectedProfile?.description || "description"}
            </MyText>
          </View>
        </View>
      </Appbar.Header>
    </Appbar>
  );
}
