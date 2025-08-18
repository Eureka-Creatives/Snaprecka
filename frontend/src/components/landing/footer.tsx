import Logo from "@/assets/landing/logo.svg";
import { Link, useNavigate } from "react-router";
import { Button } from "../ui/button";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="py-6 px-10 font-dm">
      <div className="bg-black text-white rounded-[50px] pt-40 h-[800px] gap-24 flex flex-col">
        <div className="mx-20">
          <div className="flex flex-col justify-center items-center gap-16 relative">
            <Link to="/">
              <img
                src={Logo}
                alt="Angles Logo"
                className="absolute -top-30 left-10 h-12 w-12"
              />
            </Link>
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-8xl font-bold text-gray-100 font-dm">
                Try angles today.
              </h2>
              <div className="max-w-xs text-center text-gray-200 text-lg font-light">
                <span className="relative inline-block before:absolute before:-inset-2 before:block before:bg-green-500 before:rounded-full p-1">
                  <span className="relative text-white text-sm font-semibold dark:text-gray-950">
                    No downloads, installs, or waiting.
                  </span>
                </span>
                <span className="relative left-50 top-8 inline-block before:absolute before:-inset-2 before:block before:bg-yellow-500 before:rounded-full p-1">
                  <span className="relative text-white text-sm font-semibold dark:text-gray-950">
                    Turn strangers into collaborators quickly.
                  </span>
                </span>
                <span className="relative -left-40 top-5 inline-block before:absolute before:-inset-2 before:block before:bg-pink-500 before:rounded-full p-1">
                  <span className="relative text-white text-sm font-semibold dark:text-gray-950">
                    Every photo tells the real event story.
                  </span>
                </span>
              </div>
            </div>
            <Button
              variant="default"
              className="py-8 px-18 rounded-full text-base"
              onClick={() => {
                navigate("/auth/signup");
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm">
            &copy;{new Date().getFullYear()} angles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
