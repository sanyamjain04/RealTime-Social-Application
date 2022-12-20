import { Fade, Menu, MenuItem } from "@mui/material";
import Image from "next/legacy/image";
import { MouseEvent, useState } from "react";
import Logo from "../../assets/Images/logo.ico";
import { Profile_Menu } from "../../data";
import UserAvator from "../user/user-avator";
import SideLinks from "./side-links";
import DarkModeToggle from "./side-toggle";
import Link from "next/link";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  
  
  return (
    <div className="w-[100px] h-screen bg-white dark:bg-dark overflow-hidden border-r dark:border-slate-600">
      <div className="flex flex-col justify-between h-full py-3">

        <div className="flex flex-col gap-5 items-center">
          <Link href='/' className="h-16 w-16 rounded-lg bg-[#0162C4]">
            <Image src={Logo} alt="logo" />
          </Link >
          <SideLinks />
        </div>

        <div className=" flex  flex-col gap-2 items-center justify-center">
          {/* Toogle Dark Mode  */}
          <DarkModeToggle />

          {/* UserAvator And It's setting modal */}
          <div onClick={handleClick}>
            <UserAvator />
          </div>
          <Menu
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            TransitionComponent={Fade}
            id="profile-positioned-menu"
            aria-labelledby="profile-positioned-button"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div>
              {Profile_Menu.map((el, idx) => (
                <MenuItem key={idx} onClick={handleClose}>
                  <div className="w-full flex items-center gap-3 justify-between">
                    <span>{el.title}</span>
                    {el.icon}
                  </div>
                </MenuItem>
              ))}
            </div>
          </Menu>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;

