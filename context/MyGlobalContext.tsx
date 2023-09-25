import React, { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";

// 👇 models
import { iProfileItem } from "../components/Home/ProfileItem/profileItem.model";

export type GlobalContext = {
  Cantarell_FontLoaded?: boolean;
  profiles: iProfileItem[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  selectedProfile?: iProfileItem | null;
  setSelectedProfile: Dispatch<SetStateAction<iProfileItem>>;
};

export const MyGlobalContext = createContext<GlobalContext>({
  Cantarell_FontLoaded: true,
  profiles: [],
  currentIndex: 0,
  setCurrentIndex: () => {},
  selectedProfile: null,
  setSelectedProfile: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
