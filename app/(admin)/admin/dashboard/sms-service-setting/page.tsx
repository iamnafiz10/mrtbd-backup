"use client";
import React from 'react';
import {FaCheck} from "react-icons/fa";

function Page() {
    return (
        <>
            <section id="sms-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>SMS Setting</h2>
                    </div>

                    <div className="w-full bg-white rounded border border-gray-200 p-6 mt-4">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-[14px]">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input type="checkbox" className="peer hidden"/>
                                    <div
                                        className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                        <FaCheck className="text-white text-[10px]"/>
                                    </div>
                                    <span>Is Retail Sale SMS Service Applicable</span>
                                </label>
                            </div>
                            <div className="flex items-center justify-between text-[14px]">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input type="checkbox" defaultChecked className="peer hidden"/>
                                    <div
                                        className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                        <FaCheck className="text-white text-[10px]"/>
                                    </div>
                                    <span>Is Hire Sale SMS Service Applicable</span>
                                </label>
                            </div>
                            <div className="flex items-center justify-between text-[14px]">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input type="checkbox" defaultChecked className="peer hidden"/>
                                    <div
                                        className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                        <FaCheck className="text-white text-[10px]"/>
                                    </div>
                                    <span> Is Cash Collection SMS Service Applicable</span>
                                </label>
                            </div>
                            <div className="flex items-center justify-between text-[14px]">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input type="checkbox" className="peer hidden"/>
                                    <div
                                        className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                        <FaCheck className="text-white text-[10px]"/>
                                    </div>
                                    <span>Is Installment SMS Service Applicable</span>
                                </label>
                            </div>
                            <div className="flex items-center justify-between text-[14px]">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input type="checkbox" className="peer hidden"/>
                                    <div
                                        className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                        <FaCheck className="text-white text-[10px]"/>
                                    </div>
                                    <span> Is Remind Date SMS Service Applicable</span>
                                </label>
                            </div>
                            <div className="flex items-center justify-between text-[14px]">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input type="checkbox" defaultChecked className="peer hidden"/>
                                    <div
                                        className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                        <FaCheck className="text-white text-[10px]"/>
                                    </div>
                                    <span>Is Bangla SMS Service eEnable</span>
                                </label>
                            </div>
                        </div>

                        <div className="button_area mt-4">
                            <button
                                className="bg-primary hover:bg-dark-primary text-[14px] cursor-pointer py-1 px-4 rounded text-white"
                            >
                                Update Setting
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;