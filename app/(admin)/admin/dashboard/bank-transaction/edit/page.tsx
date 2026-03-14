"use client";
import React, {useState} from 'react';
import {FaChevronDown} from "react-icons/fa";

function Page() {
    //-------------- Type Select By Coming Input ---------------//
    const [transactionType, setTransactionType] = useState("");

    // ------------- PickDropdown -----------------//
    const [isOpenPickDropdown, setIsOpenPickDropdown] = useState(false);
    const [selectedPickDropdown, setSelectedPickDropdown] = useState("");
    const [searchPickDropdown, setSearchPickDropdown] = useState("");
    const optionsPickDropdown = [
        {
            BankName: "Islami Bank",
            code: "00049",
            AccountNo: "5965965265",
            BranchName: "Rajshahi",
        },
        {
            BankName: "City Bank",
            code: "0002",
            AccountNo: "5965965265",
            BranchName: "Rajshahi",
        },
        {
            BankName: "Brack Bank",
            code: "0005",
            AccountNo: "5965965265",
            BranchName: "Dhaka",
        },
    ];
    const filteredOptions = optionsPickDropdown.filter((item) =>
        item.BankName.toLowerCase().includes(searchPickDropdown.toLowerCase())
    );

    // ------------- PickDropdownC -----------------//
    const [isOpenPickDropdownC, setIsOpenPickDropdownC] = useState(false);
    const [selectedPickDropdownC, setSelectedPickDropdownC] = useState("");
    const [searchPickDropdownC, setSearchPickDropdownC] = useState("");
    const optionsPickDropdownC = [
        {
            FullName: "Nafiz",
            code: "00049",
            MobileNo: "5965965265",
            Address: "Rajshahi",
        },
        {
            FullName: "Roshan",
            code: "0002",
            MobileNo: "5965965265",
            Address: "Rajshahi",
        },
        {
            FullName: "Sayham",
            code: "0005",
            MobileNo: "5965965265",
            Address: "Rajshahi",
        },
    ];
    const filteredOptionsC = optionsPickDropdownC.filter((item) =>
        item.FullName.toLowerCase().includes(searchPickDropdownC.toLowerCase())
    );

    // ------------- PickDropdownS -----------------//
    const [isOpenPickDropdownS, setIsOpenPickDropdownS] = useState(false);
    const [selectedPickDropdownS, setSelectedPickDropdownS] = useState("");
    const [searchPickDropdownS, setSearchPickDropdownS] = useState("");
    const optionsPickDropdownS = [
        {
            FullName: "Nafiz",
            code: "00049",
            MobileNo: "5965965265",
            Address: "Rajshahi",
        },
        {
            FullName: "Roshan",
            code: "0002",
            MobileNo: "5965965265",
            Address: "Rajshahi",
        },
        {
            FullName: "Sayham",
            code: "0005",
            MobileNo: "5965965265",
            Address: "Rajshahi",
        },
    ];
    const filteredOptionsS = optionsPickDropdownS.filter((item) =>
        item.FullName.toLowerCase().includes(searchPickDropdownS.toLowerCase())
    );

    // ------------- PickDropdownT -----------------//
    const [isOpenPickDropdownT, setIsOpenPickDropdownT] = useState(false);
    const [selectedPickDropdownT, setSelectedPickDropdownT] = useState("");
    const [searchPickDropdownT, setSearchPickDropdownT] = useState("");
    const optionsPickDropdownT = [
        {
            BankName: "Islami Bank",
            code: "00049",
            AccountNo: "5965965265",
            BranchName: "Rajshahi",
        },
        {
            BankName: "City Bank",
            code: "0002",
            AccountNo: "5965965265",
            BranchName: "Rajshahi",
        },
        {
            BankName: "Brack Bank",
            code: "0005",
            AccountNo: "5965965265",
            BranchName: "Dhaka",
        },
    ];
    const filteredOptionsT = optionsPickDropdownT.filter((item) =>
        item.BankName.toLowerCase().includes(searchPickDropdownT.toLowerCase())
    );

    // ------------- PickDropdownB -----------------//
    const [isOpenPickDropdownB, setIsOpenPickDropdownB] = useState(false);
    const [selectedPickDropdownB, setSelectedPickDropdownB] = useState("");
    const [searchPickDropdownB, setSearchPickDropdownB] = useState("");
    const optionsPickDropdownB = [
        {
            Name: "Net Bil",
            code: "00049",
        },
        {
            Name: "Vehicle",
            code: "00074",
        },
        {
            Name: "Test",
            code: "0009",
        },
    ];
    const filteredOptionsB = optionsPickDropdownB.filter((item) =>
        item.Name.toLowerCase().includes(searchPickDropdownB.toLowerCase())
    );

    // ------------- PickDropdownI -----------------//
    const [isOpenPickDropdownI, setIsOpenPickDropdownI] = useState(false);
    const [selectedPickDropdownI, setSelectedPickDropdownI] = useState("");
    const [searchPickDropdownI, setSearchPickDropdownI] = useState("");
    const optionsPickDropdownI = [
        {
            Name: "Net Bil",
            code: "00049",
        },
        {
            Name: "Vehicle",
            code: "00074",
        },
        {
            Name: "Test",
            code: "0009",
        },
    ];
    const filteredOptionsI = optionsPickDropdownI.filter((item) =>
        item.Name.toLowerCase().includes(searchPickDropdownI.toLowerCase())
    );
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Edit BankTransaction</h2>
                    </div>
                    <div className="w-full md:w-[600px] p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Transaction No
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="00001"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Transaction Date
                                            </label>
                                            <input
                                                type="date"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full flex items-center gap-2">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    From A/C NO.
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
                                                            placeholder="Select bank"
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
                                                                        placeholder="Search..."
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
                                                                                    setSelectedPickDropdown(`${option.BankName} (${option.code})`);
                                                                                    setIsOpenPickDropdown(false);
                                                                                    setSearchPickDropdown("");
                                                                                }}
                                                                                className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition"
                                                                            >

                                                                                {/* Product Title */}
                                                                                <div
                                                                                    className="text-[14px] font-semibold text-gray-700">
                                                                                    {option.BankName} ({option.code})
                                                                                </div>

                                                                                {/* Product Details */}
                                                                                <div
                                                                                    className="text-[12px] text-gray-500 mt-[2px]">
                                                                                    Mobile: {option.AccountNo} |
                                                                                    BranchName: {option.BranchName}
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
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Transaction Type
                                            </label>
                                            <div className="block md:flex items-center gap-2">
                                                <div className="relative w-full mt-4 md:mt-0">
                                                    <select
                                                        value={transactionType}
                                                        onChange={(e) => setTransactionType(e.target.value)}
                                                        className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--Select Transaction Type--</option>
                                                        <option value="Deposit">Deposit</option>
                                                        <option value="Withdraw">Withdraw</option>
                                                        <option value="CashCollection">Cash Collection</option>
                                                        <option value="CashDelivery">Cash Delivery</option>
                                                        <option value="FundTransfer">Fund Transfer</option>
                                                        <option value="BankExpense">Bank Expense</option>
                                                        <option value="BankIncome">Bank Income</option>
                                                        <option value="LiabilityPay">Liability Pay</option>
                                                        <option value="LiabilityReceive">Liability Receive</option>
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

                                    {/*Dynamic Coming Input Start*/}
                                    {transactionType === "Withdraw" && (
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Cheque No
                                                </label>
                                                <input
                                                    type="number"
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {transactionType === "CashCollection" && (
                                        <>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full flex items-center gap-2">
                                                    <div className="w-full">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Customer
                                                        </label>

                                                        <div className="relative">
                                                            {/* Input + Arrow */}
                                                            <div
                                                                onClick={() => setIsOpenPickDropdownC(!isOpenPickDropdownC)}
                                                                className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    value={selectedPickDropdownC}
                                                                    readOnly
                                                                    placeholder="Select customer"
                                                                    className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                                                />

                                                                {/* Arrow */}
                                                                <FaChevronDown
                                                                    className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                                        isOpenPickDropdownC ? "rotate-180" : ""
                                                                    }`}
                                                                />
                                                            </div>

                                                            {/* Dropdown */}
                                                            {isOpenPickDropdownC && (
                                                                <>
                                                                    {/* Overlay */}
                                                                    <div
                                                                        className="fixed inset-0 z-10"
                                                                        onClick={() => setIsOpenPickDropdownC(false)}
                                                                    />

                                                                    <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                                        {/* Search Field */}
                                                                        <div className="p-2 border-b border-gray-300">
                                                                            <input
                                                                                type="text"
                                                                                placeholder="Search..."
                                                                                value={searchPickDropdownC}
                                                                                onChange={(e) => setSearchPickDropdownC(e.target.value)}
                                                                                className="w-full px-2 py-2 text-[13px] border border-gray-300 rounded focus:outline-none focus:border-primary"
                                                                            />
                                                                        </div>

                                                                        {/* Options */}
                                                                        <div
                                                                            className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
                                                                            {filteredOptionsC.length > 0 ? (
                                                                                filteredOptionsC.map((option, index) => (
                                                                                    <li
                                                                                        key={index}
                                                                                        onClick={() => {
                                                                                            setSelectedPickDropdownC(`${option.FullName} (${option.code})`);
                                                                                            setIsOpenPickDropdownC(false);
                                                                                            setSearchPickDropdownC("");
                                                                                        }}
                                                                                        className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition"
                                                                                    >

                                                                                        {/* Product Title */}
                                                                                        <div
                                                                                            className="text-[14px] font-semibold text-gray-700">
                                                                                            {option.FullName} ({option.code})
                                                                                        </div>

                                                                                        {/* Product Details */}
                                                                                        <div
                                                                                            className="text-[12px] text-gray-500 mt-[2px]">
                                                                                            Mobile: {option.MobileNo} |
                                                                                            Address: {option.Address}
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
                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        EmpName
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        CurrentEmpDue
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        EmpDueBalance
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {transactionType === "CashDelivery" && (
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full flex items-center gap-2">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Supplier
                                                    </label>

                                                    <div className="relative">
                                                        {/* Input + Arrow */}
                                                        <div
                                                            onClick={() => setIsOpenPickDropdownS(!isOpenPickDropdownS)}
                                                            className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                                        >
                                                            <input
                                                                type="text"
                                                                value={selectedPickDropdownS}
                                                                readOnly
                                                                placeholder="Select supplier"
                                                                className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                                            />

                                                            {/* Arrow */}
                                                            <FaChevronDown
                                                                className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                                    isOpenPickDropdownS ? "rotate-180" : ""
                                                                }`}
                                                            />
                                                        </div>

                                                        {/* Dropdown */}
                                                        {isOpenPickDropdownS && (
                                                            <>
                                                                {/* Overlay */}
                                                                <div
                                                                    className="fixed inset-0 z-10"
                                                                    onClick={() => setIsOpenPickDropdownS(false)}
                                                                />

                                                                <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                                    {/* Search Field */}
                                                                    <div className="p-2 border-b border-gray-300">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search..."
                                                                            value={searchPickDropdownS}
                                                                            onChange={(e) => setSearchPickDropdownS(e.target.value)}
                                                                            className="w-full px-2 py-2 text-[13px] border border-gray-300 rounded focus:outline-none focus:border-primary"
                                                                        />
                                                                    </div>

                                                                    {/* Options */}
                                                                    <div
                                                                        className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
                                                                        {filteredOptionsS.length > 0 ? (
                                                                            filteredOptionsS.map((option, index) => (
                                                                                <li
                                                                                    key={index}
                                                                                    onClick={() => {
                                                                                        setSelectedPickDropdownS(`${option.FullName} (${option.code})`);
                                                                                        setIsOpenPickDropdownS(false);
                                                                                        setSearchPickDropdownS("");
                                                                                    }}
                                                                                    className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition"
                                                                                >

                                                                                    {/* Product Title */}
                                                                                    <div
                                                                                        className="text-[14px] font-semibold text-gray-700">
                                                                                        {option.FullName} ({option.code})
                                                                                    </div>

                                                                                    {/* Product Details */}
                                                                                    <div
                                                                                        className="text-[12px] text-gray-500 mt-[2px]">
                                                                                        Mobile: {option.MobileNo} |
                                                                                        Address: {option.Address}
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
                                            </div>
                                        </div>
                                    )}
                                    {transactionType === "FundTransfer" && (
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full flex items-center gap-2">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        To A/C NO.
                                                    </label>

                                                    <div className="relative">
                                                        {/* Input + Arrow */}
                                                        <div
                                                            onClick={() => setIsOpenPickDropdownT(!isOpenPickDropdownT)}
                                                            className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                                        >
                                                            <input
                                                                type="text"
                                                                value={selectedPickDropdownT}
                                                                readOnly
                                                                placeholder="Select bank"
                                                                className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                                            />

                                                            {/* Arrow */}
                                                            <FaChevronDown
                                                                className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                                    isOpenPickDropdownT ? "rotate-180" : ""
                                                                }`}
                                                            />
                                                        </div>

                                                        {/* Dropdown */}
                                                        {isOpenPickDropdownT && (
                                                            <>
                                                                {/* Overlay */}
                                                                <div
                                                                    className="fixed inset-0 z-10"
                                                                    onClick={() => setIsOpenPickDropdownT(false)}
                                                                />

                                                                <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                                    {/* Search Field */}
                                                                    <div className="p-2 border-b border-gray-300">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search..."
                                                                            value={searchPickDropdownT}
                                                                            onChange={(e) => setSearchPickDropdownT(e.target.value)}
                                                                            className="w-full px-2 py-2 text-[13px] border border-gray-300 rounded focus:outline-none focus:border-primary"
                                                                        />
                                                                    </div>

                                                                    {/* Options */}
                                                                    <div
                                                                        className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
                                                                        {filteredOptionsT.length > 0 ? (
                                                                            filteredOptionsT.map((option, index) => (
                                                                                <li
                                                                                    key={index}
                                                                                    onClick={() => {
                                                                                        setSelectedPickDropdownT(`${option.BankName} (${option.code})`);
                                                                                        setIsOpenPickDropdownT(false);
                                                                                        setSearchPickDropdownT("");
                                                                                    }}
                                                                                    className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition"
                                                                                >

                                                                                    {/* Product Title */}
                                                                                    <div
                                                                                        className="text-[14px] font-semibold text-gray-700">
                                                                                        {option.BankName} ({option.code})
                                                                                    </div>

                                                                                    {/* Product Details */}
                                                                                    <div
                                                                                        className="text-[12px] text-gray-500 mt-[2px]">
                                                                                        Mobile: {option.AccountNo} |
                                                                                        BranchName: {option.BranchName}
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
                                            </div>
                                        </div>
                                    )}
                                    {transactionType === "BankExpense" && (
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full flex items-center gap-2">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Expense Items
                                                    </label>

                                                    <div className="relative">
                                                        {/* Input + Arrow */}
                                                        <div
                                                            onClick={() => setIsOpenPickDropdownB(!isOpenPickDropdownB)}
                                                            className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                                        >
                                                            <input
                                                                type="text"
                                                                value={selectedPickDropdownB}
                                                                readOnly
                                                                placeholder="Select supplier"
                                                                className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                                            />

                                                            {/* Arrow */}
                                                            <FaChevronDown
                                                                className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                                    isOpenPickDropdownB ? "rotate-180" : ""
                                                                }`}
                                                            />
                                                        </div>

                                                        {/* Dropdown */}
                                                        {isOpenPickDropdownB && (
                                                            <>
                                                                {/* Overlay */}
                                                                <div
                                                                    className="fixed inset-0 z-10"
                                                                    onClick={() => setIsOpenPickDropdownB(false)}
                                                                />

                                                                <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                                    {/* Search Field */}
                                                                    <div className="p-2 border-b border-gray-300">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search..."
                                                                            value={searchPickDropdownB}
                                                                            onChange={(e) => setSearchPickDropdownB(e.target.value)}
                                                                            className="w-full px-2 py-2 text-[13px] border border-gray-300 rounded focus:outline-none focus:border-primary"
                                                                        />
                                                                    </div>

                                                                    {/* Options */}
                                                                    <div
                                                                        className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
                                                                        {filteredOptionsB.length > 0 ? (
                                                                            filteredOptionsB.map((option, index) => (
                                                                                <li
                                                                                    key={index}
                                                                                    onClick={() => {
                                                                                        setSelectedPickDropdownB(`${option.Name} (${option.code})`);
                                                                                        setIsOpenPickDropdownB(false);
                                                                                        setSearchPickDropdownB("");
                                                                                    }}
                                                                                    className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition"
                                                                                >

                                                                                    {/* Product Title */}
                                                                                    <div
                                                                                        className="text-[14px] font-semibold text-gray-700">
                                                                                        ({option.code})
                                                                                    </div>

                                                                                    {/* Product Details */}
                                                                                    <div
                                                                                        className="text-[12px] text-gray-500 mt-[2px]">
                                                                                        Name: {option.Name}
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
                                            </div>
                                        </div>
                                    )}
                                    {transactionType === "BankIncome" && (
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full flex items-center gap-2">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Income Items
                                                    </label>

                                                    <div className="relative">
                                                        {/* Input + Arrow */}
                                                        <div
                                                            onClick={() => setIsOpenPickDropdownI(!isOpenPickDropdownI)}
                                                            className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                                        >
                                                            <input
                                                                type="text"
                                                                value={selectedPickDropdownI}
                                                                readOnly
                                                                placeholder="Select supplier"
                                                                className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                                            />

                                                            {/* Arrow */}
                                                            <FaChevronDown
                                                                className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                                    isOpenPickDropdownI ? "rotate-180" : ""
                                                                }`}
                                                            />
                                                        </div>

                                                        {/* Dropdown */}
                                                        {isOpenPickDropdownI && (
                                                            <>
                                                                {/* Overlay */}
                                                                <div
                                                                    className="fixed inset-0 z-10"
                                                                    onClick={() => setIsOpenPickDropdownI(false)}
                                                                />

                                                                <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                                    {/* Search Field */}
                                                                    <div className="p-2 border-b border-gray-300">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search..."
                                                                            value={searchPickDropdownI}
                                                                            onChange={(e) => setSearchPickDropdownI(e.target.value)}
                                                                            className="w-full px-2 py-2 text-[13px] border border-gray-300 rounded focus:outline-none focus:border-primary"
                                                                        />
                                                                    </div>

                                                                    {/* Options */}
                                                                    <div
                                                                        className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
                                                                        {filteredOptionsI.length > 0 ? (
                                                                            filteredOptionsI.map((option, index) => (
                                                                                <li
                                                                                    key={index}
                                                                                    onClick={() => {
                                                                                        setSelectedPickDropdownI(`${option.Name} (${option.code})`);
                                                                                        setIsOpenPickDropdownI(false);
                                                                                        setSearchPickDropdownI("");
                                                                                    }}
                                                                                    className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition"
                                                                                >

                                                                                    {/* Product Title */}
                                                                                    <div
                                                                                        className="text-[14px] font-semibold text-gray-700">
                                                                                        ({option.code})
                                                                                    </div>

                                                                                    {/* Product Details */}
                                                                                    <div
                                                                                        className="text-[12px] text-gray-500 mt-[2px]">
                                                                                        Name: {option.Name}
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
                                            </div>
                                        </div>
                                    )}

                                    {transactionType === "LiabilityPay" && (
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Investment Head
                                                </label>
                                                <div className="block md:flex items-center gap-2">
                                                    <div className="relative w-full mt-4 md:mt-0">
                                                        <select
                                                            className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                        >
                                                            <option value="">--Select Head--</option>
                                                            <option value="Deposit">Bangladesh</option>
                                                            <option value="Withdraw">India</option>
                                                            <option value="CashCollection">USA</option>
                                                            <option value="CashDelivery">Pakisthan</option>
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
                                    )}

                                    {transactionType === "LiabilityReceive" && (
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Investment Head
                                                </label>
                                                <div className="block md:flex items-center gap-2">
                                                    <div className="relative w-full mt-4 md:mt-0">
                                                        <select
                                                            className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                        >
                                                            <option value="">--Select Head--</option>
                                                            <option value="Deposit">Bangladesh</option>
                                                            <option value="Withdraw">India</option>
                                                            <option value="CashCollection">USA</option>
                                                            <option value="CashDelivery">Pakisthan</option>
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
                                    )}
                                    {/*Dynamic Coming Input End*/}

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
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
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Remarks
                                            </label>
                                            <input
                                                type="text"
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
                                <button
                                    className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                    Update Bank Transaction
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;