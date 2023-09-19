import Videos from "@/components/videos";

function Page() {
  return (
    <div className="h-full">
      <Videos /> {/*IMPOERING VIDEOS AND CONTEMNT TO LANDING PAGE*/}
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
