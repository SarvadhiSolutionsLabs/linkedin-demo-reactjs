import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderLink from "./HeaderLink";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg">
      {/* Left */}
      <div className="flex items-center space-x-2 w-full max-w-xs">
        {mounted && (
          <>
            {resolvedTheme === "dark" ? (
              <Image
                src="https://rb.gy/bizvqj"
                width={45}
                height={45}
                alt="dark logo"
              />
            ) : (
              <Image
                src="https://rb.gy/dpmd9s"
                width={45}
                height={45}
                alt="light logo"
              />
            )}
          </>
        )}
        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
          <SearchRoundedIcon />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center space-x-6">
        <HeaderLink Icon={HomeRoundedIcon} title="Home" feed active />
        <HeaderLink Icon={GroupIcon} title="My Network" feed />
        <HeaderLink Icon={BusinessCenterIcon} title="Jobs" feed hidden />
        <HeaderLink Icon={ChatIcon} title="Messaging" feed />
        <HeaderLink Icon={NotificationsIcon} title="Notifications" feed />
        <HeaderLink Icon={Avatar} title="Me" feed avatar hidden />
        <HeaderLink Icon={AppsOutlinedIcon} title="Work" feed hidden />
        {/* Dark Mode toggle */}
        {mounted && (
          <div
            className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
              resolvedTheme === "dark" ? "justify-end" : "justify-start"
            }`}
            onClick={handleToggleTheme}
          >
            <span className="absolute left-0">🌜</span>
            <motion.div
              className="w-5 h-5 bg-white rounded-full z-40"
              layout
              transition={spring}
            />
            <span className="absolute right-0.5">🌞</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
