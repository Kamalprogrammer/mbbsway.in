import React, { useRef, useEffect, useState } from "react";

export default function UnderlineHeading({ text }) {
  const textRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, right: 0 });

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      const range = document.createRange();
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);

      let lastNode = null;
      while (walker.nextNode()) lastNode = walker.currentNode;

      if (lastNode) {
        range.selectNodeContents(lastNode);
        const rects = range.getClientRects();
        if (rects.length > 0) {
          const lastRect = rects[rects.length - 1];
          const fullWidth = lastRect.width * 0.7; // 70% of last line width
          const rightOffset =
            el.getBoundingClientRect().right - lastRect.right; // distance from right edge

          setUnderlineStyle({ width: fullWidth, right: rightOffset });
        }
      }
    }
  }, [text]);

  return (
    <div className="relative inline-block">
      {/* Text */}
      <div
        ref={textRef}
        className="text-2xl text-start  sm:text-3xl font-extrabold text-black leading-snug  md:text-left xl:text-4xl 2xl:text-7xl "
      >{text}
      </div>

      {/* Underline */}
      <div
        className="absolute bottom-0 h-[3px] bg-pink-500 rounded"
        style={{
          width: `${underlineStyle.width}px`,
          right: `${underlineStyle.right}px`,
          transform: "translateY(8px)", // small gap under text
        }}
      ></div>
    </div>
  );
}
