import React from 'react'

export const TextArea = ({value,onChange,placeholder}) => {
  return (
    <div className=" mt-3 w-5/6  h-52 overflow-hidden ">
      <textarea
        className="textarea textarea-bordered text-sm h-full w-full font-text overflow-auto "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
