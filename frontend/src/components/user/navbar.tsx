import { CgSearch } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import VaulDrawer from "./drawer";
import { useState } from "react";
import { Drawer } from "vaul";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-2.5 w-full max-md:px-3 flex flex-row justify-between items-center font-dm text-black bg-white">
      <div className="">
        <h1 className="text-2xl max-md:text-xl font-bold text-black">angles</h1>
      </div>
      <div className="flex flex-row items-center justify-between w-full max-md:gap-8">
        {/* <div className="flex items-center gap-2 cursor-pointer border border-soft-blue/50 px-4 py-1 rounded-full hover:bg-soft-blue/5 transition-colors duration-100 ease-out">
          <span className="text-base max-md:text-sm">Capsules</span>
          <GoChevronDown className="text-lg max-md:text-base" />
        </div> */}
        <ul className="flex items-center gap-4 max-md:gap-1 w-full justify-end">
          <li className="cursor-pointer bg-soft-blue/15 px-3 py-2 flex items-center gap-2 rounded-full transition-colors duration-100 ease-out max-md:hidden">
            <div>
              <input
                type="text"
                placeholder="Search for a capsule"
                className="bg-transparent outline-none text-sm max-md:text-sm px-2 w-full"
              />
            </div>
            <CgSearch className="text-base text-gray-600" />
          </li>
          <li className="cursor-pointer">
            <Button
              variant="ghost"
              className="text-sm h-9 font-light bg-soft-blue/15 hover:bg-soft-blue/10 px-5 rounded-full flex items-center gap-2 text-gray-600"
            >
              <span className="max-md:hidden">Create</span>
              <FiPlus className="text-base max-md:text-sm font-light" />
            </Button>
          </li>
          <li className="border-soft-blue cursor-pointer border rounded-full p-1 hidden max-lg:block h-8 w-8">
            <VaulDrawer setIsOpen={setIsOpen} isOpen={isOpen}>
              <div className="p-4 bg-white rounded-t-[10px] flex-1 font-dm">
                <div
                  aria-hidden
                  className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
                />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-4 text-gray-900">
                    Drawer for React.
                  </Drawer.Title>
                  <p className="text-gray-600 mb-2">
                    This component can be used as a Dialog replacement on mobile
                    and tablet devices. You can read about why and how it was
                    built{" "}
                    <a
                      target="_blank"
                      className="underline"
                      href="https://emilkowal.ski/ui/building-a-drawer-component"
                    >
                      here
                    </a>
                    .
                  </p>
                  <p className="text-gray-600 mb-2">
                    This one specifically is the most simplest setup you can
                    have, just a simple drawer with a trigger.
                  </p>
                </div>
              </div>
            </VaulDrawer>
          </li>
        </ul>
      </div>
    </nav>
  );
}
