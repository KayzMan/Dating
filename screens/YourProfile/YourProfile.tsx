import { useGlobalContext } from "../../context/MyGlobalContext";
import { View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { yourProfileStyles } from "./yourProfile.styles";
import { dateProfileStyles } from "../DateProfile/dateProfile.styles";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

// 👇 components
import ContainerView from "../../components/Global/ContainerView/ContainerView";
import MyText from "../../components/Global/MyText/MyText";
import InterestItem from "../../components/DateProfile/InterestItem";

export default function YourProfile() {
  const navigation = useNavigation();
  const { Cantarell_FontLoaded } = useGlobalContext();

  return (
    <ContainerView>
      {/* 👇 app bar */}
      <Appbar>
        <Appbar.Action
          icon={"chevron-left"}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
        />

        <Appbar.Content
          title="Profile"
          titleStyle={[
            {
              fontSize: theme.sizes.title_fontSize * 0.9,
              alignSelf: "center",
            },
            Cantarell_FontLoaded && { fontFamily: theme.font.cantarell },
          ]}
        />
      </Appbar>

      <View style={yourProfileStyles.container}>
        {/* 👇 Top Content */}
        <View style={yourProfileStyles.topContent_container}>
          <View style={yourProfileStyles.topContent_Top}>
            <Avatar
              source={require("../../assets/images/me/me.jpg")}
              rounded
              size={"large"}
            />

            <View style={yourProfileStyles.topContent_TopRight}>
              <MyText
                fontWeight="cantarellBold"
                style={yourProfileStyles.topContent_TopRightName}
              >
                Ngoni Kayzman, 21
              </MyText>
              <MyText style={yourProfileStyles.topContent_TopRightDescription}>
                Mobile App Developer, Kayz.com
              </MyText>
              <MyText
                fontWeight="cantarellBold"
                style={yourProfileStyles.topContent_TopRightLocation}
              >
                Harare, Zimbabwe
              </MyText>
            </View>
          </View>

          <View style={yourProfileStyles.topContent_Interests}>
            {/* 👇 interests */}
            <View style={dateProfileStyles.bottomBottomInterestItems}>
              {["Traveling", "Diving", "Reading", "Trekking"].map(
                (item, index) => (
                  <InterestItem
                    size="small"
                    title={item}
                    key={`interestItem-#${index}`}
                  />
                )
              )}
            </View>
          </View>

          {/* 👇 about  text */}
          <MyText style={yourProfileStyles.topContent_about}>
            I'm Ngoni from Zimbabwe. I am looking for a special person, also i
            want to meet different people and learn new things from different
            cultures and visit new places.
          </MyText>
        </View>

        {/* 👇 data items */}
        <View style={yourProfileStyles.dataItems}>
          {/* 👇 data item */}
          <View style={yourProfileStyles.dataItem}>
            {/* 👇 left */}
            <View style={yourProfileStyles.dataItemLeft}>
              <EvilIcons {...common_icon_props} name="exclamation" />

              <MyText style={yourProfileStyles.dataItemLeftText}>
                Detailed Info
              </MyText>
            </View>

            <EvilIcons {...common_icon_props} name="chevron-down" />
          </View>

          {/* 👇 data item */}
          <View style={yourProfileStyles.dataItem}>
            {/* 👇 left */}
            <View style={yourProfileStyles.dataItemLeft}>
              <EvilIcons {...common_icon_props} name="heart" />

              <MyText style={yourProfileStyles.dataItemLeftText}>
                Matches
              </MyText>
            </View>

            <EvilIcons {...common_icon_props} name="chevron-down" />
          </View>

          {/* 👇 data item */}
          <View style={yourProfileStyles.dataItem}>
            {/* 👇 left */}
            <View style={yourProfileStyles.dataItemLeft}>
              <EvilIcons {...common_icon_props} name="chart" />

              <MyText style={yourProfileStyles.dataItemLeftText}>
                Profile Stats
              </MyText>
            </View>

            <EvilIcons {...common_icon_props} name="chevron-down" />
          </View>

          {/* 👇 data item */}
          <View style={yourProfileStyles.dataItem}>
            {/* 👇 left */}
            <View style={yourProfileStyles.dataItemLeft}>
              <EvilIcons {...common_icon_props} name="navicon" />

              <MyText style={yourProfileStyles.dataItemLeftText}>Notes</MyText>
            </View>

            <EvilIcons {...common_icon_props} name="chevron-down" />
          </View>
        </View>
      </View>
    </ContainerView>
  );
}
