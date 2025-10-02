import React, { useLayoutEffect, useRef, useState } from "react";

const ToolTip = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const toolTipRef = useRef<HTMLDivElement | null>(null);
  const [toolTipStyle, setToolTipStyle] = useState<any>({});

  useLayoutEffect(() => {
    const buttonRect = buttonRef?.current?.getBoundingClientRect();
    const toolTipRect = toolTipRef?.current?.getBoundingClientRect();

    setToolTipStyle({
      top: (buttonRect?.bottom || 0) + window.scrollY,
      left: (buttonRect?.left || 0) + window.screenX,
    });
    return () => {};
  }, []);

  return (
    <>
      <button ref={buttonRef}>Click Me!</button>
      <div
        ref={toolTipRef}
        style={{
          position: "absolute",
          top: `${toolTipStyle.top}px`,
          left: `${toolTipStyle.left}px`,
          background: "lightgray",
          padding: "5px",
          borderRadius: "3px",
        }}
      >
        ToolTip Text
      </div>
    </>
  );
};

export default ToolTip;
