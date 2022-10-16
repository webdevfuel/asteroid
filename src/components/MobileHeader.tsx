import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          className="w-8 h-8 hover:text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        initialFocus={buttonRef}
      >
        <Dialog.Panel className="fixed top-0 left-0 h-screen w-screen bg-blue-700 flex flex-col justify-center items-center z-50">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed top-[18px] right-[32px] focus:ring-2 focus:ring-white focus:ring-opacity-25 focus:outline-none rounded-lg"
            ref={buttonRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="w-8 h-8 text-gray-200 hover:text-white"
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
