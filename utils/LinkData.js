import { CgFeed } from "react-icons/cg";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineNotificationsNone,
  MdExplore,
  MdOutlineSettings,
} from "react-icons/md";
export const navigatations = [
  {
    id: 1,
    name: "Feed",
    link: "",
    icon: <CgFeed />,
  },
  {
    id: 2,
    name: "Community",
    link: "community",
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    name: "Messages",
    link: "messages",
    icon: <BiMessageDetail />,
  },
  {
    id: 4,
    name: "Profile",
    link: "profile",
    icon: <FaRegUserCircle />,
  },
  {
    id: 5,
    name: "Explore",
    link: "explore",
    icon: <MdExplore />,
  },
  {
    id: 6,
    name: "Settings",
    link: "settings",
    icon: <MdOutlineSettings />,
  },
];
