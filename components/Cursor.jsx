"use client";
// Cursor.js
// Cursor.js
import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="cursor absolute"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
