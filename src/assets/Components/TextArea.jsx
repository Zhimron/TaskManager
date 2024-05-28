import React from 'react'

export const TextArea = ({value,onChange,placeholder}) => {
  return (
    <div className=" mt-3 w-full  h-[32vh] overflow-hidden ">
      <textarea
        className="textarea textarea-bordered text-sm h-full w-full font-text overflow-auto resize-none p-5 rounded-md  "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
