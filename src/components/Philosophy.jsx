import React from "react";

const Philosophy = () => {
  return (
    <div className="text-stone-950 font-normal h-fit pb-16 md:pb-36 md:rounded-t-[4rem] md:-mt-[4rem] bg-white">
      <div className="text-5xl sm:text-6xl md:text-[8rem] py-12 md:py-36 px-6 md:px-32">
        <h1 className="leading-none">Our</h1>
        <h1
          id="design"
          className="text-6xl sm:text-7xl md:text-[8.5rem] leading-none tracking-wide"
        >
          philosophy
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-14">
        <video
          src="https://cdn.cuberto.com/cb/home/summary/2.mp4?3"
          autoPlay
          muted
          loop
          className="w-[90%] mx-auto md:mx-0 md:w-1/3"
        ></video>
        <div className="space-y-3 text-xl font-medium px-6">
          <p>
            At Grow Studio, I create <br className="hidden md:block" />
            photography and cinematic <br className="hidden md:block" />
            videos that bring stories to life. <br className="hidden md:block" />
            Every project is crafted with <br className="hidden md:block" />
            creativity, detail, and purpose.
          </p>

          <p>
            From personal brands to businesses, <br className="hidden md:block" />
            I help capture moments and create <br className="hidden md:block" />
            visuals that connect, inspire, and <br className="hidden md:block" />
            leave a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
