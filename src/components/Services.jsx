import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const Services = () => {
  return (
    <div className="w-full h-[70vh] md:h-[120vh] flex items-center justify-center gap-x-9">
      {/* <img
        // loop
        // autoPlay
        // muted
        src="./ass"
        // className="hidden lg:block w-1/3"
      ></img> */}
      <img src={logo} alt="Services" className="w-[90%] md:w-1/3 object-cover rounded-2xl" />

      <div className="space-y-9 text-xl md:text-2xl px-6 md:px-0 font-normal">
        <p>
          Grow Studio is a leading professional Photographer & Videographer{" "}
          <br className="hidden md:block" />
          agency focused on designing and branding jewellery design.
        </p>
        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 3 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-black overflow-hidden hover:cursor-pointer"
        >
          
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.2, type: "tween", ease: "easeIn" }}
            className="absolute inset-0 rounded-xl py-9 md:py-16 text-white border-2 bg-stone-950 border-none"
          >
            How we work
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
