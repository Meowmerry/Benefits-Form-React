import React from "react";
import { CountyProps, FormInputErrorProps } from "./types/FromInputProps";

interface BaseSelectProps {
    name: string;
    value: string;
    errors: FormInputErrorProps;
    counties: CountyProps[];
    handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const BaseSelect: React.FC<BaseSelectProps> = (props) => {
    const { value, handleSelect, errors, counties } = props;
    return (
        <select
            name="county"
            value={value}
            onChange={handleSelect}
            placeholder="Select county"
            id="counties"
            className={` ${errors?.county ? "border-red-500 border-2 " : ""
                } focus:border-yellow-300 focus:border-2 p-2.5 bg-white shadow  border rounded w-full  text-gray-700 mb-3  focus:outline-none focus:shadow-outline`}
        >
            <option value="" disabled>Select county</option>
            {counties?.length &&
                counties.map((county: CountyProps) => (
                    <option
                        key={county?.countyName}
                        value={`${county?.countyName},${county?.stateName}`}
                    >
                        {county?.countyName}
                    </option>
                ))}
        </select>
    )
}