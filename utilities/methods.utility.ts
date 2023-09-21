import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// 👇 scroll the list to given position
export const scrollListToPosition = (
  listRef: React.MutableRefObject<null>,
  x: number,
  animated: boolean
) => {
  if (listRef?.current) {
    const {
      setPage,
      setPageWithoutAnimation,
      ...others
    }: {
      setPage: (x: number) => void;
      setPageWithoutAnimation: (x: number) => void;
    } = listRef?.current;

    if (animated === false) {
      if (
        typeof setPageWithoutAnimation !== "undefined" &&
        typeof setPageWithoutAnimation === "function"
      ) {
        setPageWithoutAnimation(x);
      }
    } else {
      if (typeof setPage !== "undefined" && typeof setPage === "function") {
        setPage(x);
      }
    }
  }
};
