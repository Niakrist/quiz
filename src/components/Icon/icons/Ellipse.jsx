import React from "react";

const Ellipse = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="7" fill="currentColor" />
    </svg>
  );
};

export default Ellipse;
