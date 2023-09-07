import React from "react";
import { Dialog, IconButton } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

function PdfViewer({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <div className="p-4">
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          className="absolute top-4 right-4"
        >
          <CancelRoundedIcon fontSize="large" />
        </IconButton>
        <embed
          src="assets/resume.pdf"
          className="w-full h-[80vh]"
          type="application/pdf"
        />
      </div>
    </Dialog>
  );
}

export default PdfViewer;
