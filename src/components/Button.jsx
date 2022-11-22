import React from "react";

function Button({ text, link, styles }) {
  return (
    <a href={link}>
      <button
        className={`btn btn-outline hover:bg-gradient-to-r hover:text-white hover:border-transparent from-purple-400 to-pink-400 ${styles}`}>
        {text}
      </button>
    </a>
  );
}

export default Button;
