import React from "react";
import Toast from "react-native-simple-toast";

export const randomId = () => `${(Math.random() * 1000000).toString(36)}`;

export const displayToast = (message: string) =>
  Toast.showWithGravityAndOffset(message, Toast.LONG, Toast.BOTTOM, 0, 100);
