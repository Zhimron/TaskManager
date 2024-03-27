import React from 'react'

export const TextArea = () => {
  return (
    <div className=" mt-3 w-5/6">
      <textarea
        className="textarea textarea-bordered  w-full  font-text  "
        placeholder="Description Of Task"
      ></textarea>
    </div>
  );
}
