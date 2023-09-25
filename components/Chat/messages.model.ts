export interface iMessageItem {
  id: number;
  isYou: boolean;
  isMap?: boolean;
  message?: string;
}

export interface iMessageItemProps {
  item: iMessageItem;
}

export interface iSystemMessage {
  id: number;
  message: string;
}

export interface iSystemMessageProps {
  item: iSystemMessage;
}
