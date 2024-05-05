import React from 'react';

export const LineSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="2"
      height="57"
      viewBox="0 0 2 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="1.25195"
        y1="-0.0078125"
        x2="1.25195"
        y2="97.0058"
        stroke="white"
        stroke-opacity="0.5"
      />
    </svg>
  );
};
export default LineSVG;
