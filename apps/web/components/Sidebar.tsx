import { Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons";
import { Fragment, PropsWithChildren } from "react";

interface ISidebarProps {
  open: boolean;
  onCloseSidebar?: () => void;
  content: string;
}
const Sidebar = ({
  open,
  onCloseSidebar,
  content,
  children,
}: PropsWithChildren<ISidebarProps>) => {
  return (
    <>
      <Transition
        show={open}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200 delay-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="w-full min-h-screen bg-gray-300/30 fixed top-0 right-0 z-20 backdrop-blur-[2px]"
          onClick={onCloseSidebar}
        ></div>
      </Transition>
      <Transition
        show={open}
        as={Fragment}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button
          className="text-white bg-red-400 rounded-full p-1 fixed top-2 right-1 z-40"
          onClick={onCloseSidebar}
        >
          <IconX className="w-4 h-4" />
        </button>
      </Transition>

      <Transition
        show={open}
        className="h-full max-h-screen w-full max-w-xl pb-8 px-8 bg-[rgb(12,12,13)] fixed top-0 right-0 z-30 prose prose-invert flex flex-col justify-between overflow-y-auto"
        enter="transition-all duration-300 ease-in-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-all duration-300 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div
          dangerouslySetInnerHTML={{
            __html: content || "Loading",
          }}
          className="max-w-xl break-words"
        />

        {children}
      </Transition>
    </>
  );
};

export default Sidebar;
