import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen h-18 bg_navbar flex justify-between items-center px-20">
      <p className="font-light text-sm m-3">Copyright © Davi Conrado · 2025</p>
      <div className="flex gap-3">
        <a
          href="https://linkedin.com/in/daviconrado"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors max-w-fit"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/daviconrado"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors max-w-fit"
          aria-label="GitHub Profile"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
