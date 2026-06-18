import React from "react";
import { motion } from "framer-motion";

const ContactDetails = () => {
  return (
    <div className="bg-stone-950 text-white text-base md:text-2xl font-light text-center py-20 w-full px-6 md:px-20 overflow-hidden">
      <div className="w-full md:w-fit mx-auto flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-8">
        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 2 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-stone-200 overflow-hidden hover:cursor-pointer w-full md:w-fit min-w-[280px]"
        >
          <div className="py-2 md:py-3 px-6 md:px-8 border border-stone-200 rounded-full opacity-0">
            growclickagency@gmail.com
          </div>
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 py-2 md:py-3 text-white bg-stone-950 border-none rounded-full flex items-center justify-center px-6"
          >
            growclickagency@gmail.com
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.1, type: "tween", ease: "easeIn" }}
            className="absolute inset-0 rounded-full py-2 md:py-3 px-6 md:px-8 text-stone-950 bg-stone-200 border-none flex items-center justify-center"
          >
            growclickagency@gmail.com
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 2 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-stone-200 overflow-hidden hover:cursor-pointer w-full md:w-fit min-w-[210px]"
        >
          <div className="py-2 md:py-3 px-6 md:px-8 border border-stone-200 rounded-full opacity-0">
            +91 9619382316
          </div>
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 py-2 md:py-3 text-white bg-stone-950 border-none rounded-full flex items-center justify-center px-6"
          >
            +91 9619382316
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.1, type: "tween", ease: "easeIn" }}
            className="absolute inset-0 rounded-full py-2 md:py-3 px-6 md:px-8 text-stone-950 bg-stone-200 border-none flex items-center justify-center"
          >
            +91 9619382316
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactDetails;
