"use client";
import React, {useState} from 'react';
import {FaChevronDown} from "react-icons/fa";

function Page() {
    // ------------- Asset Dropdown -----------------//
    const [isOpenAsset, setIsOpenAsset] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState("");
    const optionsAsset = [
        'Fixed Asset',
        'Furniture',
        'Showroom Decoration',
        'Naim Miah',
        'Fixed',
    ];
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Liability Report</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                                From Date
                                            </label>
                                            <input
                                                type="date"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                                To Date
                                            </label>
                                            <input
                                                type="date"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Head
                                            </label>

                                            <div className="relative">

                                                {/* Input + Arrow */}
                                                <div
                                                    onClick={() => setIsOpenAsset(!isOpenAsset)}
                                                    className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                                >
                                                    <input
                                                        type="text"
                                                        value={selectedAsset}
                                                        readOnly
                                                        placeholder="Select Head"
                                                        className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                                    />

                                                    {/* Arrow */}
                                                    <FaChevronDown
                                                        className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                            isOpenAsset ? "rotate-180" : ""
                                                        }`}
                                                    />
                                                </div>

                                                {/* Dropdown */}
                                                {isOpenAsset && (
                                                    <>
                                                        {/* Overlay */}
                                                        <div
                                                            className="fixed inset-0 z-10"
                                                            onClick={() => setIsOpenAsset(false)}
                                                        />

                                                        <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                            <div
                                                                className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">

                                                                {optionsAsset.map((option, index) => (
                                                                    <li
                                                                        key={index}
                                                                        onClick={() => {
                                                                            setSelectedAsset(option);
                                                                            setIsOpenAsset(false);
                                                                        }}
                                                                        className="px-4 py-2 text-[12px] text-black hover:bg-primary hover:text-white cursor-pointer transition"
                                                                    >
                                                                        {option}
                                                                    </li>
                                                                ))}
                                                            </div>
                                                        </ul>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0"></div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded p-4 mt-4">
                            <div className="flex items-center gap-4">
                                <button onClick={() => window.print()}
                                        className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                    Preview
                                </button>
                                <div id="print-area" className="text-2xl">
                                    Print Data Coming Here...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;