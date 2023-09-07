"use client";
import React, { useState } from "react";
import Link from "next/link";

function Page() {
  const [pdfOpen, setPdfOpen] = useState(false);

  const openPdfViewer = () => {
    setPdfOpen(true);
  };

  const closePdfViewer = () => {
    setPdfOpen(false);
    console.log();
  };
  const handleClick = (event, url) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  const videosList = [
    {
      href: "https://fidget-games.netlify.app/",
      src: "project-videos/fidget-games.mp4",
    },
    {
      href: "https://anupam-group-freelance-hitachi.netlify.app/",
      src: "project-videos/hitachi-task.mp4",
    },
    {
      href: "https://khaana-peena.netlify.app/",
      src: "project-videos/restro-site.mp4",
    },
    {
      href: "https://to-d0-list-app.netlify.app/",
      src: "project-videos/to-do-list.mp4",
    },
    {
      href: "https://random-person-generatorr.netlify.app/",
      src: "project-videos/random-person-generator.mp4",
    },
    {
      href: "https://quote-generotor.netlify.app/",
      src: "project-videos/quote-generator.mp4",
    },
    {
      href: "https://bespoke-lolly-232ca0.netlify.app/",
      src: "project-videos/password-generator.mp4",
    },
    {
      href: "https://colorr-generatorr.netlify.app/",
      src: "project-videos/color-generator.mp4",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center h-full bg-slate-400 ">
      {videosList.map((video) => (
        <Link key={video.href} href={video.href}>
          <video
            onClick={(event) => handleClick(event, video.href)}
            autoPlay={true}
            loop={true}
            muted
            className=" h-[30vh] sm:h-[35vh]  hover:scale-110 hover:border-2 m-1 rounded border-neutral-200"
            src={video.src}
          />
        </Link>
      ))}
    </div>
    //   <div className="text-center text-6xl pt-44 bg-slate-400 h-[100vh] bg-cover bottom-0 bg">
    //   {"<<<"}CONTENT{">>>"} <br />
    //   <span className="text-4xl">
    //     <br />
    //     CLICK ON THE VIDEO TO OPEN THE RESPECTIVE PROJECT
    //     <br />
    //     EACH PROJECT VISIBLE ON THE SITE IS DEPLOYED ON NETLIFY
    //     <br /> CHECKOUT THE VIDEOS TO KNOW HOW TO USE THE WEBSITE
    //   </span>
    // </div>
  );
}

export default Page;
