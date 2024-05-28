import React, {  useState } from "react";
import { useCustomFetch } from "../../Hooks/useCustomFetch";

export const ComboboxTeams = ({ value, onChange }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  // const handleChange = (event) => {
  //   // setSelectedColor(event.target.value);
  //   console.log(value);
  // };
  
    const url_getTask = "http://127.0.0.1:8000/api/showteam";

    const { data } = useCustomFetch(url_getTask);

  return (
    <div className="mt-2 w-full">
      <select
        className={`select select-bordered w-full font-text text-sm text-slate-700  ${selectedColor} `}
        value={value}
        onChange={onChange}
        o
      >
        <option value="Select Teams" className="bg-slate-300 text-serenity">
          Select Teams
        </option>
        {data &&
          data.map((item) => (
            <option
              className="bg-ivory text-black"
              // value="bg-green-400"
              key={item.id}
              Value={item.id}
            >
              {item.team_name}
            </option>
          ))}
      </select>
    </div>
  );
};
