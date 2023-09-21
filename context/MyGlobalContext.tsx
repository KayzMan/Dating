import React from "react";
import { createContext, useContext } from "react";

// 👇 models
import { iProfileItem } from "../components/Home/ProfileItem/profileItem.model";

export type GlobalContext = {
  Cantarell_FontLoaded?: boolean;
  profiles?: iProfileItem[];
};

export const MyGlobalContext = createContext<GlobalContext>({
  Cantarell_FontLoaded: true,
  profiles: [],
});

export const useGlobalContext = () => useContext(MyGlobalContext);
