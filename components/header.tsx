import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface Props {
  className?: string;
}

function Header(props: Props) {
  return (
    <div
      className={`flex flex-row space-x-4 ${props.className} justify-center md:justify-start`}
    >
      <a
        href="https://linkedin.com/in/eric-mlin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://github.com/ericlin7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={20} />
      </a>
      <a href="mailto:e44lin@uwaterloo.ca">
        <FaEnvelope size={20} />
      </a>
    </div>
  );
}

export default Header;
