//import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";

import { ImProfile } from "react-icons/im";

const links = [
  {
    text: "stats",
    path: ".",
    icon: <IoBarChartSharp />,
  },
  {
    text: "history",
    path: "history",
    icon: <MdQueryStats />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];
export default links;
