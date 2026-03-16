"use client";
import React, {useMemo, useState} from 'react';
import {FiPlusSquare, FiTrash2} from "react-icons/fi";
import {FaCartPlus, FaChevronDown} from "react-icons/fa";
import {BsEraser} from "react-icons/bs";
import {RxCross1} from "react-icons/rx";

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

type PaymentRow = {
    id: number;
    paymentType: string;
};

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

    // -------- Payment Details Enable Disable Logic ---------- //
    const [paymentType, setPaymentType] = useState<string>('Cash');
    const isBankSelected = paymentType === 'Bank';

    // -------- Click + And Coming Table Logic ---------- //
    const [rows, setRows] = useState<PaymentRow[]>([
        {id: 1, paymentType: 'Cash'},
    ]);
    // Add New Row
    const addRow = () => {
        setRows((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                paymentType: 'Cash',
            },
        ]);
    };
    // Remove Row
    const removeRow = (id: number) => {
        setRows((prev) => prev.filter((row) => row.id !== id));
    };
    // Change Payment Type
    const changeType = (id: number, value: string) => {
        setRows((prev) =>
            prev.map((row) =>
                row.id === id ? {...row, paymentType: value} : row
            )
        );
    };

    // Click to coming Payment Details Box
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);

    // ------------- PickDropdown -----------------//
    const [isOpenPickDropdown, setIsOpenPickDropdown] = useState(false);
    const [selectedPickDropdown, setSelectedPickDropdown] = useState("");
    const [searchPickDropdown, setSearchPickDropdown] = useState("");
    const optionsPickDropdown = [
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

    // ---------- CREATE Color ---------- //
    const [openCreateColorModal, setOpenCreateColorModal] = useState(false);
    // ---------- CREATE  Godown ---------- //
    const [openCreateGodownModal, setOpenCreateGodownModal] = useState(false);
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Edit Purchase Order</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box flex items-center gap-2">
                                        <div className="w-full flex items-center gap-2">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Supplier
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
                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full flex items-center gap-2">
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
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full flex items-center gap-2">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Color
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                            <div onClick={() => setOpenCreateColorModal(true)} className="flex justify-end">
                                                <FiPlusSquare
                                                    size={26}
                                                    onClick={addRow}
                                                    className="text-primary cursor-pointer hover:text-primary/80"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center gap-2 mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                GoDown
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                            <div onClick={() => setOpenCreateGodownModal(true)} className="flex justify-end">
                                                <FiPlusSquare
                                                    size={26}
                                                    onClick={addRow}
                                                    className="text-primary cursor-pointer hover:text-primary/80"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Qty
                                            </label>
                                            <input
                                                type="number"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                MRP Rate
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
                                                Dis.Per.
                                            </label>
                                            <input
                                                type="number"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Actu.Pur.Rate
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Dis. Amt
                                            </label>
                                            <input
                                                type="number"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Total Amt.
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="border border-gray-300 rounded p-4 mt-4">
                                        <div className="flex items-center justify-end gap-4">
                                            <button
                                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                                <FaCartPlus size={15}/> Add to order
                                            </button>
                                            <button
                                                className="flex items-center gap-1 py-2 px-4 bg-yellow-400 hover:bg-yellow-600 text-white rounded text-[13px] cursor-pointer">
                                                <BsEraser size={15}/> Clear
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Prv. Due
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="00001"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Pur. Date
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
                                                Challan
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="00001"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Invoice No
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end gap-4 mt-4">
                                        <label className="block mb-1 text-[14px] font-medium">
                                            DO
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </form>

                                <div className="col mt-4">
                                    <div className="border border-gray-300 rounded p-4">
                                        {/* Table */}
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead className="bg-gray-50">
                                                <tr className="border border-gray-200">
                                                    <th className="p-3 border border-gray-200 text-center">SI</th>
                                                    <th className="p-3 border border-gray-200 text-left">Name</th>
                                                    <th className="p-3 border border-gray-200 text-left">IMEI</th>
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
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-4">
                            <div className="col">
                                <div className="border border-gray-300 rounded p-4 pb-[200px]">
                                    {/* Table */}
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse">
                                            <thead className="bg-gray-50">
                                            <tr className="border border-gray-200">
                                                <th className="p-3 border border-gray-200 text-center">SI</th>
                                                <th className="p-3 border border-gray-200 text-left">Product</th>
                                                <th className="p-3 border border-gray-200 text-left">Qty</th>
                                                <th className="p-3 border border-gray-200 text-left">MRP Rate</th>
                                                <th className="p-3 border border-gray-200 text-left">Dis.Per.</th>
                                                <th className="p-3 border border-gray-200 text-left">Dis. Amt</th>
                                                <th className="p-3 border border-gray-200 text-left">Actu.Pur.Rate</th>
                                                <th className="p-3 border border-gray-200 text-left">Total Amt.</th>
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
                                                        {item.GodownName}
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
                                                        {item.name}
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowPaymentDetails(!showPaymentDetails)}
                                    className="cursor-pointer py-2 px-4 bg-primary text-white text-[14px] rounded"
                                >
                                    {showPaymentDetails ? "Hide Payment Details" : "Add Payment Details"}
                                </button>
                            </div>
                            {/*Click To Come Payment Details Div*/}
                            <div
                                className={`col transition-all duration-500 ease-in-out overflow-hidden ${
                                    showPaymentDetails ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="mt-4 border border-gray-300 rounded p-4">
                                    <div className="w-full overflow-x-auto">
                                        <h2 className="mb-4 text-[16px] text-primary font-semibold">
                                            Payment Details
                                        </h2>

                                        {/* ================= MOBILE CARD VIEW ================= */}
                                        <div className="block md:hidden space-y-4">
                                            {rows.map((row, index) => {
                                                const isBank = row.paymentType === 'Bank';

                                                return (
                                                    <div
                                                        key={row.id}
                                                        className="border border-primary rounded-lg p-4 bg-white shadow-sm"
                                                    >
                                                        {/* Header */}
                                                        <div className="flex justify-between items-center mb-3">

                                                            <p className="text-sm font-semibold text-gray-600">
                                                                Payment #{index + 1}
                                                            </p>

                                                            {/* Remove */}
                                                            {index !== 0 && (
                                                                <FiTrash2
                                                                    onClick={() => removeRow(row.id)}
                                                                    className="text-red-500 cursor-pointer"
                                                                    size={18}
                                                                />
                                                            )}
                                                        </div>


                                                        {/* Payment Type */}
                                                        <div className="mb-3">
                                                            <label className="text-sm font-medium block mb-1">
                                                                Name
                                                            </label>

                                                            <select
                                                                value={row.paymentType}
                                                                onChange={(e) =>
                                                                    changeType(row.id, e.target.value)
                                                                }
                                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                            >
                                                                <option>Cash</option>
                                                                <option>Rocket</option>
                                                                <option>Bkash</option>
                                                                <option>Nagad</option>
                                                                <option>Bank</option>
                                                            </select>
                                                        </div>


                                                        {/* Bank Name */}
                                                        <div className="mb-3">
                                                            <label className="text-sm font-medium block mb-1">
                                                                Bank Name
                                                            </label>

                                                            <select
                                                                disabled={!isBank}
                                                                className={`w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary
                    ${!isBank ? 'bg-gray-100' : 'bg-white'}
                  `}
                                                            >
                                                                <option>--- Select ---</option>
                                                                <option>Islami Bank Bangladesh Ltd</option>
                                                                <option>Sonali Bank PLC</option>
                                                                <option>Dutch Bangla Bank PLC</option>
                                                                <option>Brac Bank PLC</option>
                                                            </select>
                                                        </div>


                                                        {/* Cheque */}
                                                        <div className="mb-3">
                                                            <label className="text-sm font-medium block mb-1">
                                                                Cheque No
                                                            </label>

                                                            <input
                                                                disabled={!isBank}
                                                                className={`w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary
                    ${!isBank ? 'bg-gray-100' : 'bg-white'}
                  `}
                                                            />
                                                        </div>


                                                        {/* Amount */}
                                                        <div>
                                                            <label className="text-sm font-medium block mb-1">
                                                                Paid Amount
                                                            </label>

                                                            <input
                                                                type="number"
                                                                defaultValue={0}
                                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                            />
                                                        </div>

                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* ================= DESKTOP TABLE VIEW ================= */}
                                        <div className="hidden md:block overflow-x-auto">
                                            <table className="w-full border-collapse border border-primary">
                                                <thead>
                                                <tr className="bg-gray-300 text-gray-700">
                                                    <th className="border border-primary px-2 py-2 w-12">Id</th>
                                                    <th className="border border-primary px-4 py-2 text-left">Name *
                                                    </th>
                                                    <th className="border border-primary px-4 py-2 text-left">Bank Name
                                                        *
                                                    </th>
                                                    <th className="border border-primary px-4 py-2 text-left">Cheque No
                                                        *
                                                    </th>
                                                    <th className="border border-primary px-4 py-2 text-left">Paid
                                                        Amount *
                                                    </th>
                                                    <th className="border border-primary px-2 py-2 w-12 text-center">
                                                        Action
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {rows.map((row, index) => {
                                                    const isBank = row.paymentType === 'Bank';

                                                    return (
                                                        <tr key={row.id}>

                                                            {/* ID */}
                                                            <td className="border border-primary px-2 py-2 text-center">
                                                                {index + 1}
                                                            </td>


                                                            {/* Name */}
                                                            <td className="border border-primary px-2 py-2">

                                                                <select
                                                                    value={row.paymentType}
                                                                    onChange={(e) =>
                                                                        changeType(row.id, e.target.value)
                                                                    }
                                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                                >
                                                                    <option>Cash</option>
                                                                    <option>Rocket</option>
                                                                    <option>Bkash</option>
                                                                    <option>Nagad</option>
                                                                    <option>Bank</option>
                                                                </select>
                                                            </td>

                                                            {/* Bank */}
                                                            <td className="border border-primary px-2 py-2">

                                                                <select
                                                                    disabled={!isBank}
                                                                    className={`w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary
                                                          ${!isBank ? 'bg-gray-100' : 'bg-white'}
                                                        `}
                                                                >
                                                                    <option>--- Select ---</option>
                                                                    <option>Islami Bank Bangladesh Ltd</option>
                                                                    <option>Sonali Bank PLC</option>
                                                                    <option>Dutch Bangla Bank PLC</option>
                                                                    <option>Brac Bank PLC</option>
                                                                </select>
                                                            </td>


                                                            {/* Cheque */}
                                                            <td className="border border-primary px-2 py-2">
                                                                <input
                                                                    disabled={!isBank}
                                                                    className={`w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary
                                                      ${!isBank ? 'bg-gray-100' : 'bg-white'}
                                                    `}
                                                                />

                                                            </td>


                                                            {/* Amount */}
                                                            <td className="border border-primary px-2 py-2">

                                                                <input
                                                                    type="number"
                                                                    defaultValue={0}
                                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                                />

                                                            </td>


                                                            {/* Remove */}
                                                            <td className="border border-primary px-2 py-2 text-center">
                                                                {index !== 0 && (
                                                                    <FiTrash2
                                                                        onClick={() => removeRow(row.id)}
                                                                        className="text-red-500 cursor-pointer hover:text-red-700"
                                                                        size={20}
                                                                    />
                                                                )}
                                                            </td>

                                                        </tr>
                                                    );
                                                })}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Add Button */}
                                        <div className="w-full flex justify-end mt-2">
                                            <FiPlusSquare
                                                size={26}
                                                onClick={addRow}
                                                className="text-primary cursor-pointer hover:text-primary/80"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded p-4 mt-4">
                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Flat Dis. Per.
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Flat Dis. Amt.
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Total Dis.
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Pay Amount
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Labour Cost Per
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Labour Cost
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Courier Cost Percent.
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Courier Cost
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Grand Total
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Adj. Amt
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Net Total
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Payment Due
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
                                        Remarks
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <div className="flex items-center justify-end gap-4 mt-4">
                                        <button
                                            className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                            Save order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CREATE Color MODAL */}
                {openCreateColorModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCreateColorModal(false)}/>
                        <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCreateColorModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold mb-4">Add New Color</h3>
                            <div className="py-4 border-b border-t border-gray-200">
                                <form action="" method="">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Color Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-end gap-3 mt-4 text-[14px]">
                                <button onClick={() => setOpenCreateColorModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                                <button onClick={() => setOpenCreateColorModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add Color
                                </button>
                            </div>
                        </div>
                    </div>
                )}


                {/* CREATE Godown MODAL */}
                {openCreateGodownModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCreateGodownModal(false)}/>
                        <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCreateGodownModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold mb-4">Add New Godown</h3>
                            <div className="py-4 border-b border-t border-gray-200">
                                <form action="" method="">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Godown Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-end gap-3 mt-4 text-[14px]">
                                <button onClick={() => setOpenCreateGodownModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                                <button onClick={() => setOpenCreateGodownModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add Godown
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