import { Popover } from "@headlessui/react";

export const HeaderBlogItem = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="text-gray-700 hover:text-blue-800">
        Blog
      </Popover.Button>

      <Popover.Panel className="absolute z-10 left-1/2 -translate-x-1/2 bg-white">
        <div className="flex flex-col border border-gray-200 shadow-sm px-3.5 py-2 rounded-lg mt-2">
          <a href="/blog/bikes">Bikes</a>
          <a href="/blog/skateboards">Skateboards</a>
          <a href="/blog/surf">Surf</a>
          <a href="/blog/soccer">Soccer</a>
        </div>
      </Popover.Panel>
    </Popover>
  );
};
