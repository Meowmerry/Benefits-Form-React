import React from "react";
import { FormInputErrorProps } from "./types/FromInputProps";

interface BaseInputProps {
    value: string
    inputRef: React.MutableRefObject<null>;
    errors: FormInputErrorProps;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name:string
    placeholder:string
    id:string
    maxLength?:number
    type: string
}
export const BaseInput: React.FC<BaseInputProps> = (props) => {
    const {inputRef,errors,value,name,handleChange,placeholder,maxLength} = props;
    return (
        <input
        ref={inputRef}
        className={` ${errors?.name ? "focus:border-red-500 border-2 " : ""
          }form-control focus:border-yellow-300 focus:border-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 text-md leading-tight focus:outline-none focus:shadow-outline`}
        id="name"
        type="text"
        name={name}
        value={String(value)}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxLength}
      />
    )

}