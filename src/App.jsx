import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reel from "./components/Reel";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import FollowUs from "./components/FollowUs";
import SocialMediaLinks from "./components/SocialMediaLinks";
import ContactDetails from "./components/ContactDetails";

const App = () => {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <Reel /> */}
      <Services />
      <Project />
      <Philosophy />
      {/* <FollowUs /> */}
      {/* <SocialMediaLinks /> */}
      <ContactDetails />
    </div>
  );
};

export default App;
