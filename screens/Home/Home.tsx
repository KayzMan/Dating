import { View, useWindowDimensions } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "../../context/MyGlobalContext";
import PagerView from "react-native-pager-view";

// 👇 theme
import { theme } from "../../theme";

// 👇 styles
import { homeStyles } from "./home.styles";

// 👇 utilities
import { scrollListToPosition } from "../../utilities/methods.utility";

// 👇 components
import HomeSkeleton from "./Home.skeleton";
import ContainerView from "../../components/Global/ContainerView/ContainerView";
import Profile from "../../components/Home/ProfileItem/Profile";
import Top from "../../components/Home/Top";
import ActionButtons from "../../components/Home/ActionButtons";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { profiles, setCurrentIndex, setSelectedProfile } = useGlobalContext();
  const { height, width } = useWindowDimensions();
  let profilesListRef = useRef(null);

  // 👇 component did mount.
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, theme.sizes.skeletonTime);
  }, []);

  // component did update.
  useEffect(() => {
    // 👇 scroll to the beginning of the list
    setCurrentIndex(0);
    scrollListToPosition(profilesListRef, 0, true);
  }, []);

  return (
    <ContainerView>
      {isLoading ? (
        <HomeSkeleton />
      ) : (
        <View
          style={[
            homeStyles.container,
            width > 500 && {
              maxWidth: 500,
              minWidth: 500,
              marginHorizontal: "auto",
            },
          ]}
        >
          <Top />
          <PagerView
            style={{ flex: 1, minWidth: width, height: height / 1.5 }}
            ref={profilesListRef}
            isTVSelectable={true}
            keyboardDismissMode="on-drag"
            onPageSelected={(e) => {
              setCurrentIndex(e.nativeEvent.position);
              setSelectedProfile(profiles[e.nativeEvent.position]);
            }}
          >
            {profiles?.map((item) => (
              <Profile key={item.id} {...item} />
            ))}
          </PagerView>
          <ActionButtons profilesListRef={profilesListRef} />
        </View>
      )}
    </ContainerView>
  );
}
