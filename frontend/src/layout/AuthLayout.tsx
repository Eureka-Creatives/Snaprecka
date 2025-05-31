import { Outlet } from "react-router-dom";
import { InfiniteSlider } from "@/components/slider";
export default function AuthLayout() {
  return (
    <main className="flex justify-between w-full h-screen p-4">
      <div className="flex flex-row items-center justify-between w-3/4 gap-4 p-4 h-screen rounded-lg bg-gray-100 overflow-hidden">
        <InfiniteSlider direction="vertical">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
            alt="Yung Lean - Stardust"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-square w-[170px] rounded-[4px]"
          />
        </InfiniteSlider>
        <InfiniteSlider direction="vertical" reverse>
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
            alt="Yung Lean - Stardust"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-square w-[170px] rounded-[4px]"
          />
        </InfiniteSlider>
        <InfiniteSlider direction="vertical">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
            alt="Yung Lean - Stardust"
            className="aspect-square w-[170px] rounded-[4px]"
          />
          <img
            src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-square w-[170px] rounded-[4px]"
          />
        </InfiniteSlider>
      </div>
      <Outlet />
    </main>
  );
}
