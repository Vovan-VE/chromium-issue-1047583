import React from "react";
import IconsSvg from "./assets/img/icons.svg";

const IconsList:React.FC = () => (
  <span>
    [
    <span className="icon">
      <svg>
        <use xlinkHref={`${IconsSvg}#search`}/>
      </svg>
    </span>
    <span className="icon">
      <svg>
        <use xlinkHref={`${IconsSvg}#calendar`}/>
      </svg>
    </span>
    <span className="icon">
      <svg>
        <use xlinkHref={`${IconsSvg}#up`}/>
      </svg>
    </span>
    <span className="icon">
      <svg>
        <use xlinkHref={`${IconsSvg}#down`}/>
      </svg>
    </span>
    <span className="icon">
      <svg>
        <use xlinkHref={`${IconsSvg}#left`}/>
      </svg>
    </span>
    <span className="icon">
      <svg>
        <use xlinkHref={`${IconsSvg}#right`}/>
      </svg>
    </span>
    ]
  </span>
);

export default IconsList;
