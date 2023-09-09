"use client";
import React, { useState } from "react";
import Link from "next/link";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

//Components
import PhoneNumberPopup from "./PhoneNumberPopup"; // Import the PhoneNumberPopup component
import EmailPopup from "./EmailPopup";
import PdfViewer from "@/components/PdfViewer"; // Adjust the import path accordingly
import GitPopup from "./GitPopup";
import LinkedinPopup from "./LinkedinPopup";
import PdfPopup from "./PdfPopup";

function Navbar() {
  const [showPhoneNumberPopup, setShowPhoneNumberPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [showGitPopup, setShowGitPopup] = useState(false);
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

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

  const copyAlert = () => {
    navigator.clipboard.writeText("9175003239");
    alert("Phone number copied to clipboard!");
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 text-2xl md:text-4xl flex justify-center h-[7vh] bg-slate-700 items-center">
        <h1 className="text-white text font-bold">
          <Link href="/">My Projects</Link>
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
            <TextSnippetIcon
              onMouseEnter={() => handleMouseEnter(setShowPdfPopup)}
              onMouseLeave={() => handleMouseLeave(setShowPdfPopup)}
              onClick={openPdfViewer}
              fontSize="large"
              className=" text-[#3f51b5] "
            />
            <PdfViewer open={pdfOpen} onClose={closePdfViewer} />
          </li>
          {showPdfPopup && (
            <div className="flex justify-center absolute">
              <PdfPopup onClose={() => handleMouseLeave(setShowPdfPopup)} />
            </div>
          )}
          <li>
            <Link href="/">
              <CallIcon
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
              <EmailIcon
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
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
