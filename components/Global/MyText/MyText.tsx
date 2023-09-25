import { useGlobalContext } from "../../../context/MyGlobalContext";
import { Text, TextProps } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 models
import { MyTextFontWeight } from "./myText.models";

interface MyTextProps extends TextProps {
  fontWeight?: MyTextFontWeight | undefined;
}

export default function MyText({
  children,
  style,
  fontWeight,
  ...props
}: MyTextProps) {
  const { Cantarell_FontLoaded } = useGlobalContext();

  return (
    <Text
      {...props}
      style={[
        Cantarell_FontLoaded && {
          fontFamily: fontWeight
            ? theme.font[fontWeight]
            : theme.font.cantarell,
          color: theme.colors.black,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
