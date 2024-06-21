import React from 'react';

export const RightArrowSVG: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="100"
      height="10"
      viewBox="0 0 100 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M100 5L92.5 0.669873V9.33013L100 5ZM0 5.75H93.25V4.25H0V5.75Z"
        fill="#8C8C8C"
      />
    </svg>
  );
};
export default RightArrowSVG;
