import { useState } from "react";

const fonts = [
  { name: "San serif" },
  { name: "Vatika" },
  { name: "Levi" },
  { name: "Jordan" },
  { name: "Italic" }
];

const FontSelectButton = () => {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative flex items-center rounded-md gap-1 px-2 py-1 bg-white w-36 ">
      <p className="font-serif font-thin text-neutral-500 px-2">T</p>

      <button
        onClick={() => setIsActive(!isActive)}
        className="px-2  bg-gray-100 rounded block truncate w-full"
      >
        {selected || "Select font"}
      </button>

      {isActive && (
        <ul className="absolute top-full left-0 mt-1 bg-white border shadow z-10 p-1 rounded-md w-36">
          {fonts.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                setSelected(item.name);
                setIsActive(false);
              }}
              className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer truncate"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontSelectButton;