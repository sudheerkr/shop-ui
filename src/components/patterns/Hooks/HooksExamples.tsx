import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Hooks are just javascript functions.
 * Hooks allows developer to use state and component lifeCycle behaviour in function components.
 * By using hooks, we can reduce nesting of components.
 *
 */

// create custom hooks
const useHover = (): [RefObject<HTMLDivElement | null>, boolean] => {
  const [hovering, setHovering] = useState(false);
  const elemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseOver = () => setHovering(true);
  const handleMouseOut = () => setHovering(false);

  useEffect(() => {
    const node = elemRef?.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      node?.removeEventListener("mouseover", handleMouseOver);
      node?.removeEventListener("mouseout", handleMouseOut);
    };
  }, [elemRef?.current]);

  return [elemRef, hovering];
};

export default useHover;