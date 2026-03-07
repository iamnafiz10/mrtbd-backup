"use client";

import {FaUser, FaLock, FaUsers, FaCheck} from "react-icons/fa";
import LoginLogo from '../../../../public/assets/images/login-logo.png'
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-300 px-4">

            {/* Main Card */}
            <div className="w-full max-w-5xl shadow-xl p-6 rounded grid md:grid-cols-2 gap-6">

                {/* Left Section */}
                <div className="flex items-center justify-center bg-primary rounded">
                    <Image src={LoginLogo} className="w-[80%]" alt="LoginLogo"/>
                </div>

                {/* Right Section */}
                <div className="bg-white p-4 rounded">
                    <div className="text-center">
                        <div className="flex justify-center mb-3 text-primary">
                            <FaUsers size={80}/>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">

                        {/* Username */}
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <FaUser/>
                          </span>

                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full text-[14px] pl-10 pr-4 py-2 border border-primary rounded-md focus:ring-0 focus:outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <FaLock/>
                          </span>

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full text-[14px] pl-10 pr-4 py-2 border border-primary rounded-md focus:ring-0 focus:outline-none"
                            />
                        </div>

                        {/* Remember / Forgot */}
                        <div className="flex items-center justify-between text-[14px]">
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" className="peer hidden"/>
                                <div
                                    className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                    <FaCheck className="text-white text-[10px]"/>
                                </div>
                                <span>Remember Me</span>
                            </label>

                            <Link
                                href="#"
                                className="text-primary hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Button */}
                        <Link href='/admin/dashboard'
                            type="submit"
                            className="w-full block text-center cursor-pointer border border-primary bg-primary hover:bg-transparent hover:text-primary text-white py-2 rounded font-semibold"
                        >
                            Log In
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}