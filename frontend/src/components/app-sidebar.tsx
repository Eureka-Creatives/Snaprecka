import { RiHome6Line } from "react-icons/ri";

export function AppSidebar() {
  return (
    <section className="w-[20%] bg-black text-white p-10 flex flex-col items-start gap-10">
      <h1 className="font-sans font-bold text-3xl px-4">Snap</h1>

      <ul className="flex flex-col items-start gap-10">
        <li className="flex items-center gap-2 text-xl hover:bg-white/50 px-4 py-2 rounded-full">
          <RiHome6Line />
          Feed
        </li>
        <li className="flex items-center gap-2 text-xl hover:bg-white/50 px-4 py-2 rounded-full">
          <RiHome6Line />
          Trending
        </li>
        <li className="flex items-center gap-2 text-xl hover:bg-white/50 px-4 py-2 rounded-full">
          <RiHome6Line />
          Explore
        </li>
        <li className="flex items-center gap-2 text-xl hover:bg-white/50 px-4 py-2 rounded-full">
          <RiHome6Line />
          Notifications
        </li>
        <li className="flex items-center gap-2 text-xl hover:bg-white/50 px-4 py-2 rounded-full">
          <RiHome6Line />
          Messages
        </li>
        <li className="flex items-center gap-2 text-xl hover:bg-white/50 px-4 py-2 rounded-full">
          <RiHome6Line />
          Create Post
        </li>
      </ul>
    </section>
  );
}
