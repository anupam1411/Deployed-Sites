"use client";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import About from "@/components/About";

function Page() {
  return (
    <div className="h-full bg-slate-400">
      <div className="h-1/2 md:h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <div className="text-3xl pt-0 sm:pt-[30vh] md:text-5xl font-bold">
            HELLO <br />
            I'm ANUPAM
          </div>
          <div className="text-2xl md:text-4xl mt-4">
            Frontend Web Developer
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
            <Image
              src="/coder.gif"
              layout="responsive"
              width={1}
              height={1}
              className="rounded-md"
              alt="CODING"
              priority
            />
          </div>
          <Link href="#projects" className="mt-4 text-xl md:text-2xl underline">
            Projects
          </Link>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />{" "}
      </div>
      {/*IMPORTING VIDEOS AND CONTENT TO LANDING PAGE*/}
    </div>
  );
}

export default Page;
