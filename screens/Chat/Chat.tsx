import { View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { chatStyles } from "./chat.styles";

// 👇 components
import TopAppBar from "../../components/Chat/TopAppBar";
import ChatArea from "../../components/Chat/ChatArea";
import SendMessageBox from "../../components/Chat/SendMessageBox";

export default function Chat() {
  return (
    <View style={chatStyles.container}>
      <TopAppBar />
      <ChatArea />
      <SendMessageBox />
    </View>
  );
}
