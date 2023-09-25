import { View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { chatStyles } from "../../screens/Chat/chat.styles";

// 👇 utilities
import {
  common_icon_props,
  common_text_input_props,
} from "../../utilities/props.utility";

// 👇 components
import MyText from "../Global/MyText/MyText";

export default function SendMessageBox() {
  return (
    <View style={chatStyles.sendMessageContainer}>
      <View style={chatStyles.sendMessageWrapper}>
        <TextInput
          {...common_text_input_props}
          placeholder="Type Something ..."
          style={chatStyles.sendMessageTextBox}
        />

        <EvilIcons {...common_icon_props} name="sc-telegram" />
      </View>
    </View>
  );
}
