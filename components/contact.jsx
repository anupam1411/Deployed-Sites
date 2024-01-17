import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="w-1/2 contactForm  p-8 rounded hidden lg:block">
        <Image
          src="/texting.gif"
          height={1}
          width={1}
          className="w-1/2 h-1/2 rounded-full"
        ></Image>
      </div>
      <div className="w-1/2">
        <div className="contactForm w-[40vw]  bg-[#FFEEFE] rounded shadow-md">
          <h2 className="text-5xl font-semibold text-center pt-4">
            GET IN TOUCH
          </h2>
          <form
            action="https://formsubmit.co/sagaranupam2@gmail.com"
            method="POST"
            className="p-8"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="hidden"
                name="_next"
                value="https://anupam-deploys.netlify.app/thankyou"
              ></input>
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="text"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                E-mail ID:
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="email"
                name="Email"
                placeholder="for ex: youremail@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message:
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-md"
                type="text"
                name="message"
              />
            </div>
            <button
              className="bg-[#b869bf] text-white font-bold py-2 px-4 rounded-md hover:bg-[#d836c8]"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
