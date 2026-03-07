"use client";
import React, {useState} from 'react';
import {FaCheck} from "react-icons/fa";

function Page() {
    // Checkbox select only one at a time
    const [checkboxSelected, setCheckboxSelected] = useState<string>("day");
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Cash In Hand</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <div className="mb-4 flex items-center justify-between text-[14px]">
                                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={checkboxSelected === "day"}
                                                        onChange={() => setCheckboxSelected("day")}
                                                    />
                                                    <div
                                                        className={`w-4 h-4 border rounded flex items-center justify-center 
                                                        ${checkboxSelected === "day" ? "bg-primary border-primary" : "border-gray-300"}`}
                                                    >
                                                        {checkboxSelected === "day" &&
                                                            <FaCheck className="text-white text-[10px]"/>}
                                                    </div>
                                                    <span>Day</span>
                                                </label>
                                            </div>
                                            <input
                                                type="date"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <div className="mb-4 flex items-center justify-between text-[14px]">
                                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={checkboxSelected === "month"}
                                                        onChange={() => setCheckboxSelected("month")}
                                                    />
                                                    <div
                                                        className={`w-4 h-4 border rounded flex items-center justify-center 
                                                        ${checkboxSelected === "month" ? "bg-primary border-primary" : "border-gray-300"}`}
                                                    >
                                                        {checkboxSelected === "month" &&
                                                            <FaCheck className="text-white text-[10px]"/>}
                                                    </div>
                                                    <span>Month</span>
                                                </label>
                                            </div>
                                            <input
                                                type="date"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <div className="mb-4 flex items-center justify-between text-[14px]">
                                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={checkboxSelected === "year"}
                                                        onChange={() => setCheckboxSelected("year")}
                                                    />
                                                    <div
                                                        className={`w-4 h-4 border rounded flex items-center justify-center 
                                                        ${checkboxSelected === "year" ? "bg-primary border-primary" : "border-gray-300"}`}
                                                    >
                                                        {checkboxSelected === "year" &&
                                                            <FaCheck className="text-white text-[10px]"/>}
                                                    </div>
                                                    <span>Year</span>
                                                </label>
                                            </div>
                                            <input
                                                type="date"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
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