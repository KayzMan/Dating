// import { Platform, ScrollView, View, useWindowDimensions } from "react-native";
// import React, { useEffect, useState, useCallback, useRef } from "react";
// import { useGlobalContext } from "../../context/MyGlobalContext";
// import { FlashList } from "@shopify/flash-list";

// // 👇 theme
// import { theme } from "../../theme";

// // 👇 styles
// import { homeStyles } from "./home.styles";

// // 👇 models
// import {
//   iProfileItem,
//   iProfileItemProps,
// } from "../../components/Home/ProfileItem/profileItem.model";

// // 👇 utilities
// import { scrollListToPosition } from "../../utilities/methods.utility";

// // 👇 components
// import HomeSkeleton from "./Home.skeleton";
// import ContainerView from "../../components/Global/ContainerView/ContainerView";
// import Profile from "../../components/Home/ProfileItem/Profile";
// import Top from "../../components/Home/Top";
// import ActionButtons from "../../components/Home/ActionButtons";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const { profiles } = useGlobalContext();
//   const { height, width } = useWindowDimensions();
//   let profilesListRef = useRef(null);

//   // 👇 component did mount.
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, theme.sizes.skeletonTime);
//   }, []);

//   // component did update.
//   useEffect(() => {
//     // 👇 scroll to the beginning of the list
//     scrollListToPosition(profilesListRef, 0, 0, true);
//   }, [profilesListRef]);

//   // 👇 profiles renderItem
//   const renderItem = (item: iProfileItemProps) => <Profile {...item.item} />;

//   // 👇 profiles keyExtractor
//   const keyExtractor = useCallback(
//     (item: iProfileItem, index: number) => `profileItem-#${item.id}-#${index}`,
//     []
//   );

//   return (
//     <ContainerView>
//       {isLoading ? (
//         <HomeSkeleton />
//       ) : (
//         <View
//           style={[
//             homeStyles.container,
//             width > 500 && {
//               maxWidth: 500,
//               minWidth: 500,
//               marginHorizontal: "auto",
//             },
//           ]}
//         >
//           <Top />
//           <ScrollView
//             ref={profilesListRef}
//             scrollEnabled={Platform.OS === "web" ? false : true}
//             // data={profiles}
//             // estimatedItemSize={width}
//             // renderItem={renderItem}
//             // keyExtractor={keyExtractor}
//             showsHorizontalScrollIndicator={false}
//             showsVerticalScrollIndicator={false}
//             horizontal
//             snapToInterval={width}
//             pagingEnabled={true}
//             disableIntervalMomentum={true}
//             isTVSelectable={true}
//             keyboardDismissMode="on-drag"
//             decelerationRate={"fast"}
//           >
//             {profiles?.map((item) => (
//               <Profile key={item.id} {...item} />
//             ))}
//           </ScrollView>
//           <ActionButtons profilesListRef={profilesListRef} />
//         </View>
//       )}
//     </ContainerView>
//   );
// }
