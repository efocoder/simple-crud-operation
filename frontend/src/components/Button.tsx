import React from "react";


interface Props {
    type: string;
}

const Button: React.FC<Props> = ({type}: Props) => {
    return (
        <>
            {type === 'login' &&
                <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-900 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800"
                >
                    Login
                </button>
            }
        </>
    )
};

export default Button;