import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updatePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.addEventListener('mousemove', updatePosition);
    };
  }, []);
  return position;
};
export default useMousePosition;
