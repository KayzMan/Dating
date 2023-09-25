import { useGlobalContext } from "../../context/MyGlobalContext";
import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { dateProfileStyles } from "../../screens/DateProfile/dateProfile.styles";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

// 👇 components
import MyText from "../Global/MyText/MyText";
import InterestItem from "./InterestItem";

export default function Bottom() {
  const { selectedProfile } = useGlobalContext();

  return (
    <View style={dateProfileStyles.bottomContainer}>
      {/* 👇 top */}
      <View style={dateProfileStyles.bottomTop}>
        {/* 👇 left */}
        <View style={dateProfileStyles.bottomTopLeft}>
          <MyText
            fontWeight="cantarellBold"
            style={dateProfileStyles.bottomTopLeftName}
          >
            {selectedProfile?.nameAndAge || "username"}
          </MyText>
          <MyText style={dateProfileStyles.bottomTopLeftDescription}>
            {selectedProfile?.description || "description"}
          </MyText>
        </View>

        {/* 👇 right */}
        <View style={dateProfileStyles.bottomTopRight}>
          <MaterialCommunityIcons
            {...common_icon_props}
            name="instagram"
            size={theme.sizes.icon * 0.9}
            onPress={() => {}}
          />
          <MaterialCommunityIcons
            {...common_icon_props}
            name="facebook"
            size={theme.sizes.icon * 0.9}
            style={dateProfileStyles.bottomTopRightIcon}
            onPress={() => {}}
          />
        </View>
      </View>

      {/* 👇 meddle */}
      <View style={dateProfileStyles.bottomMiddle}>
        <MyText
          fontWeight="cantarellBold"
          style={dateProfileStyles.bottomTitle}
        >
          About
        </MyText>

        <MyText style={dateProfileStyles.bottomMiddleAbout}>
          {selectedProfile?.about || "about"}
        </MyText>
      </View>

      {/* 👇 bottom */}
      <View style={dateProfileStyles.bottomBottom}>
        <MyText
          fontWeight="cantarellBold"
          style={dateProfileStyles.bottomTitle}
        >
          Interest
        </MyText>
        <View style={dateProfileStyles.bottomBottomInterestItems}>
          {selectedProfile?.interests?.map((item, index) => (
            <InterestItem title={item} key={`interestItem-#${index}`} />
          ))}
        </View>
      </View>
    </View>
  );
}
