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
          <div>
            <Image
              className="w-[50%] md:w-[50%]  rounded-lg "
              layout="responsive"
              width={450} // half of
              height={100} // half of
              src="/Pandora.gif"
            />
          </div>
          <Link href="#projects" className="mt-4 text-xl md:text-2xl underline">
            Projects
          </Link>
        </div>
      </div>
      <About />
      <Projects /> {/*IMPORTING VIDEOS AND CONTENT TO LANDING PAGE*/}
    </div>
  );
}

export default Page;
