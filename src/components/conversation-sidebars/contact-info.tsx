import Image from "next/legacy/image";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  XCircle,
} from "phosphor-react";
import { useModal } from "../../hooks/useModal";
import { useContactInformationStore } from "../../zustand/contackStore";
import Divider from "../ui/Divider";
import Toggle from "../ui/Toggle";
import UserAvator from "../user/user-avator";
import DialogModal from "../ui/DialogModal";

const ContactInformation = () => {
  const toggleContactSidebar = useContactInformationStore(
    (state) => state.toggleSidebar
  );
  const changeSidebar = useContactInformationStore(
    (state) => state.updateSidebarType
  );

  return (
    <div className="w-[300px] h-screen bg-slate-200 dark:bg-dark dark:text-white gap-2 flex flex-col">
      {/* Header */}
      <div
        className="p-2"
        style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex items-center gap-3 p-4">
          <div onClick={toggleContactSidebar} className="cursor-pointer">
            <XCircle size={20} />
          </div>
          <h1>Contact Information</h1>
        </div>
      </div>

      {/* Body */}
      <div className="group flex flex-col flex-grow p-2 overflow-hidden ">
        <div className="flex flex-col gap-2 overflow-y-scroll scrollbarThin">
          <div className="flex items-center gap-5 px-2 pb-2 ">
            <UserAvator />
            <div className="flex flex-col justify-start">
              <h1 className="font-semibold">Sanyam Jain</h1>
              <p className="text-sm">+91 123456789</p>
            </div>
          </div>

          <div className="flex items-center justify-evenly">
            <div className="flex flex-col items-center">
              <VideoCamera size={20} />
              <p>Video</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone size={20} />
              <p>Audio</p>
            </div>
          </div>

          <Divider />

          {/* About Section  */}
          <div className="flex flex-col justify-center gap-3 p-2">
            <h1 className="">About</h1>
            <p className="font-semibold text-sm">
              Hi there, I am using Chatsapp 🔥
            </p>
          </div>

          <Divider />

          {/* Media Section  */}
          <div className="flex flex-col justify-center gap-3 p-2">
            <div className="flex justify-between items-center">
              <p>Media, links and docs</p>
              <button
                className="flex items-center bg-transparent"
                onClick={() => changeSidebar("SHARED")}
              >
                <p>200</p>
                <CaretRight size={18} />
              </button>
            </div>
            <div className="flex justify-between gap-2 p-2">
              {[1, 2, 3].map((el, idx) => (
                <div key={idx} className="relative w-12 h-12">
                  <Image
                    src="https://avatars.githubusercontent.com/u/10858?v=4"
                    alt=""
                    layout="fill"
                  />
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* Starred Messages */}
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <Star />
              <p>Starred Messages</p>
            </div>
            <CaretRight
              className="cursor-pointer"
              onClick={() => changeSidebar("STARRED")}
            />
          </div>

          <Divider />

          {/* Mute Notification  */}
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <Bell />
              <p>Mute Notifications</p>
            </div>
            {/* <Switch /> */}
            <Toggle onChange={() => {}} />
          </div>

          <Divider />

          {/* Common Group  */}
          <div className="flex flex-col gap-2 p-2">
            <p>1 Group in Common</p>
            <div className="flex items-center gap-2">
              <UserAvator />
              <div>
                <p className="font-semibold">Camel's Gang</p>
                <p>Aryan, Sanyam, You</p>
              </div>
            </div>
          </div>

          {/* Buttons  */}
          <div className="flex gap-2 items-center justify-evenly p-1">
            <BlockDialog />
            <DeleteDialog />
          </div>
        </div>
      </div>
    </div>
  );
};

const BlockDialog = () => {
  const { open, openModal, closeModal } = useModal();
  return (
    <>
      <button
        className="flex gap-2 bg-transparent border-main-accent hover:bg-main-accent/50 p-2 items-center border-2 rounded-lg"
        onClick={openModal}
      >
        <Prohibit />
        <p>Block</p>
      </button>
      <DialogModal
        open={open}
        closeModal={closeModal}
        title="Block User"
        closeButtonTitle="Close"
        actionBtnTitle="Block"
        actionBtn={closeModal}
      >
        <div>
          <p className="dark:text-slate-300">Do you want to block the User?</p>
        </div>
      </DialogModal>
    </>
  );
};

const DeleteDialog = () => {
  const { open, openModal, closeModal } = useModal();
  return (
    <>
      <button
        className="flex gap-2 bg-transparent hover:bg-main-accent/50 border-main-accent p-2 items-center border-2 rounded-lg"
        onClick={openModal}
      >
        <Trash />
        <p>Delete</p>
      </button>
      <DialogModal
        open={open}
        closeModal={closeModal}
        title="Delete Chat"
        closeButtonTitle="Close"
        actionBtnTitle="Block"
        actionBtn={closeModal}
      >
        <div>
          <p className="dark:text-slate-300">
            Do you want to Delete this Chat?
          </p>
        </div>
      </DialogModal>
    </>
  );
};

export default ContactInformation;
