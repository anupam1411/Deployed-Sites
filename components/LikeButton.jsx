import React from "react";

function LikeButton() {
  return <div>LikeButton</div>;
}

export default LikeButton;
// "use client";
// import React, { useState, useEffect } from "react";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import { parse, serialize } from "cookie";

// const LikeButton = () => {
//   const [likes, setLikes] = useState(0);
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const cookies = parse(document.cookie);

//     if (cookies.likes) {
//       setLikes(parseInt(cookies.likes));
//       setLiked(true);
//     }
//   }, []);

//   const handleLikeClick = () => {
//     if (!liked) {
//       setLikes(likes + 1);
//       setLiked(true);

//       // Set a cookie to track that the device has liked the website
//       document.cookie = serialize("likes", likes + 1, {
//         path: "/",
//         maxAge: 60 * 60 * 24 * 365, // 1 year
//       });
//     }
//   };

//   return (
//     <div className="flex items-center space-x-2">
//       <button
//         className={`bg-${
//           liked ? "gray" : "blue"
//         }-500 text-white p-2 rounded-full hover:bg-${
//           liked ? "gray" : "blue"
//         }-600 focus:outline-none`}
//         onClick={handleLikeClick}
//         disabled={liked}
//       >
//         <ThumbUpIcon />
//       </button>
//       <span>{likes} Likes</span>
//     </div>
//   );
// };

// export default LikeButton;
