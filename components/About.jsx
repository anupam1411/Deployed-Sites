import React from "react";
import Image from "next/image";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import Link from "next/link";

function About() {
  return (
    <div className="p-4 md:p-8 ">
      <div className="flex justify-center shadow-2xl shadow-slate-900 bg-gradient-to-l from-slate-700 via-gray-200 to-slate-700 rounded-lg text-center py-2 md:py-4 mb-4 md:mb-8 text-2xl md:text-4xl">
        <div class="flex-grow font-extrabold">ABOUT ME</div>
        <div className="pr-[5vh]">
          <Link href="/">
            <ArrowCircleUpOutlinedIcon
              fontSize="large"
              className="animate-bounce rounded-full text-white bg-stone-700"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-slate-500 rounded-md p-4 md:p-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
          <Image
            src="/coder.gif"
            layout="responsive"
            width={1}
            height={1}
            className="rounded-md"
            alt="CODING"
          />
        </div>
        <div className="text-sm md:text-xl">
          <p className="mb-4">
            I’m a Frontend Web Developer located in India. I am an innovative
            Frontend developer with 2 years of experience in designing and
            developing personal web applications.
          </p>
          <p>
            I'm a recent Computer Engineering graduate interested in web
            development roles. I have a strong foundation in front-end
            development technologies such as HTML, CSS, JavaScript,TailwindCSS,
            ReactJS and Next.js, with completed projects showcasing my skills.
            I've also used Prompt Engineering for web app development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
