import React, {  useState } from "react";

export const Combobox = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
  };


  return (
    <div className="mt-2 w-5/6">
      <select
        className={`select select-bordered w-full font-text text-sm text-slate-700  ${selectedColor} `}
        value={selectedColor}
        onChange={handleChange}
      >
        <option
         
          value="Type of Task"
          className="bg-slate-300 text-serenity"
        >
          Type of Task
        </option>
        <option className="bg-ivory text-black" value="bg-green-400">
          Urgent Important
        </option>
        <option className="bg-ivory text-black" value="bg-orange-400">
          Not Urgent yet Important
        </option>
        <option className="bg-ivory text-black" value="bg-blue-400">
          Urgent but not important
        </option>
        <option className="bg-ivory text-black" value="bg-red-400">
          Not urgent and not important
        </option>
      </select>
    </div>
  );
};
