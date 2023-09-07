"use client";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import PhoneNumberPopup from "./PhoneNumberPopup"; // Import the PhoneNumberPopup component
import EmailPopup from "./EmailPopup";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PdfViewer from "@/components/PdfViewer"; // Adjust the import path accordingly

function Navbar() {
  const [showPhoneNumberPopup, setShowPhoneNumberPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  const openEmailInNewTab = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=sagaranupam2@gmail.com"
    );
  };

  const handleCallMouseEnter = () => {
    setShowPhoneNumberPopup(true);
  };

  const handleCallMouseLeave = () => {
    setShowPhoneNumberPopup(false);
  };

  const handleEmailMouseEnter = () => {
    setShowEmailPopup(true);
  };

  const handleEmailMouseLeave = () => {
    setShowEmailPopup(false);
  };

  const openPdfViewer = () => {
    setPdfOpen(true);
  };

  const closePdfViewer = () => {
    setPdfOpen(false);
  };

  const copyPhoneNumberToClipboard = () => {
    navigator.clipboard.writeText("Your phone number here");
    alert("Phone number copied to clipboard!");
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 text-2xl md:text-4xl flex justify-center h-[7vh] bg-slate-700 items-center">
        <h1 className="text-white font-bold">My Projects</h1>
      </div>
      <div className=" w-full md:w-1/2 relative">
        <ul className="flex flex-row place-content-evenly items-center h-[7vh]">
          <li>
            <Link href="https://github.com/anupam1411" target="_blank">
              <GitHubIcon fontSize="large" style={{ color: "black" }} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/anupam-sagar-082b33240"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" style={{ color: "#0e76a8" }} />
            </Link>
          </li>
          <li>
            <TextSnippetIcon
              onClick={openPdfViewer}
              fontSize="large"
              style={{ cursor: "pointer", color: "#3f51b5" }}
            />
            <PdfViewer open={pdfOpen} onClose={closePdfViewer} />
          </li>
          <li>
            <Link href="/">
              <CallIcon
                fontSize="large"
                onMouseEnter={handleCallMouseEnter}
                onMouseLeave={handleCallMouseLeave}
                onClick={copyPhoneNumberToClipboard}
                style={{ color: "#4caf50", cursor: "pointer" }}
              />
              {showPhoneNumberPopup && (
                <div className="flex justify-center absolute">
                  <PhoneNumberPopup onClose={handleCallMouseLeave} />
                </div>
              )}
            </Link>
          </li>
          <li>
            <Link href="" onClick={openEmailInNewTab}>
              <EmailIcon
                onMouseEnter={handleEmailMouseEnter}
                onMouseLeave={handleEmailMouseLeave}
                fontSize="large"
                style={{ color: "#f44336" }}
              />
              {showEmailPopup && (
                <div className="flex justify-center absolute">
                  <EmailPopup onClose={handleEmailMouseLeave} />
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
