import { useEffect, useState } from "react";

export const useExitIntent = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      const isMovingUpwards = clientY < lastMousePosition.y;

      setLastMousePosition({ x: clientX, y: clientY });

      if (clientY < 50 && isMovingUpwards) {
        setIsExiting(true);

        document.removeEventListener("mousemove", handleMouseMove);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastMousePosition]);

  return isExiting;
};
