"use client";
import React, {useMemo, useState} from 'react';
import {FaCartPlus, FaCheck, FaChevronDown, FaTrashAlt} from "react-icons/fa";

type Stock = {
    id: number;
    name: string;
    GodownName: string;
    Company: string;
    Category: string;
    Color: string;
    MRPRate: string;
    StockQty: string;
};

const data: Stock[] = [
    {
        id: 1,
        name: "Data",
        GodownName: "Data",
        Company: "Data",
        Category: "Data",
        Color: "Data",
        MRPRate: "Data",
        StockQty: "Data",
    },
];

function Page() {
    // ----------- Data Table ------------//
    const [search, setSearch] = useState("");
    const [entries, setEntries] = useState(10);
    const [page, setPage] = useState(1);

    /* Filter Data */
    const filteredData = useMemo(() => {
        return data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    /* Pagination */
    const totalPages = Math.ceil(filteredData.length / entries);

    const paginatedData = filteredData.slice(
        (page - 1) * entries,
        page * entries
    );

    // ------------- PickDropdown -----------------//
    const [isOpenPickDropdown, setIsOpenPickDropdown] = useState(false);
    const [selectedPickDropdown, setSelectedPickDropdown] = useState("");
    const [searchPickDropdown, setSearchPickDropdown] = useState("");
    const optionsPickDropdown = [
        {
            FullName: "One",
            code: "00049",
        },
        {
            FullName: "Two",
            code: "0002",
        },
        {
            FullName: "Three",
            code: "0005",
        },
    ];
    const filteredOptions = optionsPickDropdown.filter((item) =>
        item.FullName.toLowerCase().includes(searchPickDropdown.toLowerCase())
    );

    // ------------- PickDropdownP -----------------//
    const [isOpenPickDropdownP, setIsOpenPickDropdownP] = useState(false);
    const [selectedPickDropdownP, setSelectedPickDropdownP] = useState("");
    const [searchPickDropdownP, setSearchPickDropdownP] = useState("");
    const optionsPickDropdownP = [
        {
            Name: "Product 01",
            Godown: "Test Go",
            Category: "Electronic",
            Quantity: "100",
        },
        {
            Name: "Product 02",
            Godown: "Test Go",
            Category: "Electronic",
            Quantity: "100",
        },
        {
            Name: "Product 03",
            Godown: "Test Go",
            Category: "Electronic",
            Quantity: "100",
        },
    ];
    const filteredOptionsP = optionsPickDropdownP.filter((item) =>
        item.Name.toLowerCase().includes(searchPickDropdownP.toLowerCase())
    );
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Create Transfer</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Transfer No
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="00001"
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Transfer Date
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
                                                To Concern
                                            </label>
                                            <select
                                                className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                            >
                                                <option value="">--- Select Concern---</option>
                                                <option value="value1">Object Canvas Technology</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full flex items-center gap-2">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    GoDown
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
                                                            placeholder="Select customer"
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
                                                                                    setSelectedPickDropdown(`${option.FullName} (${option.code})`);
                                                                                    setIsOpenPickDropdown(false);
                                                                                    setSearchPickDropdown("");
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
                                                                                    Code: {option.code} |
                                                                                    Name: {option.FullName}
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
                                </form>
                            </div>

                            <div className="col">
                                <div className="border border-gray-300 rounded p-4">
                                    {/* Table */}
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse">
                                            <thead className="bg-gray-50">
                                            <tr className="border border-gray-200">
                                                <th className="p-3 border border-gray-200 text-center">SI</th>
                                                <th className="p-3 border border-gray-200 text-left">Product</th>
                                                <th className="p-3 border border-gray-200 text-left">IMEI</th>
                                                <th className="p-3 border border-gray-200 text-center">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {paginatedData.length === 0 && (
                                                <tr>
                                                    <td
                                                        colSpan={6}
                                                        className="text-center p-4 text-gray-500"
                                                    >
                                                        No Data Found
                                                    </td>
                                                </tr>
                                            )}

                                            {paginatedData.map((item, index) => (
                                                <tr key={item.id} className="border border-gray-200 hover:bg-gray-50">
                                                    <td className="p-3 border border-gray-200 text-center">
                                                        {(page - 1) * entries + index + 1}
                                                    </td>

                                                    <td className="p-3 border border-gray-200">
                                                        {item.name}
                                                    </td>
                                                    <td className="p-3 border border-gray-200">
                                                        {item.name}
                                                    </td>
                                                    <td className="p-3 border border-gray-200">
                                                        <div className="flex justify-center gap-2">
                                                            <button
                                                                className="bg-red-500 p-2 rounded text-white cursor-pointer hover:bg-red-600 transition">
                                                                <FaTrashAlt size={12}/>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <form action="" method="" className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer select-none">
                                            <input type="checkbox" className="peer hidden"/>
                                            <div
                                                className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                                <FaCheck className="text-white text-[10px]"/>
                                            </div>
                                            <span>Manual</span>
                                        </label>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <input
                                                type="text"
                                                placeholder="Enter IMEI"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Product
                                            </label>

                                            <div className="relative">
                                                {/* Input + Arrow */}
                                                <div
                                                    onClick={() => setIsOpenPickDropdownP(!isOpenPickDropdownP)}
                                                    className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer focus-within:border-primary"
                                                >
                                                    <input
                                                        type="text"
                                                        value={selectedPickDropdownP}
                                                        readOnly
                                                        placeholder="Select product"
                                                        className="w-full text-[14px] focus:outline-none bg-transparent cursor-pointer"
                                                    />

                                                    {/* Arrow */}
                                                    <FaChevronDown
                                                        className={`text-gray-500 text-[12px] transition-transform duration-200 ${
                                                            isOpenPickDropdownP ? "rotate-180" : ""
                                                        }`}
                                                    />
                                                </div>

                                                {/* Dropdown */}
                                                {isOpenPickDropdownP && (
                                                    <>
                                                        {/* Overlay */}
                                                        <div
                                                            className="fixed inset-0 z-10"
                                                            onClick={() => setIsOpenPickDropdownP(false)}
                                                        />

                                                        <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-xl z-20 overflow-hidden">

                                                            {/* Search Field */}
                                                            <div className="p-2 border-b border-gray-300">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search..."
                                                                    value={searchPickDropdownP}
                                                                    onChange={(e) => setSearchPickDropdownP(e.target.value)}
                                                                    className="w-full px-2 py-2 text-[13px] border border-gray-300 rounded focus:outline-none focus:border-primary"
                                                                />
                                                            </div>

                                                            {/* Options */}
                                                            <div
                                                                className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
                                                                {filteredOptionsP.length > 0 ? (
                                                                    filteredOptionsP.map((option, index) => (
                                                                        <li
                                                                            key={index}
                                                                            onClick={() => {
                                                                                setSelectedPickDropdownP(`${option.Name} (${option.Quantity})`);
                                                                                setIsOpenPickDropdownP(false);
                                                                                setSearchPickDropdownP("");
                                                                            }}
                                                                            className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition"
                                                                        >

                                                                            {/* Product Title */}
                                                                            <div
                                                                                className="text-[14px] font-semibold text-gray-700">
                                                                                {option.Quantity}
                                                                            </div>

                                                                            {/* Product Details */}
                                                                            <div
                                                                                className="text-[12px] text-gray-500 mt-[2px]">
                                                                                Name: {option.Name} |
                                                                                GoDown: {option.Godown} |
                                                                                Category: {option.Category}
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

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                PRate
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                IMEI
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Total Amt
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="0.00"
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Quantity
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                </form>

                                <div className="border border-gray-300 rounded p-4 mt-4">
                                    <div className="flex items-center gap-4">
                                        <button
                                            className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                            <FaCartPlus size={15}/> Add to order
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="border border-gray-300 rounded p-4">
                                    {/* Table */}
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse">
                                            <thead className="bg-green-600 text-white text-[10px]">
                                            <tr className="border border-gray-200">
                                                <th className="p-2 border border-gray-200 text-center">SI</th>
                                                <th className="p-2 border border-gray-200 text-left">Product</th>
                                                <th className="p-2 border border-gray-200 text-left">IMEI</th>
                                                <th className="p-2 border border-gray-200 text-left">Quantity</th>
                                                <th className="p-2 border border-gray-200 text-left">PRate</th>
                                                <th className="p-2 border border-gray-200 text-left">Total Amt</th>
                                                <th className="p-2 border border-gray-200 text-center">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {paginatedData.length === 0 && (
                                                <tr>
                                                    <td
                                                        colSpan={8}
                                                        className="text-center p-4 text-gray-500"
                                                    >
                                                        No Data Found
                                                    </td>
                                                </tr>
                                            )}

                                            {paginatedData.map((item, index) => (
                                                <tr key={item.id} className="border border-gray-200 hover:bg-gray-50">
                                                    <td className="p-3 border border-gray-200 text-center">
                                                        {(page - 1) * entries + index + 1}
                                                    </td>

                                                    <td className="p-3 border border-gray-200">
                                                        {item.name}
                                                    </td>
                                                    <td className="p-3 border border-gray-200">
                                                        {item.name}
                                                    </td>
                                                    <td className="p-3 border border-gray-200">
                                                        {item.name}
                                                    </td>
                                                    <td className="p-3 border border-gray-200">
                                                        {item.name}
                                                    </td>
                                                    <td className="p-3 border border-gray-200">
                                                        {item.name}
                                                    </td>
                                                    <td className="p-3 border border-gray-200">
                                                        <div className="flex justify-center gap-2">
                                                            <button
                                                                className="bg-red-500 p-2 rounded text-white cursor-pointer hover:bg-red-600 transition">
                                                                <FaTrashAlt size={12}/>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <form action="" method="" className="border border-gray-300 rounded p-4">
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
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Total Amount
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="0.00"
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                </form>

                                <div className="border border-gray-300 rounded p-4 mt-4">
                                    <div className="flex items-center gap-4">
                                        <button
                                            className="flex items-center gap-1 py-2 px-4 bg-blue-400 hover:bg-blue-600 text-white rounded text-[13px] cursor-pointer">
                                            Save Transfer
                                        </button>
                                    </div>
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