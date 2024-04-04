import React from "react";

export const TimePicker = ({ value, onChange }) => {
  return (
    <div>
      <input
        className="w-full h-10 ml-2 p-2 rounded-lg font-text "
        type="time"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
