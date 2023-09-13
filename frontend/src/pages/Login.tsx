import React from 'react';
import InputField from "../components/InputField.tsx";
import Button from "../components/Button.tsx";

const Login: React.FC = () => {
    return (
        <>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div
                    className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-green-600/40 ring ring-2 ring-green-900 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-green-900 underline uppercase decoration-wavy">
                        Sign in
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <InputField type='email'/>
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <InputField type='password'/>
                        </div>
                        {/*<a*/}
                        {/*    href="#"*/}
                        {/*    className="text-xs text-green-800 hover:underline"*/}
                        {/*>*/}
                        {/*    Forget Password?*/}
                        {/*</a>*/}
                        <div className="mt-6">
                            <Button type='login'/>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-green-800 hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login