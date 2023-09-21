import React from "react";
import Link from "next/link";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

export default function Projects() {
  const handleClick = (event, url) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  const videosList = [
    {
      href: "https://fidget-games.netlify.app/",
      src: "project-videos/fidget-games.mp4",
      title: "FIDGET GAMES",
      timeLine: "July 2023 - July 2023",
    },
    {
      href: "https://anupam-group-freelance-hitachi.netlify.app/",
      src: "project-videos/hitachi-task.mp4",
      title: "DATABASE MANAGEMENT SYSTEM",
      timeLine: "November 2022 - November 2022",
    },
    {
      href: "https://khaana-peena.netlify.app/",
      src: "project-videos/restro-site.mp4",
      title: "RESTRAUNT WEBSITE (KHAANA-PEENA)",
      timeLine: "July 2022 - August 2022",
    },
    {
      href: "https://to-d0-list-app.netlify.app/",
      src: "project-videos/to-do-list.mp4",
      title: "TO-DO LIST",
      timeLine: "June 2022 - July 2022",
    },
    {
      href: "https://random-person-generatorr.netlify.app/",
      src: "project-videos/random-person-generator.mp4",
      title: "RANDOM PERSON GENERATOR",
      timeLine: "June 2022 - June 2022",
    },
    {
      href: "https://quote-generotor.netlify.app/",
      src: "project-videos/quote-generator.mp4",
      title: "QUOTE GENERATOR",
      timeLine: "August 2022 - September 2022",
    },
    {
      href: "https://bespoke-lolly-232ca0.netlify.app/",
      src: "project-videos/password-generator.mp4",
      title: "PASSWORD GENERATOR",
      timeLine: "September 2022 - September 2022",
    },
    {
      href: "https://colorr-generatorr.netlify.app/",
      src: "project-videos/color-generator.mp4",
      title: "COLOR GENERATOR",
      timeLine: "September 2022 - October 2022",
    },
  ];
  return (
    <div className="text-center  items-center p-4 md:p-8 ">
      <div className="bg-slate-700 text-white rounded-md text-center py-2 md:py-4 mb-4 md:mb-8 text-2xl md:text-4xl">
        PROJECTS
      </div>
      <Link href="/">
        <ArrowCircleUpOutlinedIcon
          fontSize="large"
          className="animate-bounce rounded-full text-white bg-gray-700"
        />
      </Link>
      <div className="flex flex-wrap rounded-xl scroll-smooth justify-center bg-slate-400 h-fit w-fit">
        {videosList.map((video) => (
          <Link key={video.href} href={video.href}>
            <video
              onClick={(event) => handleClick(event, video.href)}
              autoPlay={true}
              loop={true}
              muted
              className=" h-[30vh] sm:h-[35vh] hover:ease-in-out duration-300 hover:scale-110 hover:border-2 m-[1vh] rounded border-cyan-200"
              src={video.src}
            />
            <div className="text-center font-semibold">{video.title}</div>
            <div className="text-xs text-center">{video.timeLine}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
