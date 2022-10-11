import { Dialog } from "@headlessui/react";
import { useState } from "react";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.75"
          stroke="currentColor"
          className="w-8 h-8 hover:text-blue-700"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel className="fixed top-0 left-0 h-screen w-screen bg-blue-700 flex flex-col justify-center items-center">
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="w-8 h-8 fixed top-[18px] right-[32px] text-gray-200 hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Dialog.Title className="text-3xl text-white">Menu</Dialog.Title>

          <div className="flex flex-col items-center space-y-2.5 mt-5">
            <a href="/about" className="hover:text-white text-xl text-gray-200">
              About
            </a>
            <a href="/blog" className="hover:text-white text-xl text-gray-200">
              Blog
            </a>
            <a
              href="/contact-us"
              className="hover:text-white text-xl text-gray-200"
            >
              Contact Us
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
