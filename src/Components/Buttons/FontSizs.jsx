import { useState } from "react";

const FontSizeButton = () => {
  const [selected, setSelected] = useState(""); // empty string to start
  const [isActive, setIsActive] = useState(false);

  const fontSizes = Array.from({ length: 20 }, (_, i) => (i + 1) * 2); // 2 to 40 px

  return (
    <div className="relative flex items-center w-auto px-2 py-1 gap-2 rounded-md shadow-sm bg-white">
      {/* Input box */}
      <input
        type="number"
        value={`${selected}`}
        onChange={(e) => setSelected(e.target.value)}
        placeholder="Size"
        className="w-16 rounded-md bg-gray-100 text-center appearance-none"
        style={{
          MozAppearance: "textfield",
          WebkitAppearance: "none",
        }}
      />

      {/* Dropdown toggle */}
      <div
        className="cursor-pointer rounded"
        onClick={() => setIsActive(!isActive)}
      >
        <i className="bi bi-chevron-down text-sm"></i>
      </div>

      {/* Dropdown list */}
      {isActive && (
        <div className="absolute w-32 left-0 top-full mt-1 bg-white border rounded shadow z-10">
          <ul className="max-h-40 overflow-y-auto">
            {fontSizes.map((size) => (
              <li
                key={size}
                onClick={() => {
                  setSelected(String(size));
                  setIsActive(false);
                }}
                className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
              >
                {size}px
              </li>
            ))}
          </ul>
         
        </div>
      )}
    </div>
  );
};

export default FontSizeButton;