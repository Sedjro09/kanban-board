import React from 'react'
import {useId} from 'react'

export function Input({type, value, onChange, placeholder, label, inputRef} : {
    type: string;
    value: string;
    label: string
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef?: React.Ref<HTMLInputElement>;
}) {

  const id = useId()

  return <div className="mb-2">

    <label className="mb-1" htmlFor={id}> {label} </label>

    <input 
      className="w-full h-12 px-5 border-solid border-2 border-gray-400 bg-gray-200 focus:border-blue-500 focus:shadow-none focus:bg-white mb-3 rounded"
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={inputRef as React.RefObject<HTMLInputElement>}
    />
  </div>
  
  
}
