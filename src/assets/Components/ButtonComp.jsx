import React from 'react'

export const ButtonComp = ({children}) => {
  return (
    <div
      className="mt-5  w-5/6 "
     
    >
      <button
        className="btn w-full bg-royalblue hover:bg-ivory text-ivory hover:text-black font-text text-xl"
        type="submit"
      >
        {children}
      </button>
    </div>
  );
}
