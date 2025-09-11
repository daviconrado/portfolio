import React from "react";
import ContentSummary from "./ContentSummary.tsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="flex flex-col justify-center gap-5">
        <ContentSummary emoji="👋" content="Saudações" />
        <h1 className="font-extrabold text-5xl">
          Davi
          <br />
          Conrado
        </h1>
        <p className="font-light">Web full-stack developer</p>
        <div className="flex gap-3">
          <a
            href="https://linkedin.com/in/daviconrado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors max-w-fit"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/daviconrado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors max-w-fit"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-62 h-62 md:w-84 md:h-84 lg:w-100 lg:h-100 rounded-full overflow-hidden">
          <img src="avatar.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-end gap-4">
        <a
          href="/curriculo.pdf"
          download
          className="flex items-center gap-2 cursor-pointer text-purple-900 hover:text-purple-700 transition-colors border border-purple-800 hover:border-purple-600 px-4 py-2 rounded-lg max-w-fit"
        >
          <RiDownloadLine />
          Baixar CV
        </a>
      </div>
    </div>
  );
};

export default Home;
