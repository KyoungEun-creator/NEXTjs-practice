import React from "react";
import { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("");
  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          {/* 색깔상자 */}
          <div
            className="w-40 h-40 border border-slate-500"
            style={{ backgroundColor: color }}
          ></div>
          {/* 색깔 입력 창 */}
          <input
            type="text"
            value={color}
            className="border border-slate-500 w-40 mt-2"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ColorBox;
