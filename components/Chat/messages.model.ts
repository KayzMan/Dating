export interface iMessageItem {
  id: number;
  isYou: boolean;
  isMap?: boolean;
}

export interface iMessageItemProps {
  item: iMessageItem;
}
