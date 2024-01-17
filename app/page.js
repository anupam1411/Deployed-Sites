"use client";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/contact";
import Image from "next/image";
import videosList from "@/components/VideosList";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";

// import LikeButton from "@/components/LikeButton";

function Page() {
  function TypewriterEffect({ text }) {
    const [displayedText, setDisplayedText] = useState("");
    const [showBlinker, setShowBlinker] = useState(true);

    useEffect(() => {
      let index = 0;
      const intervalId = setInterval(() => {
        setDisplayedText((prevText) => {
          if (index < text.length) {
            index += 1;
            return prevText + text[index - 1];
          } else {
            clearInterval(intervalId);
            setTimeout(() => {
              setShowBlinker(false);
            }, 2000);
            return prevText;
          }
        });
      }, 100); // Adjust the interval as needed

      return () => clearInterval(intervalId);
    }, [text]);

    return (
      <div className="text-2xl animate-fade-up animate-once animate-delay-[400ms] md:text-4xl mt-4">
        {displayedText}
        {showBlinker && "|"}
      </div>
    );
  }

  const handleClick = (event, url) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="h-full bg-gradient-to-b from-zinc-900 via-slate-500 to-stone-700 ">
      <div className="h-1/2 md:h-screen flex flex-col md:flex-row">
        <div className="w-full text-white md:w-1/2 p-4">
          <div className="text-3xl animate-fade-right animate-once animate-duration-[2000ms] pt-0 sm:pt-[30vh] md:text-5xl font-bold">
            HELLO <br />
            I'm ANUPAM
          </div>
          <div className="text-2xl animate-fade-up animate-once animate-delay-[400ms] md:text-4xl mt-4">
            <TypewriterEffect text="Frontend Web Developer" />
          </div>
          {/* <div>
            <LikeButton />
          </div> */}
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
          <Tilt
            className="tilt-img "
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
            perspective={900}
            onEnter={handleMouseEnter}
            onLeave={handleMouseLeave}
            scale={isHovered ? 1.3 : 1}
            transitionSpeed={2000}
            gyroscope={true}
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#7393B3"
            glarePosition="all"
            as="style"
          >
            <Image
              className="w-[50%] md:w-[50%] pointer-events-none  "
              layout="responsive"
              width={1} // half of
              height={1} // half of
              src="/error.gif"
              alt="LOADING>>>>"
              priority={true}
            />
          </Tilt>
        </div>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects videosList={videosList} />
      </section>
      <section id="contact">
        <Contact videosList={videosList} />
      </section>
    </div>
  );
}

export default Page;
