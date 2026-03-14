"use client";
import React, {useEffect, useState} from 'react';
import {FiPlusSquare} from "react-icons/fi";
import {RxCross1} from "react-icons/rx";
import {FaCheck, FaChevronDown} from "react-icons/fa";

function Page() {
    // -------- CustomerPick Modal ---------- //
    const [openCustomerPickModal, setOpenCustomerPickModal] = useState(false);
    useEffect(() => {
        if (openCustomerPickModal) {
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        } else {
            document.body.style.position = "";
            document.body.style.width = "";
        }

        return () => {
            document.body.style.position = "";
            document.body.style.width = "";
        };
    }, [openCustomerPickModal]);


    // ---------- CREATE Expense Modal---------- //
    const [openCreateExpenseModal, setOpenCreateExpenseModal] = useState(false);
    useEffect(() => {
        if (openCreateExpenseModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openCreateExpenseModal]);
    // ------------- PickDropdown -----------------//
    const [isOpenPickDropdown, setIsOpenPickDropdown] = useState(false);
    const [selectedPickDropdown, setSelectedPickDropdown] = useState("");
    const [searchPickDropdown, setSearchPickDropdown] = useState("");
    const optionsPickDropdown = [
        {
            name: "Product 01",
            code: "00049",
            qty: "1.0 PCS",
            category: "Category",
            size: "No size",
            mrp: "150",
            company: "Company1",
        },
        {
            name: "Product 02",
            code: "00044",
            qty: "2.0 PCS",
            category: "Category",
            size: "No size",
            mrp: "780",
            company: "Company2",
        },
        {
            name: "Polethin",
            code: "00051",
            qty: "1.0 kg",
            category: "Category",
            size: "No size",
            mrp: "230",
            company: "Npoly Nexus",
        },
    ];
    const filteredOptions = optionsPickDropdown.filter((item) =>
        item.name.toLowerCase().includes(searchPickDropdown.toLowerCase())
    );

    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Edit Income</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Voucher No
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="00001"
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Entry Date
                                            </label>
                                            <input
                                                type="date"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Income Items
                                            </label>

                                            <div className="relative">
                                                {/* Input + Arrow */}
                                                <div
                                                    onClick={() => setIsOpenPickDropdown(!isOpenPickDropdown)}
                                                    className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                                >
                                                    <input
                                                        type="text"
                                                        value={selectedPickDropdown}
                                                        readOnly
                                                        placeholder="Select designation"
                                                        className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                                    />

                                                    {/* Arrow */}
                                                    <FaChevronDown
                                                        className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                            isOpenPickDropdown ? "rotate-180" : ""
                                                        }`}
                                                    />
                                                </div>

                                                {/* Dropdown */}
                                                {isOpenPickDropdown && (
                                                    <>
                                                        {/* Overlay */}
                                                        <div
                                                            className="fixed inset-0 z-10"
                                                            onClick={() => setIsOpenPickDropdown(false)}
                                                        />

                                                        <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                            {/* Search Field */}
                                                            <div className="p-2 border-b border-gray-300">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search by name, code..."
                                                                    value={searchPickDropdown}
                                                                    onChange={(e) => setSearchPickDropdown(e.target.value)}
                                                                    className="w-full px-2 py-2 text-[13px] border border-gray-300 rounded focus:outline-none focus:border-primary"
                                                                />
                                                            </div>

                                                            {/* Options */}
                                                            <div
                                                                className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
                                                                {filteredOptions.length > 0 ? (
                                                                    filteredOptions.map((option, index) => (
                                                                        <li
                                                                            key={index}
                                                                            onClick={() => {
                                                                                setSelectedPickDropdown(`${option.name} (${option.code})`);
                                                                                setIsOpenPickDropdown(false);
                                                                                setSearchPickDropdown("");
                                                                            }}
                                                                            className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition"
                                                                        >

                                                                            {/* Product Title */}
                                                                            <div
                                                                                className="text-[14px] font-semibold text-gray-700">
                                                                                {option.name} ({option.code})
                                                                            </div>

                                                                            {/* Product Details */}
                                                                            <div
                                                                                className="text-[12px] text-gray-500 mt-[2px]">
                                                                                {option.qty} | {option.category} | {option.size} |
                                                                                MRP: {option.mrp} |
                                                                                Company: {option.company}
                                                                            </div>
                                                                        </li>
                                                                    ))
                                                                ) : (
                                                                    <div
                                                                        className="px-4 py-2 text-[12px] text-gray-500">
                                                                        No result found
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </ul>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <div onClick={() => setOpenCreateExpenseModal(true)}
                                                 className="icon_box flex items-center gap-1 bg-primary p-1 text-white rounded cursor-pointer">
                                                <FiPlusSquare size={20}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Amount
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Purpose
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <label className="flex items-center gap-2 cursor-pointer select-none mt-4">
                                        <input type="checkbox" className="peer hidden"/>
                                        <div
                                            className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                            <FaCheck className="text-white text-[10px]"/>
                                        </div>
                                        <span>Prevent this Iteam for Cash In Hand Report!</span>
                                    </label>

                                    <div className="flex items-center gap-4 mt-4">
                                        <button
                                            className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                            Add Income
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CREATE Expense MODAL */}
                {openCreateExpenseModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCreateExpenseModal(false)}/>
                        <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCreateExpenseModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold mb-4">Create New Expense</h3>
                            <div className="py-4 border-b border-t border-gray-200">
                                <form action="" method="">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Code
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter Code"
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
                                                        <option value="option1">--Select a status--</option>
                                                        <option value="option2">Expense</option>
                                                        <option value="option3">Income</option>
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
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter Name"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-end gap-3 mt-4 text-[14px]">
                                <button onClick={() => setOpenCreateExpenseModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenCreateExpenseModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add Expense
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Page;