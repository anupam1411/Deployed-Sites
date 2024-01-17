import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="text-6xl font-sans font-extrabold flex items-center justify-center text-center  sm:h-[90vh] h-full text-slate-100 bg-slate-600 p-20 sm:p-0 ">
      THANKKSSSS for texting me <br /> will get back to you soon enough Click
      <br />
      on the "HOME" to get back !!! <br />
      <br />
      <br />
      <Link href="/" className="text-black hidden lg:block">
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          HOME
        </button>
      </Link>
    </div>
  );
}

export default page;
