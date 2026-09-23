import React from "react";
import ProjectCard from "./ProjectCard";

// Post images
import photo1 from "../assets/photos/255380.png";
import photo2 from "../assets/photos/255381.png";
import photo3 from "../assets/photos/255382.png";
import photo4 from "../assets/photos/255383.png";
import photo5 from "../assets/photos/255384.png";
import photo6 from "../assets/photos/255377.png";
import photo7 from "../assets/photos/255378.png";
import photo8 from "../assets/photos/255379.png";
import photo1 from "../assets/photos/post 1.png";
import photo2 from "../assets/photos/post 2.png";
import photo3 from "../assets/photos/post 3_.png";
import photo4 from "../assets/photos/post 4_.png";
import photo5 from "../assets/photos/post 5_.png";
import photo6 from "../assets/photos/post 6_.png";
import photo7 from "../assets/photos/post 7_.png";
import photo8 from "../assets/photos/post 8_.png";
import photo9 from "../assets/photos/post 10_.png";
>>>>>>> 360e3c2de242549c4631efc6ef887489d23ec03f

// Numbered images 1
import photo10 from "../assets/photos/172853.jpg.jpeg";
import photo11 from "../assets/photos/172854.jpg.jpeg";
import photo12 from "../assets/photos/172855.jpg.jpeg";
import photo13 from "../assets/photos/172866.jpg.jpeg";

// Numbered images 2
import photo14 from "../assets/photos/205324.jpg.jpeg";
import photo15 from "../assets/photos/205325.jpg.jpeg";
import photo16 from "../assets/photos/205326.jpg.jpeg";
import photo17 from "../assets/photos/205327.jpg.jpeg";
import photo18 from "../assets/photos/205328.jpg.jpeg";
import photo19 from "../assets/photos/205329.jpg.jpeg";
import photo20 from "../assets/photos/205330.jpg.jpeg";
import photo21 from "../assets/photos/205331.jpg.jpeg";
import photo22 from "../assets/photos/205332.jpg.jpeg";

const Projects = () => {
  const leftColumnProjects = [
    { url: photo1 },
    { url: photo2 },
    { url: photo3 },
    { url: photo4 },
    { url: photo5 },
    { url: photo10 },
    { url: photo11 },
    { url: photo12 },
    { url: photo13 },
    { url: photo14 },
    { url: photo15 },
  ];

  const rightColumnProjects = [
    {  url: photo6 },
    {  url: photo7 },
    { url: photo8 },
    {  url: photo9 },
    {  url: photo16 },
    {  url: photo17 },
    {  url: photo18 },
    {  url: photo19 },
    {  url: photo20 },
    {  url: photo21 },
    {  url: photo22 },
  ];

  return (
    <div className="bg-stone-950 text-white h-fit pt-10 md:pt-0 pb-10 md:pb-32 px-6 md:px-32 md:rounded-t-[4rem]">
      <div className="text-5xl sm:text-6xl md:text-9xl py-10 md:py-28 font-light">
        <div>Featured</div>
        <div className="flex flex-wrap items-center md:items-end my-1 gap-2">
          <div className="h-10 sm:h-14 md:h-28 w-16 sm:w-20 md:w-40 rounded-full overflow-hidden">
            <video
              src="https://cdn.cuberto.com/cb/home/featured/header.mp4?2"
              className="w-full h-full object-cover"
              loop
              autoPlay
              muted
              playsInline
            ></video>
          </div>
          <div>
            <span
              id="design"
              className="font-normal tracking-wide text-[2.8rem] sm:text-[3.2rem] md:text-[8.5rem]"
            >
              &nbsp;projects
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-14">
        <div data-scroll data-scroll-speed="0" className="w-[94%] mx-auto md:mx-0 md:w-[36%]">
          {leftColumnProjects.map((project, idx) => (
            <ProjectCard key={idx} title={project.title} url={project.url} />
          ))}
        </div>
        <div data-scroll data-scroll-speed="0.5" className="w-[94%] mx-auto md:mx-0 md:w-[36%] md:mt-52">
          {rightColumnProjects.map((project, idx) => (
            <ProjectCard key={idx} title={project.title} url={project.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;




