import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const Services = () => {
  return (
    <div className="w-full h-fit md:h-[120vh] flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-9 pt-10 pb-20 md:py-0">
      <img src={logo} alt="Services" className="w-[85%] md:w-1/3 object-cover rounded-2xl" />

      <div className="space-y-6 md:space-y-9 text-lg md:text-2xl px-8 md:px-0 font-normal text-center md:text-left">
        <p>
          Grow Studio is a leading professional Photographer & Videographer{" "}
          <br className="hidden md:block" />
          agency focused on designing and branding jewellery design.
        </p>
        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 3 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-black overflow-hidden hover:cursor-pointer mx-auto md:mx-0 w-fit"
        >
          <div className="py-3 md:py-4 px-8 md:px-10 border border-black rounded-full">
            How we work
          </div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.2, type: "tween", ease: "easeIn" }}
            className="absolute inset-0 rounded-full py-3 md:py-4 px-8 md:px-10 text-white bg-stone-950 border-none flex items-center justify-center"
          >
            How we work
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
