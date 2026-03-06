"use client";
import React, {useMemo, useState} from 'react';
import CustomCheckbox from "@/app/(admin)/admin/dashboard/helper/CustomCheckbox";
import {TfiReload} from "react-icons/tfi";
import {RiShareForward2Fill} from "react-icons/ri";
import {RxCross1} from "react-icons/rx";

type Stock = {
    id: number;
    name: string;
    GodownName: string;
    Company: string;
    Category: string;
    Product: string;
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
        Product: "Data",
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

    // ------------- Data Table Dropdown -----------------//
    const [isOpen, setIsOpen] = useState(false);
    // Added extra options to demonstrate the scroll feature
    const options = ['JSON', 'XML', 'CSV', 'TXT', 'SQL', 'MS-EXCEL'];

    // ---------- Update Stock Modcal ---------- //
    const [openUpdateStockModal, setOpenUpdateStockModal] = useState(false);

    return (
        <>
            <section id="Product-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Existing Stocks</h2>
                    </div>

                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">

                        {/* Top Controls */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-4">
                            {/* Show Entries */}
                            <div className="flex items-center gap-2">
                                <span>Show</span>

                                <select
                                    value={entries}
                                    onChange={(e) => {
                                        setEntries(Number(e.target.value));
                                        setPage(1);
                                    }}
                                    className=" border border-primary
                                            rounded
                                            px-2 py-1
                                            focus:outline-none
                                            focus:ring-0
                                            "
                                >
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                </select>

                                <span>entries</span>
                            </div>

                            {/* Search And Extra Buttons*/}
                            <div className="flex items-center gap-2">
                                <div className="input_box">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="border border-primary
                                                px-3 py-2
                                                rounded
                                                w-[220px]
                                                focus:outline-none
                                                focus:ring-0
                                              "
                                    />
                                </div>

                                <div className="flex items-center gap-2 py-4">
                                    {/* Reload Button */}
                                    <div
                                        className="bg-primary hover:bg-dark-primary p-2.5 rounded cursor-pointer transition-all text-white">
                                        <TfiReload size={15}/>
                                    </div>

                                    {/* Share/Dropdown Container */}
                                    <div className="relative">
                                        {/* Trigger Button */}
                                        <div
                                            onClick={() => setIsOpen(!isOpen)}
                                            className={`p-2.5 rounded cursor-pointer transition-all text-white ${
                                                isOpen ? 'bg-dark-primary' : 'bg-primary hover:bg-dark-primary'
                                            }`}
                                        >
                                            <RiShareForward2Fill size={15}/>
                                        </div>

                                        {/* Dropdown Menu */}
                                        {isOpen && (
                                            <>
                                                <div
                                                    className="fixed inset-0 z-10"
                                                    onClick={() => setIsOpen(false)}
                                                />

                                                <ul className="absolute right-0 mt-2 w-36 bg-[#f7f7f7] border border-gray-300 rounded shadow-2xl z-20 overflow-hidden">
                                                    <div
                                                        className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
                                                        {options.map((option, index) => (
                                                            <li
                                                                key={index}
                                                                onClick={() => {
                                                                    console.log(option);
                                                                    setIsOpen(false);
                                                                }}
                                                                className="px-4 py-2 text-[12px] text-black hover:bg-primary hover:text-white cursor-pointer transition-sales-orders"
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
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead className="bg-gray-50">
                                <tr className="border border-gray-200">
                                    <th className="p-3 border border-gray-200">
                                        <CustomCheckbox/>
                                    </th>
                                    <th className="p-3 border border-gray-200 text-center">SI</th>
                                    <th className="p-3 border border-gray-200 text-left">Code</th>
                                    <th className="p-3 border border-gray-200 text-left">GodownName</th>
                                    <th className="p-3 border border-gray-200 text-left">Product Name</th>
                                    <th className="p-3 border border-gray-200 text-left">ColorName</th>
                                    <th className="p-3 border border-gray-200 text-left">Company Name</th>
                                    <th className="p-3 border border-gray-200 text-left">Quantity</th>
                                    <th className="p-3 border border-gray-200 text-left">Cash Sales Rate</th>
                                    <th className="p-3 border border-gray-200 text-center">S.Rate Update</th>
                                </tr>
                                </thead>
                                <tbody>
                                {paginatedData.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={14}
                                            className="text-center p-4 text-gray-500"
                                        >
                                            No Data Found
                                        </td>
                                    </tr>
                                )}

                                {paginatedData.map((item, index) => (
                                    <tr key={item.id} className="border border-gray-200 hover:bg-gray-50">
                                        <td className="p-3 border border-gray-200 text-center">
                                            <CustomCheckbox/>
                                        </td>

                                        <td className="p-3 border border-gray-200 text-center">
                                            {(page - 1) * entries + index + 1}
                                        </td>

                                        <td className="p-3 border border-gray-200">
                                            {item.name}
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
                                        <td className="p-3 border border-gray-200 text-center">
                                            <span onClick={() => setOpenUpdateStockModal(true)}
                                                  className="py-2 px-4 bg-primary rounded text-[12px] text-white cursor-pointer">
                                                Update
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Bottom Info + Pagination */}
                        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-3">

                            {/* Info */}
                            <p className="text-sm text-gray-600">
                                Showing {paginatedData.length} of {filteredData.length} entries
                            </p>

                            {/* Pagination */}
                            <div className="flex gap-1">

                                <button
                                    disabled={page === 1}
                                    onClick={() => setPage(page - 1)}
                                    className="px-3 py-1 border cursor-pointer border-gray-200 rounded disabled:opacity-40"
                                >
                                    Previous
                                </button>

                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setPage(i + 1)}
                                        className={`px-3 py-1 border cursor-pointer border-gray-200 rounded ${
                                            page === i + 1
                                                ? "bg-green-500 text-white"
                                                : ""
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button
                                    disabled={page === totalPages}
                                    onClick={() => setPage(page + 1)}
                                    className="px-3 py-1 border border-gray-200 cursor-pointer rounded disabled:opacity-40"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Update Stock MODAL */}
                {openUpdateStockModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenUpdateStockModal(false)}/>
                        <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenUpdateStockModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold mb-4">Update</h3>
                            <div className="py-4 border-b border-t border-gray-200">
                                <form action="" method="">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Product Name:
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Cash Sales Rate:
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
                                <button onClick={() => setOpenUpdateStockModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenUpdateStockModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Update
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