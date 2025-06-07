import React from "react";
import One from "../assets/landing-page/one.png";
import Two from "../assets/landing-page/two.png";
import Three from "../assets/landing-page/three.jpg";

export const LandingPage = () => {
  return (
    <section id="landing-page" className="bg-white md:h-screen py-3">
      <div className="h-full flex flex-col md:flex-row py-[50px] px-5 md:px-[100px]">
        <div className="flex flex-col md:w-[45%] h-full order-2 md:order-1 text-center md:text-left">
          <h1 className="font-bold text-5xl/15 md:text-8xl/26 p-0 md:w-[90%]">
            My Canvas
            Is My Therapy
          </h1>
          <div className="mt-8 md:w-[80%]">
            <p className="text-base">
            Welcome to <strong>Snapreka</strong> — a platform where brilliant
            creatives like you shine. Whether you're a poet, artist, sculptor,
            designer, writer, YouTuber, warlord, or even an aura farmer—you
            belong here.
          </p>
          
          </div>
          <button className="bg-[#BF3A2B] text-white mt-[2em] w-full md:w-[50%] border-none outline-none">
            Upload your work here!
          </button>
          
        </div>
        <div className="w-full md:w-[55%] md:h-full order-1 md:order-2 mb-5 md:mb-0">
          <div className="md:h-[380px] overflow-hidden rounded-lg">
            <img src={One} alt="" />
          </div>
          <div className="flex gap-3 mt-4 md:mt-3 md:h-[200px]">
            <div className="w-1/2 h-[100px] md:h-full overflow-hidden rounded-lg">
              <img src={Two} alt=""/>
            </div>
            <div className="w-1/2 h-[100px] md:h-full overflow-hidden rounded-lg">
              <img src={Three} alt="" className="mt-[-50%]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
