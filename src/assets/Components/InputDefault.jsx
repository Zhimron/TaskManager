import React from "react";

const InputDefault = ({ type, placeholder, icon: Icon, value, onChange }) => {
  return (
    <div className="mt-6 h- w-full ">
      <label className="input input-bordered flex items-center gap-2 font-text">
        {Icon && <Icon />}
        <input
          type={type}
          className="grow"
          placeholder={placeholder}
          value={value}
          onChange={onChange} // Add onChange handler here
        />
      </label>
    </div>
  );
};

export default InputDefault;
