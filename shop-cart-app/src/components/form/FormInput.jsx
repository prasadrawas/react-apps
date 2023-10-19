import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function FormInput({
  Icon,
  name,
  placeholder,
  type,
  register,
  required = true,
  pattern,
  error,
  isPasswords = false,
  className,
}) {
  const [visible, setVisible] = useState(false);

  const changeVisibility = () => {
    setVisible(!visible);
  }

  return (
    <div className={`flex flex-col w-full mb-5 ${className}`}>
      <div className="flex border-[1px] border-slate-100 rounded-lg shadow-md items-center">
        {Icon && <Icon className='text-xs text-slate-700 ml-4'/>}
        <input
          type={!isPasswords ? type: (visible ? 'text': type)}
          placeholder={placeholder}
          {...register(name, {
            required: {
              value: required,
              message: `${name} is required`,
            },
            pattern: pattern && {
              value: pattern,
              message: `Please enter valid ${name}`,
            },
          })}
          className={`p-3 outline-none text-xs text-slate-700 px-4 w-full`}
        />
        <div className="px-3 cursor-pointer text-slate-700">
        {isPasswords && (!visible ? <AiFillEye onClick={changeVisibility}/> : <AiFillEyeInvisible  onClick={changeVisibility}/>)}
        </div>
      </div>

      {error && (
        <p className="mt-2 text-xs text-red-400 px-2 font-light">{error}</p>
      )}
    </div>
  );
}

export default FormInput;
