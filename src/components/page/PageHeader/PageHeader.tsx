import React from 'react';
import UiSvg from 'assets/img/ui.svg';

const PageHeader: React.FC = () => {
  return (
    <header>
      <span className="icon">
        <svg>
          <use xlinkHref={`${UiSvg}#down`} />
        </svg>
      </span>
      <a href="#/" className="icon">
        <svg>
          <use xlinkHref={`${UiSvg}#expense`} />
        </svg>
      </a>
      <a href="#/" className="icon">
        <svg>
          <use xlinkHref={`${UiSvg}#income`} />
        </svg>
      </a>
      <a href="#/" className="icon">
        <svg>
          <use xlinkHref={`${UiSvg}#transaction`} />
        </svg>
      </a>
      <a href="#/" className="icon">
        <svg>
          <use xlinkHref={`${UiSvg}#debt`} />
        </svg>
      </a>
      <a href="#/" className="icon">
        <svg>
          <use xlinkHref={`${UiSvg}#goal`} />
        </svg>
      </a>
      <a href="#/" className="icon">
        <svg>
          <use xlinkHref={`${UiSvg}#settings`} />
        </svg>
      </a>
      <a href="#/" className="icon">
        <svg>
          <use xlinkHref={`${UiSvg}#user`} />
        </svg>
      </a>
    </header>
  );
};

export default PageHeader;
