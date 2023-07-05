import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <div className="App__footer">
      <p>
        I built this project through the guidance of a React JS full course
        video (2023) from JavaScript Mastery.
      </p>
      <p>Check out the video on this link:</p>
      <a
        className={`App__anchorTag ${darkMode && "darkMode__children"}`}
        href="https://www.youtube.com/watch?v=b9eMGE7QtTk&t=878s"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Click here!
      </a>
    </div>
  );
};

export default Footer;
