import { Fade, Menu, MenuItem } from '@mui/material';
import Image from 'next/legacy/image';
import { MouseEvent, useState } from 'react';
import { Profile_Menu } from '@data/index';
import SideLinks from './side-links';
import DarkModeToggle from './side-toggle';
import Link from 'next/link';
import Logo from '@assets/Images/logo.ico';
import UserAvator from '@components/user/user-avator';

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLDivElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  console.log('sidebar mounted');

  return (
    <div className="h-screen w-[100px] overflow-hidden border-r bg-white dark:border-slate-600 dark:bg-dark">
      <div className="flex h-full flex-col justify-between py-3">
        <div className="flex flex-col items-center gap-5">
          <Link href="/" className="h-16 w-16 rounded-lg bg-[#0162C4]">
            <Image src={Logo} alt="logo" />
          </Link>
          <SideLinks />
        </div>

        <div className=" flex  flex-col items-center justify-center gap-2">
          {/* Toogle Dark Mode  */}
          <DarkModeToggle />

          {/* UserAvator And It's setting modal */}
          <div onClick={handleClick}>
            <UserAvator />
          </div>
          <Menu
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            TransitionComponent={Fade}
            id="profile-positioned-menu"
            aria-labelledby="profile-positioned-button"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div>
              {Profile_Menu.map((el, idx) => (
                <MenuItem key={idx} onClick={handleClose}>
                  <div className="flex w-full items-center justify-between gap-3">
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
