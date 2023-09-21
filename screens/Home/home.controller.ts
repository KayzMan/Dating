// 👇 models
import { iProfileItem } from "../../components/Home/ProfileItem/profileItem.model";

export const loadProfiles = (): iProfileItem[] => {
  let profiles: iProfileItem[] = [
    {
      id: 1,
      avatar: require("../../assets/images/avatars/avatar1.jpg"),
      nameAndAge: "John Watts, 25",
      description: "Project Manager, Cloud InfoTech",
    },
    {
      id: 2,
      avatar: require("../../assets/images/avatars/avatar2.jpg"),
      nameAndAge: "Samantha Brown, 18",
      description: "Fashion Designer, Adorable Agency",
    },
    {
      id: 3,
      avatar: require("../../assets/images/avatars/avatar3.jpg"),
      nameAndAge: "James Clark, 22",
      description: "Product Designer, Google",
    },
    {
      id: 4,
      avatar: require("../../assets/images/avatars/avatar5.jpg"),
      nameAndAge: "Jane Doe, 20",
      description: "Coffee Maker, Starbucks",
    },
    {
      id: 5,
      avatar: require("../../assets/images/avatars/avatar6.jpg"),
      nameAndAge: "Hannah Scott, 19",
      description: "Hair Artist, Pink Parlour",
    },
    {
      id: 6,
      avatar: require("../../assets/images/avatars/avatar7.jpg"),
      nameAndAge: "Anna Bell, 19",
      description: "Street Artist, Amazon Group",
    },
    {
      id: 7,
      avatar: require("../../assets/images/avatars/avatar8.jpg"),
      nameAndAge: "Rita Codes, 21",
      description: "RN Developer, Cute Techie 💕",
    },
    {
      id: 8,
      avatar: require("../../assets/images/avatars/avatar9.jpg"),
      nameAndAge: "Sharon Gray, 17",
      description: "Photographer, Creative Agency",
    },
    {
      id: 9,
      avatar: require("../../assets/images/avatars/avatar10.jpg"),
      nameAndAge: "Alex Martin, 22",
      description: "iOS Developer, Apple.inc",
    },
    {
      id: 10,
      avatar: require("../../assets/images/avatars/avatar4.jpg"),
      nameAndAge: "Chin Yeng, 18",
      description: "Video Editor, Baseline Agency",
    },
  ];

  return profiles;
};
