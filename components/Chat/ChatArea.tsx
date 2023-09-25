import { View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { chatStyles } from "../../screens/Chat/chat.styles";

// 👇 components
import ContainerView from "../Global/ContainerView/ContainerView";
import MessageItem from "./MessageItem";
import SystemMessage from "./SystemMessage";

export default function ChatArea() {
  return (
    <ContainerView style={{ paddingTop: 0 }}>
      <View style={chatStyles.chatsContainer}>
        <MessageItem isYou={false} message="Are you free tonight?" id={1} />

        <SystemMessage message="08:35" id={1} />

        <MessageItem id={2} isYou={true} message="Yes, should we meet?" />

        <SystemMessage id={2} message="08:37" />

        <MessageItem
          id={3}
          isYou={false}
          message="For sure, how about this beautiful place?"
        />

        <MessageItem id={4} isYou={false} isMap={true} />

        <MessageItem id={5} isYou={true} message="Perfect!!" />

        <SystemMessage id={3} message="08:42" />

        <MessageItem id={6} isYou={false} message="What time can we meet?" />

        <MessageItem id={7} isYou={true} message="I'm am free at 8pm." />

        <MessageItem id={8} isYou={false} message="8pm is pretty good" />
        <MessageItem id={9} isYou={false} message="See you then 😜" />
      </View>
    </ContainerView>
  );
}
