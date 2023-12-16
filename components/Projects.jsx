"use client";
import React from "react";
import Link from "next/link";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
// import videosList from "./VideosList";

export default function Projects({ videosList }) {
  const handleClick = (event, url) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div className="text-center  items-center p-4 md:p-8 ">
      <div className="flex justify-center  shadow-2xl shadow-slate-900 bg-gradient-to-l from-slate-800 via-gray-200 to-slate-800 rounded-lg text-center py-2 md:py-4 mb-4 md:mb-8 text-2xl md:text-4xl">
        <div className="flex-grow text-neutral-800 font-extrabold ">
          PROJECTS
        </div>
        <div className="pr-[5vh]">
          <Link href="/">
            <ArrowCircleUpOutlinedIcon
              fontSize="large"
              className="animate-bounce rounded-full text-white bg-stone-700"
            />
          </Link>
        </div>
      </div>
      <div className=" shadow-2xl shadow-slate-900 bg-slate-800 rounded-lg text-center py-2 md:py-4 mb-4 md:mb-8 text-slate-200  text-sm md:text-xl">
        <article className="p-2 md:p-12">
          <p>
            Welcome to My projects showcase! Here, you can explore My innovative
            creations through videos and experience them firsthand by visiting
            the project websites. Each project represents My dedication to
            excellence and creativity.
          </p>
          <br />
          <p>
            Browse through the video links below to get a quick glimpse of My
            work, and when you're ready to dive deeper, click on the project
            titles to access the project websites. Feel free to explore, use,
            and learn more about the solutions I've crafted to make a
            difference.
          </p>
          <br />
          <p>
            I'm passionate about what I do, and these projects reflect My
            commitment to pushing boundaries and solving real-world challenges.
            If you have any questions or feedback, please don't hesitate to
          </p>
        </article>
        <Link
          href="https://www.linkedin.com/in/anupam-sagar-082b33240"
          className="underline decoration-sky-500"
          target="_blank"
        >
          get in touch
        </Link>
      </div>
      <div className="flex flex-wrap rounded-xl scroll-smooth justify-center  bg-slate-400 h-fit w-fit">
        {videosList.map((video) => (
          <Link key={video.href} href={video.href}>
            <video
              onClick={(event) => handleClick(event, video.href)}
              autoPlay={true}
              loop={true}
              muted
              className=" h-[24vh] sm:h-[35vh] hover:ease-in-out duration-300 hover:scale-110 hover:border-2 m-[1vh] rounded border-cyan-200"
              src={video.src}
            />
            <div className="text-center font-extrabold">{video.title}</div>
            <div className="text-center font-medium ">{video.description}</div>
            <div className="text-xs text-center">{video.timeLine}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
