import React from "react";

const Minus = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="23" stroke="currentColor" strokeWidth="0" />
      <path
        d="M39 30.3846C39 31.1505 38.3813 31.7692 37.6154 31.7692H22.3846C21.6187 31.7692 21 31.1505 21 30.3846C21 29.6187 21.6187 29 22.3846 29H37.6154C38.3813 29 39 29.6187 39 30.3846Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default Minus;
