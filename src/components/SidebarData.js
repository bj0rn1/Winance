import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ClassRoundedIcon from "@mui/icons-material/ClassRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

export const SidebarData = [
  {
    title: "Shtepia",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Kategorite",
    icon: <ClassRoundedIcon />,
    link: "/kategorite",
  },
  {
    title: "Te ardhurat",
    icon: <AttachMoneyIcon />,
    link: "/teardhurat",
  },
  {
    title: "Shpenzimet",
    icon: <MoneyOffIcon />,
    link: "/shpenzimet",
  },
];
