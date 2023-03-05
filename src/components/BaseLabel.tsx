import React from "react";

interface BaseLabelProps {
    name: string
}
export const BaseLabel: React.FC<BaseLabelProps> = ({name}) => {
    return (
        <label className="block text-gray-700 text-md mb-2" htmlFor="name">
          {name}
        </label>
    )
}