"use client";
import React, {useState} from 'react';
import {FaCheck} from "react-icons/fa";

function Page() {
    // Checkbox select only one at a time
    const [checkboxSelected, setCheckboxSelected] = useState<string>("summary");
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Monthly Sales Report</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Month
                                            </label>
                                            <input
                                                type="date"
                                                placeholder="Enter Address"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-end gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Customer Type
                                            </label>
                                            <div className="block md:flex items-center gap-2">
                                                <div className="relative w-full mt-4 md:mt-0">
                                                    <select
                                                        className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary">
                                                        <option value="option1">--All Customer Type--</option>
                                                        <option value="option2">Retail</option>
                                                        <option value="option3">Dealer</option>
                                                        <option value="option4">Hire</option>
                                                        <option value="option5">Branch</option>
                                                    </select>
                                                    <div
                                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 20 20">
                                                            <path
                                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-4">
                                        <div className="wrap">
                                            <div className="mb-4 flex items-center justify-between text-[14px]">
                                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={checkboxSelected === "summary"}
                                                        onChange={() => setCheckboxSelected("summary")}
                                                    />
                                                    <div
                                                        className={`w-4 h-4 border rounded flex items-center justify-center 
                                                        ${checkboxSelected === "summary" ? "bg-primary border-primary" : "border-gray-300"}`}
                                                    >
                                                        {checkboxSelected === "summary" &&
                                                            <FaCheck className="text-white text-[10px]"/>}
                                                    </div>
                                                    <span>Summary</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="wrap">
                                            <div className="mb-4 flex items-center justify-between text-[14px]">
                                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={checkboxSelected === "detail"}
                                                        onChange={() => setCheckboxSelected("detail")}
                                                    />
                                                    <div
                                                        className={`w-4 h-4 border rounded flex items-center justify-center 
                                                        ${checkboxSelected === "detail" ? "bg-primary border-primary" : "border-gray-300"}`}
                                                    >
                                                        {checkboxSelected === "detail" &&
                                                            <FaCheck className="text-white text-[10px]"/>}
                                                    </div>
                                                    <span>Detail</span>
                                                </label>
                                            </div>
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