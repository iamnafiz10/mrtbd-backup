"use client";
import React from 'react';
import {FaCheck} from "react-icons/fa";

function Page() {
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Create Menu</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[12px]">
                        <div className="grid grid-cols-1">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box block md:flex items-start gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[12px] font-medium">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[12px] font-medium">
                                                Description
                                            </label>
                                            <textarea rows={3}
                                                      className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"></textarea>
                                        </div>
                                    </div>

                                    <div className="input_box block md:flex items-start gap-4 mt-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Parent Menu
                                            </label>
                                            <div className="block md:flex items-center gap-2">
                                                <div className="relative w-full mt-4 md:mt-0">
                                                    <select
                                                        className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary">
                                                        <option value="option1">--Select parent menu--</option>
                                                        <option value="option2">PCS</option>
                                                        <option value="option3">Carton</option>
                                                        <option value="option4">Jar</option>
                                                        <option value="option5">Litter</option>
                                                    </select>
                                                    <div
                                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="h-4 w-4 fill-current"
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 20 20">
                                                            <path
                                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[12px] font-medium">
                                                Url
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box block md:flex items-start gap-4 mt-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Icon
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                            <span className="mt-2 text-[10px]">
                                                Find Icon here and Copy and Paste (i) tag in the icon field.
                                            </span>
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[12px] font-medium">
                                                Sequence
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                            <div className="flex items-center justify-between text-[12px] mt-2">
                                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                                    <input type="checkbox" className="peer hidden"/>
                                                    <div
                                                        className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                                        <FaCheck className="text-white text-[10px]"/>
                                                    </div>
                                                    <span>Without View (For Report Only)</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="flex items-center justify-end gap-4 mt-4">
                                    <button
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                        Add Menu
                                    </button>
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