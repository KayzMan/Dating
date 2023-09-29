import { View, Animated, StyleSheet, Easing, Platform } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

// 👇 theme
import { theme } from "../theme";

const CardSkeleton = ({
  height = 50,
  width = 100,
  borderRadius = 5,
}: {
  height?: number;
  width?: number;
  borderRadius?: number;
}) => {
  const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
  const animatedValue = new Animated.Value(0);
  const iterations = 10;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: Platform.OS === "web" ? false : true,
      }),
      { iterations }
    );
    loop.start();

    setTimeout(() => {
      loop.stop();
    }, theme.sizes.skeletonTime);
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={{
        backgroundColor: "#a0a0a0",
        height: height,
        width: width,
        overflow: "hidden",
        borderRadius: borderRadius,
      }}
    >
      <AnimatedLG
        colors={["#a0a0a0", "#b0b0b0", "#b0b0b0", "#a0a0a0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          transform: [{ translateX: translateX }],
          ...StyleSheet.absoluteFillObject,
        }}
      />
    </View>
  );
};

export default CardSkeleton;
