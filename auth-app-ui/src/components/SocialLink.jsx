import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex my-2 justify-center">
      <a
        href=""
        className="border-2 border-gray-200 rounded-full p-2 mx-1 hover:border-green-500 hover:bg-green-500 hover:text-white transition duration-500 ease-in-out transform hover:scale-105"
      >
        <FaFacebook className="text-sm" />
      </a>
      <a
        href=""
        className="border-2 border-gray-200 rounded-full p-2 mx-1 hover:border-green-500 hover:bg-green-500 hover:text-white transition duration-500 ease-in-out transform hover:scale-105"
      >
        <FaGoogle className="text-sm" />
      </a>
      <a
        href=""
        className="border-2 border-gray-200 rounded-full p-2 mx-1 hover:border-green-500 hover:bg-green-500 hover:text-white transition duration-500 ease-in-out transform hover:scale-105"
      >
        <FaTwitter className="text-sm" />
      </a>
    </div>
  );
}

export default SocialLinks;
