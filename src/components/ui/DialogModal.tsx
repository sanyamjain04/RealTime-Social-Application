import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

type DialogModalProps = {
  open: boolean;
  closeModal: () => void;
  action?: () => void;
  title: string;
  children?: ReactNode;
  closeButtonTitle: string;
  actionTitle?: string;
};

export default function DialogModal({
  open,
  title,
  closeButtonTitle,
  closeModal,
  children
}: DialogModalProps) {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-dark p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    {children}
                  </div>

                  <div className="mt-4 ml-auto text-right">
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-main-accent px-4 py-2 text-sm font-medium hover:bg-main-accent/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-main-accent focus-visible:ring-offset-2 text-white"
                      onClick={closeModal}
                    >
                      {closeButtonTitle}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
