import { CgSearch } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="py-7.5 w-full max-md:px-3 pr-15 flex flex-row justify-between items-center font-dm text-black bg-white border-2 border-red-400">
      <div className="">
        <h1 className="text-3xl max-md:text-xl font-bold text-black p-2.5">
          Dashboard
        </h1>
      </div>
      <ul className="flex items-center justify-between border-2 border-green-400 w-1/2">
        <li className="cursor-pointer bg-[#737791] flex items-center gap-2 max-md:hidden">
          <div className="w-full">
            <CgSearch className="text-base text-gray-600" />
            <input
              type="text"
              placeholder="Search for a capsule"
              className="bg-transparent outline-none text-sm max-md:text-sm px-2"
            />
          </div>
        </li>
        <li className="cursor-pointer">
          <Button className="text-sm h-9 font-light flex items-center gap-2 bg-white border-2 border-soft-blue text-gray-600">
            <span className="max-md:hidden">Create</span>
            <FiPlus className="text-base max-md:text-sm font-light" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
