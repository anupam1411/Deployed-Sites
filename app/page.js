import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";
import About from "@/components/About";
// import LikeButton from "@/components/LikeButton";

function Page() {
  return (
    <div
      className="h-full bg-gradient-to-b
    from-zinc-900
    via-slate-500
    to-stone-700
    background-animate "
    >
      <div className="h-1/2 md:h-screen flex flex-col md:flex-row">
        <div className="w-full text-white md:w-1/2 p-4">
          <div className="text-3xl  pt-0 sm:pt-[30vh] md:text-5xl font-bold">
            HELLO <br />
            I'm ANUPAM
          </div>
          <div className="text-2xl md:text-4xl mt-4">
            Frontend Web Developer
          </div>
          {/* <div>
            <LikeButton />
          </div> */}
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
          <div>
            <Image
              className="w-[50%] md:w-[50%] pointer-events-none rounded-lg "
              layout="responsive"
              width={450} // half of
              height={100} // half of
              src="/error.gif"
              alt="LOADING>>>>"
              priority={true}
            />
          </div>
          <Link href="#projects" className="mt-4 text-xl md:text-2xl underline">
            Projects
          </Link>
        </div>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default Page;
