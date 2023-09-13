import React from "react";

interface Props {
    type: string;
    required?: boolean
}

const InputField: React.FC<Props> = ({type}: Props) => {
    return (
        <input
            type={type}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-green-600 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
        />
    )
}

export default InputField;