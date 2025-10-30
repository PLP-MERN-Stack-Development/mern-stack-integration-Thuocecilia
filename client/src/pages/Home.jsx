// src/pages/Home.jsx
import React from "react";

const SIDEBAR_WIDTH = 220; // sidebar width
const BUFFER = 16; // extra padding

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 p-6"
      style={{ paddingLeft: SIDEBAR_WIDTH + BUFFER }}
    >
      <h1 className="text-5xl font-serif font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 drop-shadow-lg">
        Welcome to CampusConnect
      </h1>

      <p className="text-xl text-center max-w-2xl mb-4 font-sans text-gray-800">
        CampusConnect is your <span className="text-purple-700 font-semibold">one-stop platform</span> for sharing posts, exploring categories, and connecting with fellow students. 
        Stay updated, share ideas, and engage with the campus community easily.
      </p>

      <p className="text-center text-gray-700 max-w-xl italic font-mono">
        Navigate through the posts, create your own, and explore categories. Manage your profile, comment on posts, and enjoy a seamless experience on CampusConnect.
      </p>
    </div>
  );
};

export default Home;
