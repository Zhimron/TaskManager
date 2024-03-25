import React from 'react'

export const DatePicker = ({value,onChange}) => {
  return (
    <div>
      <input
        className="w-full h-10 p-5 rounded-lg font-text "
        type="date"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
