import React, {  useState } from "react";

export const Combobox = ({ value, onChange }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  // const handleChange = (event) => {
  //   // setSelectedColor(event.target.value);
  //   console.log(value);
  // };

  return (
    <div className="mt-2 w-full">
      <select
        className={`select select-bordered w-full font-text text-sm text-slate-700  ${selectedColor} `}
        value={value}
        onChange={onChange}
        o
      >
        <option value="Type of Task" className="bg-slate-300 text-serenity">
          Type of Task
        </option>
        <option
          className="bg-ivory text-black"
          // value="bg-green-400"
          Value="Urgent Important"
        >
          Urgent Important
        </option>
        <option
          className="bg-ivory text-black"
          //value="bg-orange-400"
          Value="Not Urgent yet Important"
        >
          Not Urgent yet Important
        </option>
        <option
          className="bg-ivory text-black"
          //value="bg-blue-400"
          Value=" Urgent but not important"
        >
          Urgent but not important
        </option>
        <option
          className="bg-ivory text-black"
          //value="bg-red-400"
          Value="Not urgent and not important"
        >
          Not urgent and not important
        </option>
      </select>
    </div>
  );
};
