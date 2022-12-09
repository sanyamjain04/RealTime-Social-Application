import {
  Camera,
  ChatCircleDots,
  File,
  Gear,
  GearSix,
  Image,
  Phone,
  SignOut,
  Sticker,
  User,
  UserCircle,
  Users,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Profile",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots width={30} height={30} />,
  },
  {
    index: 1,
    icon: <Users width={30} height={30} />,
  },
  {
    index: 2,
    icon: <Phone width={30} height={30} />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix width={30} height={30} />,
  },
];

const ChatList = [
  {
    id: 0,
    img: 'https://avatars.githubusercontent.com/u/10858?v=4',
    name: "Weldon",
    msg: "Camargue",
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: 'https://avatars.githubusercontent.com/u/10858?v=4',
    name: 'Llewellyn',
    msg: 'Uncle Albert (Admiral Halsey)',
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: 'https://avatars.githubusercontent.com/u/10858?v=4',
    name: 'Madyson',
    msg: 'Born in the USA',
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: 'https://avatars.githubusercontent.com/u/10858?v=4',
    name: 'Born',
    msg: 'Born in the USA',
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: 'https://avatars.githubusercontent.com/u/10858?v=4',
    name: 'Born',
    msg: 'Born in the USA',
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: 'https://avatars.githubusercontent.com/u/10858?v=4',
    name: 'Born',
    msg: 'Born in the USA',
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: 'https://avatars.githubusercontent.com/u/10858?v=4',
    name: 'Born',
    msg: 'Born in the USA',
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: 'https://avatars.githubusercontent.com/u/10858?v=4',
    name: 'Born',
    msg: 'Born in the USA',
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "https://www.figma.com/file/cX28GcBPy6dz7NvyBYUaJy/CM-Chat-App?t=utgueRcAsYBdKANL-0",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: 'https://avatars.githubusercontent.com/u/10858?v=4',
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: 'https://avatars.githubusercontent.com/u/10858?v=4',
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const Shared_docs = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
];

const Shared_links = [
  {
    type: "msg",
    subtype: "link",
    preview: 'https://avatars.githubusercontent.com/u/10858?v=4',
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: 'https://avatars.githubusercontent.com/u/10858?v=4',
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: 'https://avatars.githubusercontent.com/u/10858?v=4',
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: 'https://avatars.githubusercontent.com/u/10858?v=4',
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: 'https://avatars.githubusercontent.com/u/10858?v=4',
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: 'https://avatars.githubusercontent.com/u/10858?v=4',
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
];

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <UserCircle size={24} />,
    y: 382,
    title: "Contact",
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
  Shared_links,
  Shared_docs,
  Actions
};
