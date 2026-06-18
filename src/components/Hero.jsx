import React from "react";

const Hero = () => {
  return (
    <div className="text-4xl md:text-8xl tracking-tight md:leading-[7rem] w-full min-h-[50vh] md:h-[70vh] flex flex-col items-start justify-center px-6 md:px-32 font-normal md:font-light pt-24 pb-10 md:py-0">
      <div>We are a professional</div>
      <div className="flex flex-wrap items-center">
        <div className="h-10 md:h-24 w-16 md:w-36 rounded-full overflow-hidden">
          <video
            src="https://cdn.cuberto.com/cb/home/hero/1.mp4"
            loop
            autoPlay
            muted
            playsInline
          ></video>
        </div>
        <div>
          <span
            id="design"
            className="font-normal tracking-wide text-[2.2rem] sm:text-[2.8rem] md:text-[6.5rem]"
          >
            &nbsp;PhotograPher&nbsp;
          </span>
          &
        </div>
      </div>
      <div>Videographer agency</div>
    </div>
  );
};

export default Hero;
