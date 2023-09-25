import React from "react";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { chatStyles } from "../../screens/Chat/chat.styles";

// 👇 models
import { iSystemMessage } from "./messages.model";

// 👇 components
import MyText from "../Global/MyText/MyText";

export default function SystemMessage({ id, message }: iSystemMessage) {
  return <MyText style={chatStyles.chats_systemMessage}>{message}</MyText>;
}
