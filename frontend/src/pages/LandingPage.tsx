import One from "../assets/landing-page/one.png";
import Two from "../assets/landing-page/two.png";
import Three from "../assets/landing-page/three.jpg";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <header
      id="landing-page"
      className="bg-white flex flex-col items-center justify-center py-[50px] px-5 md:h-screen md:flex-row md:px-10 2xl:px-2 2xl:container 2xl:mx-auto">
      <div className="flex flex-col items-start justify-center md:w-2/5 2xl:w-1/2 h-full order-2 md:order-1 text-center md:text-left">
        <h1 className="font-bold text-5xl/15 md:text-8xl/26 p-0 md:w-5/6 2xl:w-full">
          My Canvas Is My Therapy
        </h1>
        <div className="mt-8 md:w-4/5">
          <p className="text-base">
            Welcome to <strong>Snapreka</strong> — a platform where brilliant
            creatives like you shine. Whether you're a poet, artist, sculptor,
            designer, writer, YouTuber, warlord, or even an aura farmer—you
            belong here.
          </p>
        </div>
        <Button
          className="bg-primary-red hover:bg-primary-red-1 cursor-pointer px-5 !py-6 rounded-lg text-white mt-10 w-full md:w-1/2 border-none outline-none"
          onClick={() => (window.location.href = "/auth/signup")}>
          Upload your work here!
        </Button>
      </div>

      <div className="w-full order-1 mb-5 flex flex-col items-center justify-center md:w-3/5 md:h-full md:order-2 md:mb-0 2xl:w-1/2">
        <div className="md:h-[800px] w-full overflow-hidden rounded-lg">
          <img src={One} alt="" className="block w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-4 w-full md:mt-3 md:h-[200px]">
          <div className="h-[100px] md:h-full overflow-hidden rounded-lg">
            <img src={Two} alt="" />
          </div>
          <div className="h-[100px] md:h-full overflow-hidden rounded-lg">
            <img src={Three} alt="" className="-mt-1/2" />
          </div>
        </div>
      </div>
    </header>
  );
}
