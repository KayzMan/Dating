import { View, useWindowDimensions } from "react-native";
import React, { useCallback, useState } from "react";
import MapView, { Marker } from "react-native-maps";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { chatStyles } from "../../screens/Chat/chat.styles";

// 👇 models
import { iMessageItem } from "./messages.model";

// 👇 components
import MyText from "../Global/MyText/MyText";

const markers = [
  {
    LatLng: { latitude: 30.0456, longitude: -120.4342 },
    title: "Area1",
    description: "This is area1",
  },
  {
    LatLng: { latitude: 35.0456, longitude: -110.4342 },
    title: "Area2",
    description: "This is area2",
  },
  {
    LatLng: { latitude: 40.0456, longitude: -100.4342 },
    title: "Area3",
    description: "This is area3",
  },
];

export default function MessageItem({ isYou, isMap, message }: iMessageItem) {
  const { width } = useWindowDimensions();
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return isMap ? (
    <MapView
      // initialRegion={region}
      region={region}
      onRegionChange={setRegion}
      liteMode
      style={{
        width: width / 2,
        height: 180,
        marginTop: theme.sizes.appPadding,
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.LatLng}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  ) : (
    <View
      style={[
        chatStyles.chats_messageItem,
        {
          backgroundColor: isYou
            ? theme.colors.primary_variableFade(0.15)
            : theme.colors.gray_variableFade(0.05),
          alignSelf: isYou ? "flex-end" : "flex-start",
        },
      ]}
    >
      <MyText
        style={[
          chatStyles.chats_messageItemText,
          {
            color: isYou ? theme.colors.primary : theme.colors.black,
          },
        ]}
      >
        {message}
      </MyText>
    </View>
  );
}
