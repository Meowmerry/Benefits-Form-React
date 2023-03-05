import React from "react";

interface ButtonSubmitProps {
    disabled: boolean
}
export const ButtonSubmit: React.FC<ButtonSubmitProps> = (props) => {
    const { disabled } = props;
    return (
        <div className="flex items-center justify-center pt-72 xl:pt-80 2xl:pt-96">
        <button
          type="submit"
          disabled={disabled}
          className={` ${disabled
              ? "bg-[#d0d5dc] w-36 h-12 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-not-allowed ... "
              : "bg-healthpilot-thirdary  w-36 h-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer ..."
            } `}
        >
          Next
        </button>
      </div>
    )

}