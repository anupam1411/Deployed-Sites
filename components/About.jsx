import React from "react";
import Image from "next/image";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import Link from "next/link";

function About() {
  return (
    <div className="p-4 md:p-8 ">
      <div className="flex justify-center shadow-2xl shadow-slate-900 bg-gradient-to-l from-slate-700 via-gray-200 to-slate-700 rounded-lg text-center py-2 md:py-4 mb-4 md:mb-8 text-2xl md:text-4xl">
        <div className="flex-grow font-extrabold">ABOUT ME</div>
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
            Hey there! I'm Anupam Sagar, a recent Computer Science grad who's
            all about tech and just snagged a cool 8.31 CGPA. I'm on the road to
            becoming a Full Stack Developer, and my jam is the MERN (MongoDB,
            Express.js, React, Node.js) stack. By the way, this website? Made
            with Next.js because, you know, staying on top of the latest web dev
            trends!
          </p>
          <p>
            I've been getting my hands dirty with projects, and one standout is
            the Resume Ranking System. Cooked up the backend with Python and
            Flask, and the frontend? Well, that's all ReactJS doing its thing.
            It's not just about the code; it's about connecting the backend
            magic to the user-friendly front end.
          </p>
          <br />
          <p>
            Beyond the coding adventures, I've even dipped my toes into the
            academic scene. Two papers of mine got published in the
            International Journal of Scientific Research in Engineering and
            Management (IJSREM). Fancy, right? So, join me on this journey as I
            dive into the world of MERN stack development. We're in for some
            coding fun and a bit of innovation! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
