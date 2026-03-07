"use client";
import React from 'react';

function Page() {
    return (
        <>
            <section id="sms-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>SMS Report</h2>
                    </div>

                    <div className="w-full bg-white rounded border border-gray-200 p-6 mt-4">
                        <div className="block md:flex items-center gap-4">
                            <div className="input_box w-full block md:flex items-center gap-2">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        From Date
                                    </label>
                                    <input
                                        type="date"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        To Date
                                    </label>
                                    <input
                                        type="date"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Status
                                    </label>
                                    <div className="block md:flex items-center gap-2">
                                        <div className="relative w-full mt-4 md:mt-0">
                                            <select
                                                className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary">
                                                <option value="option1">--Select Status--</option>
                                                <option value="option2">Success</option>
                                                <option value="option3">Fail</option>
                                                <option value="option4">Pending</option>
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
                        </div>
                        <div className="button_area mt-4">
                            <button
                                onClick={() => window.print()}
                                className="bg-primary hover:bg-dark-primary text-[14px] cursor-pointer py-1 px-4 rounded text-white"
                            >
                                Search
                            </button>
                            <div id="print-area" className="text-2xl">
                                Print Data Coming Here...
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;