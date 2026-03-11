"use client";

import React, {useEffect, useRef, useState} from "react";
import {FiLogOut} from "react-icons/fi";
import {IoLockOpenOutline} from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

import userImg from "../../../../public/assets/images/user.png";

const AdminHeader: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // ✅ Static user info (UI only)
    const name = "Admin User";
    const email = "admin@example.com";

    /* Close dropdown on outside click */
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const router = useRouter();
    const signOut = () => {
        setDropdownOpen(false);
        // 🔹 UI only (no backend)
        console.log("Sign out clicked");
        router.push("/");
    };

    return (
        <header
            className="flex justify-between items-center h-[48px] px-4 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-20">
            <div className="hidden md:block">
                <h2 className="font-bold text-[15px]">
                    MR Trade International
                </h2>
            </div>

            <div className="relative" ref={dropdownRef}>
                <button
                    type="button"
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="cursor-pointer rounded-full"
                    aria-label="Open user menu"
                >
                    <Image
                        src={userImg}
                        width={38}
                        height={38}
                        className="rounded-full"
                        alt="user"
                    />
                </button>

                {dropdownOpen && (
                    <div
                        className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-sm z-50 overflow-hidden">
                        {/* User Info */}
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                            <Image
                                src={userImg}
                                width={44}
                                height={44}
                                className="rounded-full"
                                alt="userimg"
                            />
                            <div className="min-w-0">
                                <h4 className="font-bold text-[14px] truncate">
                                    {name}
                                </h4>
                                <h4 className="text-gray-500 text-[12px] truncate">
                                    {email}
                                </h4>
                            </div>
                        </div>

                        {/* Actions */}
                        <Link
                            href="/admin/dashboard/auth/change-password"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 text-[14px] hover:bg-gray-100 text-gray-800 transition-colors"
                        >
                            <IoLockOpenOutline className="h-4 w-4"/> Change Password
                        </Link>

                        <button
                            type="button"
                            onClick={signOut}
                            className="w-full cursor-pointer text-left flex items-center gap-2 px-4 py-2 text-[14px] hover:bg-gray-100 text-gray-800 transition-colors"
                        >
                            <FiLogOut className="h-4 w-4"/> Sign Out
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default AdminHeader;