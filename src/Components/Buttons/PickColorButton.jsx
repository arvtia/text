import { useState } from "react";

const PickColorButton = () => {
  const [color, setColor] = useState("#FF0000");

  return (
    <div className="relative flex justify-center p-1 bg-white rounded-full">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-6 h-6 rounded-full cursor-pointer border-none shadow-md"
        style={{
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          backgroundColor: "transparent",
        }}
      />
      <style>
        {`
          input[type="color"]::-webkit-color-swatch-wrapper {
            padding: 0;
          }
          input[type="color"]::-webkit-color-swatch {
            border: none;
            border-radius: 50%;
          }
          input[type="color"]::-moz-color-swatch {
            border: none;
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default PickColorButton;