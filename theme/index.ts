import { PixelRatio } from "react-native";

interface sizesType {
  appPadding: number;
  icon: number;
  radius: number;
  title_fontSize: number;

  touchableOpacity_high?: number;
  touchableOpacity_medium?: number;
  touchableOpacity_low?: number;

  skeletonTime: number;

  PixelRatio: number;
  PixelRatioFontScale: number;

  extraLargeDevice: number;
  largeDevice: number;
  mediumDevice: number;
  smallDevice: number;
  extraSmallDevice: number;

  fontWeight_bold?:
    | "700"
    | "400"
    | "100"
    | "normal"
    | "bold"
    | "200"
    | "300"
    | "500"
    | "600"
    | "800"
    | "900"
    | undefined;
  fontWeight_medium?:
    | "700"
    | "400"
    | "100"
    | "normal"
    | "bold"
    | "200"
    | "300"
    | "500"
    | "600"
    | "800"
    | "900"
    | undefined;
  fontWeight_light:
    | "700"
    | "400"
    | "100"
    | "normal"
    | "bold"
    | "200"
    | "300"
    | "500"
    | "600"
    | "800"
    | "900"
    | undefined;
}

export const theme = {
  sizes: {
    appPadding: 10,
    icon: 25,
    radius: 5,
    title_fontSize: PixelRatio.getFontScale() * 20 * 1.2,

    touchableOpacity_high: 0.8,
    touchableOpacity_medium: 0.5,
    touchableOpacity_low: 0.2,

    skeletonTime: 2000,

    PixelRatio: PixelRatio.get(),
    PixelRatioFontScale: PixelRatio.getFontScale(),

    extraLargeDevice: 1399.98,
    largeDevice: 1199.98,
    mediumDevice: 991.98,
    smallDevice: 767.98,
    extraSmallDevice: 575.98,

    fontWeight_bold: "700",
    fontWeight_medium: "400",
    fontWeight_light: "100",
  } as sizesType,
  colors: {
    primary: "rgb(255, 0, 255)",
    primary_faded: "rgba(255, 0, 255, 0.15)",
    primary_variableFade: (opacity: number) => `rgba(255, 0, 255, ${opacity})`,
    // secondary: "",
    black: "#000",
    white: "#fff",
    darker_white: "#eee",
    fadedBlack: "rgba(0, 0, 0, 0.3)",
    black_variableFade: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    gray: "#808080",
    gray_variableFade: (opacity: number) => `rgba(80, 80, 80, ${opacity})`,
    lightContainerBackground: "white",
    darkContainerBackground: "#222",
    lighterDarkContainerBackground: "#333",
    darkMode_borderColor: "#444",
    lightMode_borderColor: "#eee",
    title_fadedColor: "#999",
    topTabsLabelInActiveColor: "#ccc",
    topTabsIndicatorColor: "limegreen",
  },
  font: {
    cantarell: "cantarell",
    cantarellItalic: "cantarellItalic",
    cantarellBold: "cantarellBold",
    cantarellBoldItalic: "cantarellBoldItalic",
  },
};
