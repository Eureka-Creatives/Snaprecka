import { Outlet } from "react-router-dom";
import { InfiniteSlider } from "@/components/slider";
import { Toaster } from "sonner";
import { IoChevronBackOutline } from "react-icons/io5";
import image1 from "@/assets/auth/community1.webp";
import image2 from "@/assets/auth/community64.webp";
import image3 from "@/assets/auth/community90.webp";
import image4 from "@/assets/auth/community2.webp";
import image5 from "@/assets/auth/community4 (2).webp";
import image6 from "@/assets/auth/community11 (2).webp";
import image7 from "@/assets/auth/community81.webp";
import image8 from "@/assets/auth/community59.webp";
import image9 from "@/assets/auth/community7 (1).webp";
import image10 from "@/assets/auth/community55.webp";
import image11 from "@/assets/auth/community9 (2).webp";
import image12 from "@/assets/auth/community(3).webp";
import image13 from "@/assets/auth/community5 (1).webp";
import { useNavigate } from "react-router-dom";

export default function AuthLayout() {
  const navigate = useNavigate();

  return (
    <main className="flex justify-between w-full h-screen bg-white p-5 font-dm">
      <Toaster
        position="top-right"
        richColors
        closeButton={false}
        toastOptions={{
          className: "text-sm",
        }}
      />
      <div className="flex flex-row items-center justify-between w-2/5 b gap-4 rounded-lg overflow-hidden relative">
        <div className="absolute top-3 left-3 z-20">
          <button
            className="rounded-full py-2.5 px-2.5  bg-white/95 backdrop-lg cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoChevronBackOutline className="text-2xl" />
          </button>
        </div>
        <InfiniteSlider direction="vertical">
          <img
            src={image1}
            alt="Dean blunt - Black Metal 2"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image2}
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image3}
            alt="Yung Lean - Stardust"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image4}
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image5}
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
        </InfiniteSlider>
        <InfiniteSlider direction="vertical" reverse>
          <img
            src={image6}
            alt="Dean blunt - Black Metal 2"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image7}
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image8}
            alt="Yung Lean - Stardust"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image9}
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
        </InfiniteSlider>
        <InfiniteSlider direction="vertical">
          <img
            src={image10}
            alt="Dean blunt - Black Metal 2"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image11}
            alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image12}
            alt="Yung Lean - Stardust"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
          <img
            src={image13}
            alt="Lana Del Rey - Ultraviolence"
            className="aspect-auto w-[200px] rounded-[4px]"
          />
        </InfiniteSlider>
      </div>
      <div className="w-[55%]">
        <Outlet />
      </div>
    </main>
  );
}
