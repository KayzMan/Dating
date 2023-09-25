import { ImageSourcePropType } from "react-native";

export interface iProfileItem {
  id: number;
  avatar: ImageSourcePropType;
  nameAndAge: string;
  description: string;
  about: string;
  interests: string[];
}

export interface iProfileItemProps {
  item: iProfileItem;
}
