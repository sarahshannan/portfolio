import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

// Updated social profiles object to only include LinkedIn, Twitter, and GitHub
const socialprofils = {
  linkedin: "https://www.linkedin.com/in/sara-shannan",
  twitter: "https://x.com/sarahsh1996",
  github: "https://github.com/your-profile"
};

const ICON_MAPPING = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter
};

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform];
          return (
            <li key={platform}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
