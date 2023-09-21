import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="p-4 md:p-8">
      <div className="bg-slate-700 text-white rounded-md text-center py-2 md:py-4 mb-4 md:mb-8 text-2xl md:text-4xl">
        ABOUT ME
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
        <div className="text-lg md:text-xl">
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
