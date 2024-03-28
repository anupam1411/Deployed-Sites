"use client";
import React, { useState } from "react";
import Link from "next/link";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";

//Components
import PhoneNumberPopup from "./PhoneNumberPopup"; // Import the PhoneNumberPopup component
import EmailPopup from "./EmailPopup";
import PdfViewer from "@/components/PdfViewer"; // Adjust the import path accordingly
import GitPopup from "./GitPopup";
import LinkedinPopup from "./LinkedinPopup";
import PdfPopup from "./PdfPopup";
import InstaPopup from "./InstaPopup";
import { useRouter } from "next/navigation";

function Navbar() {
  const [showPhoneNumberPopup, setShowPhoneNumberPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [showGitPopup, setShowGitPopup] = useState(false);
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [showInstaPopup, setShowInstaPopup] = useState(false);

  const router = useRouter();
  const handleNavClick = (section, e) => {
    e.preventDefault();
    router.push(`#${section}`);
    console.log(`#${section}`);
  };

  const openEmailInNewTab = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=sagaranupam2@gmail.com"
    );
  };

  const handleMouseEnter = (setShow) => {
    setShow(true);
  };

  const handleMouseLeave = (setShow) => {
    setShow(false);
  };

  const openPdfViewer = () => {
    setPdfOpen(true);
  };

  const closePdfViewer = () => {
    setPdfOpen(false);
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          // Clipboard write was successful
          alert("Phone number copied to clipboard!");
        })
        .catch((error) => {
          // Handle any errors that occurred during clipboard write
          console.error("Unable to copy to clipboard:", error);
          alert("Copy to clipboard failed.");
        });
    } else {
      // Fallback for browsers that don't support the Clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = text;

      // Make the textarea invisible
      textArea.style.position = "fixed";
      textArea.style.top = 0;
      textArea.style.left = 0;
      textArea.style.width = "1px";
      textArea.style.height = "1px";
      textArea.style.opacity = 0;

      document.body.appendChild(textArea);

      // Select the text
      textArea.select();

      try {
        // Execute the copy command
        const success = document.execCommand("copy");
        if (success) {
          alert("Phone number copied to clipboard!");
        } else {
          alert("Copy to clipboard failed.");
        }
      } catch (err) {
        console.error("Unable to copy to clipboard:", err);
        alert("Copy to clipboard failed.");
      } finally {
        // Clean up the textarea
        document.body.removeChild(textArea);
      }
    }
  };

  const copyAlert = () => {
    copyToClipboard("+919175003239");
  };

  // const copyToClipboard = async (text) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     alert("You have copied My Number, Try giving me a Call Sometimes....");
  //   } catch (error) {
  //     console.error("Unable to copy to clipboard:", error);
  //     alert("Copy to clipboard failed.");
  //   }
  // };

  // const copyAlert = () => {
  //   copyToClipboard("9175003239");
  // };

  return (
    <div>
      <div className=" w-full flex flex-col md:flex-row">
        <div className=" w-full md:w-1/2 text-2xl md:text-4xl flex justify-center h-[7vh] bg-slate-700 items-center">
          <h1 className="text-white animate-rotate-y animate-once text font-bold">
            <Link href="/">ANUPAM SAGAR</Link>
          </h1>
        </div>
        <div className=" w-full md:w-1/2 relative">
          <ul className="flex flex-row place-content-evenly items-center h-[7vh]">
            <li>
              <Link href="https://github.com/anupam1411" target="_blank">
                <GitHubIcon
                  onMouseEnter={() => handleMouseEnter(setShowGitPopup)}
                  onMouseLeave={() => handleMouseLeave(setShowGitPopup)}
                  fontSize="large"
                />
              </Link>{" "}
              {showGitPopup && (
                <div className="flex justify-center absolute">
                  <GitPopup onClose={() => handleMouseLeave(setShowGitPopup)} />
                </div>
              )}
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/anupam-sagar-082b33240"
                target="_blank"
              >
                <LinkedInIcon
                  onMouseEnter={() => handleMouseEnter(setShowLinkedIn)}
                  onMouseLeave={() => handleMouseLeave(setShowLinkedIn)}
                  fontSize="large"
                  className="text-[#0e76a8]"
                />
              </Link>
              {showLinkedIn && (
                <div className="flex justify-center absolute">
                  <LinkedinPopup
                    onClose={() => handleMouseLeave(setShowLinkedIn)}
                  />
                </div>
              )}
            </li>
            <li>
              <DescriptionTwoToneIcon
                onMouseEnter={() => handleMouseEnter(setShowPdfPopup)}
                onMouseLeave={() => handleMouseLeave(setShowPdfPopup)}
                onClick={openPdfViewer}
                fontSize="large"
                className=" text-[#3f51b5] "
              />
              <PdfViewer open={pdfOpen} onClose={closePdfViewer} />
              {showPdfPopup && (
                <div className="flex justify-center absolute">
                  <PdfPopup onClose={() => handleMouseLeave(setShowPdfPopup)} />
                </div>
              )}
            </li>
            <li>
              <Link href="/">
                <CallTwoToneIcon
                  fontSize="large"
                  onMouseEnter={() => handleMouseEnter(setShowPhoneNumberPopup)}
                  onMouseLeave={() => handleMouseLeave(setShowPhoneNumberPopup)}
                  onClick={copyAlert}
                  className="text-[#4caf50]"
                />
                {showPhoneNumberPopup && (
                  <div className="flex justify-center absolute">
                    <PhoneNumberPopup
                      onClose={() => handleMouseLeave(setShowPhoneNumberPopup)}
                    />
                  </div>
                )}
              </Link>
            </li>
            <li>
              <Link href="" onClick={openEmailInNewTab}>
                <EmailTwoToneIcon
                  onMouseEnter={() => handleMouseEnter(setShowEmailPopup)}
                  onMouseLeave={() => handleMouseLeave(setShowEmailPopup)}
                  fontSize="large"
                  className="text-[#f44336]"
                />
                {showEmailPopup && (
                  <div className="flex justify-center absolute">
                    <EmailPopup
                      onClose={() => handleMouseLeave(setShowEmailPopup)}
                    />
                  </div>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/anupamnopqrstuvwxyz/"
                target="_blank"
              >
                <InstagramIcon
                  onMouseEnter={() => handleMouseEnter(setShowInstaPopup)}
                  onMouseLeave={() => handleMouseLeave(setShowInstaPopup)}
                  className="text-pink-600"
                  fontSize="large"
                />
              </Link>{" "}
              {showInstaPopup && (
                <div className="flex justify-center absolute">
                  <InstaPopup
                    onClose={() => handleMouseLeave(setShowInstaPopup)}
                  />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="breadcrumb flex  bg-slate-400">
        <div className="rounded-b-3xl md:rounded-b-none md:rounded-br-xl bg-slate-200 flex place-content-evenly w-full md:w-1/2 animate-fade-right animate-once animate-duration-[2000ms] text-lg font-semibold">
          <a
            href="/"
            className="breadcrumb-link text-black hover:text-slate-400"
          >
            HOME
          </a>
          /
          <button
            onClick={(e) => handleNavClick("#about", e)}
            className="breadcrumb-button text-black hover:text-slate-400"
          >
            ABOUT
          </button>
          /
          <button
            onClick={(e) => handleNavClick("#projects", e)}
            className="breadcrumb-button text-black hover:text-slate-400"
          >
            PROJECTS
          </button>
          /
          <button
            onClick={(e) => handleNavClick("#contact", e)}
            className="breadcrumb-button text-black hover:text-slate-400"
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
