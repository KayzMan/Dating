// 👇 models
import { iProfileItem } from "../../components/Home/ProfileItem/profileItem.model";

export const loadProfiles = (): iProfileItem[] => {
  let profiles: iProfileItem[] = [
    {
      id: 1,
      avatar: require("../../assets/images/avatars/avatar1.jpg"),
      nameAndAge: "John Watts, 25",
      description: "Project Manager, Cloud InfoTech",
      about:
        "I'm John Watts from Belgium. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Traveling", "Singing", "Reading", "Trekking", "Diving"],
    },
    {
      id: 2,
      avatar: require("../../assets/images/avatars/avatar2.jpg"),
      nameAndAge: "Samantha Brown, 18",
      description: "Fashion Designer, Adorable Agency",
      about:
        "I'm Samantha Brown from Texas. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Diving", "Photography", "Trekking"],
    },
    {
      id: 3,
      avatar: require("../../assets/images/avatars/avatar3.jpg"),
      nameAndAge: "James Clark, 22",
      description: "Product Designer, Google",
      about:
        "I'm James Clark from New York. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Traveling", "Singing", "Reading"],
    },
    {
      id: 4,
      avatar: require("../../assets/images/avatars/avatar5.jpg"),
      nameAndAge: "Jane Doe, 20",
      description: "Coffee Maker, Starbucks",
      about:
        "I'm Jane Doe from New Jersey. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Diving", "Photography", "Trekking"],
    },
    {
      id: 5,
      avatar: require("../../assets/images/avatars/avatar6.jpg"),
      nameAndAge: "Hannah Scott, 19",
      description: "Hair Artist, Pink Parlour",
      about:
        "I'm Hannah Scott from Boston. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Traveling", "Singing", "Reading"],
    },
    {
      id: 6,
      avatar: require("../../assets/images/avatars/avatar7.jpg"),
      nameAndAge: "Anna Bell, 19",
      description: "Street Artist, Amazon Group",
      about:
        "I'm Anna Bell from New Zealand. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Diving", "Photography", "Trekking"],
    },
    {
      id: 7,
      avatar: require("../../assets/images/avatars/avatar8.jpg"),
      nameAndAge: "Rita Codes, 21",
      description: "RN Developer, Cute Techie 💕",
      about:
        "I'm Rita Codes from Thailand. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Traveling", "Singing", "Reading"],
    },
    {
      id: 8,
      avatar: require("../../assets/images/avatars/avatar9.jpg"),
      nameAndAge: "Sharon Gray, 17",
      description: "Photographer, Creative Agency",
      about:
        "I'm Sharon Gray from Malaysia. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Diving", "Photography", "Trekking"],
    },
    {
      id: 9,
      avatar: require("../../assets/images/avatars/avatar10.jpg"),
      nameAndAge: "Alex Martin, 22",
      description: "iOS Developer, Apple.inc",
      about:
        "I'm Alex Martin from Singapore. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Traveling", "Singing", "Reading"],
    },
    {
      id: 10,
      avatar: require("../../assets/images/avatars/avatar4.jpg"),
      nameAndAge: "Chin Yeng, 18",
      description: "Video Editor, Baseline Agency",
      about:
        "I'm Chin Yeng from China. I am looking for a special person, also i want to meet different people and learn new things from different cultures and visit new places",
      interests: ["Diving", "Photography", "Trekking"],
    },
  ];

  return profiles;
};
