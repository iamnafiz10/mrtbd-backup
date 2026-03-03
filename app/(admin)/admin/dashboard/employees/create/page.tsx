"use client";
import React, {useState} from 'react';
import {FaChevronDown} from "react-icons/fa";

function Page() {
    // ------------- Designation Dropdown -----------------//
    const [isOpenDesignation, setIsOpenDesignation] = useState(false);
    const [selectedDesignation, setSelectedDesignation] = useState("");
    const optionsDesignation = [
        'Managing Director & Chairman',
        'Executive Director & CEO',
        'General Manager',
        'Accounts',
        'Sales Officer-2',
        'Sales Officer-1',
        'Computer Operator',
        'Office Asst.',
        'Delar Monitor',
        'Delivery Section',
        'Area Manager (Delar Development)',
        'Sales Executive',
        'Sales Support',
        'Showroom',
        'Owner',
        'Manager',
        'HR Manager',
        'Support Engineer',
        'Jr. Software Engineer',
        'Software Engineer',
        'Executive Director & Delar Marketing',
        'Branch Manager',
        'Asst. Store Keeper',
        'Asst. Branch Manager',
        'Incharge',
        'Accounts Manager',
        'Asst.Accounts Manager',
        'Store keeper',
    ];

    // ------------- Religion Dropdown -----------------//
    const [isOpenReligion, setIsOpenReligion] = useState(false);
    const [selectedReligion, setSelectedReligion] = useState("");
    const optionsReligion = [
        'Islam',
        'Hindu',
        'Christian',
        'Bhudhist',
        'Others',
    ];

    // ------------- DepartmentID Dropdown -----------------//
    const [isOpenDepartmentID, setIsOpenDepartmentID] = useState(false);
    const [selectedDepartmentID, setSelectedDepartmentID] = useState("");
    const optionsDepartmentID = [
        'Sales',
        'Management',
        'Production',
    ];
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Create Employee</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <form action="" method="">
                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
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
                                        National Id
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Father Name
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Contact No.
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        F. Contact No
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Tin No.
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Mother Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Documents <span className="text-red-400">(max: 1.5 MB)</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Birth Date
                                    </label>
                                    <input
                                        type="date"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Account No.
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Blood Group
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Bank Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Bank Account
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Joining Date
                                    </label>
                                    <input
                                        type="date"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Designation
                                    </label>

                                    <div className="relative">

                                        {/* Input + Arrow */}
                                        <div
                                            onClick={() => setIsOpenDesignation(!isOpenDesignation)}
                                            className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                        >
                                            <input
                                                type="text"
                                                value={selectedDesignation}
                                                readOnly
                                                placeholder="Select designation"
                                                className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                            />

                                            {/* Arrow */}
                                            <FaChevronDown
                                                className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                    isOpenDesignation ? "rotate-180" : ""
                                                }`}
                                            />
                                        </div>

                                        {/* Dropdown */}
                                        {isOpenDesignation && (
                                            <>
                                                {/* Overlay */}
                                                <div
                                                    className="fixed inset-0 z-10"
                                                    onClick={() => setIsOpenDesignation(false)}
                                                />

                                                <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                    <div
                                                        className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">

                                                        {optionsDesignation.map((option, index) => (
                                                            <li
                                                                key={index}
                                                                onClick={() => {
                                                                    setSelectedDesignation(option);
                                                                    setIsOpenDesignation(false);
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

                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Present Address
                                    </label>
                                    <textarea rows={2}
                                              placeholder=""
                                              className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Religion
                                    </label>

                                    <div className="relative">

                                        {/* Input + Arrow */}
                                        <div
                                            onClick={() => setIsOpenReligion(!isOpenReligion)}
                                            className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                        >
                                            <input
                                                type="text"
                                                value={selectedReligion}
                                                readOnly
                                                placeholder="Select designation"
                                                className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                            />

                                            {/* Arrow */}
                                            <FaChevronDown
                                                className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                    isOpenReligion ? "rotate-180" : ""
                                                }`}
                                            />
                                        </div>

                                        {/* Dropdown */}
                                        {isOpenReligion && (
                                            <>
                                                {/* Overlay */}
                                                <div
                                                    className="fixed inset-0 z-10"
                                                    onClick={() => setIsOpenReligion(false)}
                                                />

                                                <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                    <div
                                                        className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">

                                                        {optionsReligion.map((option, index) => (
                                                            <li
                                                                key={index}
                                                                onClick={() => {
                                                                    setSelectedReligion(option);
                                                                    setIsOpenReligion(false);
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

                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Permanent Address
                                    </label>
                                    <textarea rows={2}
                                              placeholder=""
                                              className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        DepartmentID
                                    </label>

                                    <div className="relative">

                                        {/* Input + Arrow */}
                                        <div
                                            onClick={() => setIsOpenDepartmentID(!isOpenDepartmentID)}
                                            className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                        >
                                            <input
                                                type="text"
                                                value={selectedDepartmentID}
                                                readOnly
                                                placeholder="Select designation"
                                                className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                            />

                                            {/* Arrow */}
                                            <FaChevronDown
                                                className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                    isOpenDepartmentID ? "rotate-180" : ""
                                                }`}
                                            />
                                        </div>

                                        {/* Dropdown */}
                                        {isOpenDepartmentID && (
                                            <>
                                                {/* Overlay */}
                                                <div
                                                    className="fixed inset-0 z-10"
                                                    onClick={() => setIsOpenDepartmentID(false)}
                                                />

                                                <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                    <div
                                                        className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">

                                                        {optionsDepartmentID.map((option, index) => (
                                                            <li
                                                                key={index}
                                                                onClick={() => {
                                                                    setSelectedDepartmentID(option);
                                                                    setIsOpenDepartmentID(false);
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

                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Gross Salary
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-end gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        SR Due Limit
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div className="w-full mt-4 md:mt-0">
                                    <button
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                        Add Employee
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;