import { View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { chatStyles } from "../../screens/Chat/chat.styles";

// 👇 components
import ContainerView from "../Global/ContainerView/ContainerView";
import MyText from "../Global/MyText/MyText";
import MessageItem from "./MessageItem";
import SystemMessage from "./SystemMessage";

export default function ChatArea() {
  return (
    <ContainerView style={{ paddingTop: 0 }}>
      <View style={chatStyles.chatsContainer}>
        <MessageItem />
      </View>
    </ContainerView>
  );
}
