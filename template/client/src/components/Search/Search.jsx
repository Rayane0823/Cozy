import React from "react";
import "./Search.scss"; 

const Search = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      viewBox="0 0 24 24"
      fill="none"
      height={24}
      {...props}
      onMouseEnter={() => props.setIsHovered(true)}
      onMouseLeave={() => props.setIsHovered(false)}
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={props.isHovered ? "#3AA39F" : "#17183B"}
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="svg-path" 
      />
      <path
        d="M20.9999 21L16.6499 16.65"
        stroke={props.isHovered ? "#3AA39F" : "#17183B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg-path" 
      />
    </svg>
  );
};

export default Search;
