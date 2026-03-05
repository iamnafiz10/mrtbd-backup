"use client";
import React, {useEffect, useMemo, useState} from 'react';
import {FiPlusSquare} from "react-icons/fi";
import {RxCross1} from "react-icons/rx";
import {FaCartPlus, FaTrashAlt} from "react-icons/fa";
import {BsEraser} from "react-icons/bs";
import CustomCheckbox from "@/app/(admin)/admin/dashboard/helper/CustomCheckbox";

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

    // -------- ProductPick Modal ---------- //
    const [openProductPickModal, setOpenProductPickModal] = useState(false);
    useEffect(() => {
        if (openProductPickModal) {
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
    }, [openProductPickModal]);
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Create Sales Return</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Inv. No.
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="00001"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Sales Date
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
                                                Customer
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <div onClick={() => setOpenCustomerPickModal(true)}
                                                 className="icon_box flex items-center gap-1 bg-primary p-1 text-white rounded cursor-pointer">
                                                <FiPlusSquare size={20}/>
                                                Pick
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-end gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Prev. Due
                                            </label>
                                            <input
                                                type="text"
                                                disabled
                                                placeholder=""
                                                className="w-full text-[14px] border bg-gray-100 border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0"></div>
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
                                                <th className="p-3 border border-gray-200 text-left">Return IMEI NO</th>
                                                <th className="p-3 border border-gray-200 text-left">Sales Price</th>
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
                                                        {item.GodownName}
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
                                            <input
                                                type="text"
                                                placeholder="Enter Return IMEI"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Return Product
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <div onClick={() => setOpenProductPickModal(true)}
                                                 className="icon_box flex items-center gap-1 bg-primary p-1 text-white rounded cursor-pointer">
                                                <FiPlusSquare size={20}/>
                                                Pick
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Color
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Damage IMEI
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
                                                Qty
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Sales Rate
                                            </label>
                                            <input
                                                type="number"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
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
                                        <button
                                            className="flex items-center gap-1 py-2 px-4 bg-yellow-400 hover:bg-yellow-600 text-white rounded text-[13px] cursor-pointer">
                                            <BsEraser size={15}/> Clear
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <form action="" method="" className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Net Total
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Return Amount
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
                                                Payment Due
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Remarks
                                            </label>
                                            <input
                                                type="number"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                </form>

                                <div className="border border-gray-300 rounded p-4 mt-4">
                                    <div className="flex items-center gap-4">
                                        <button
                                            className="flex items-center gap-1 py-2 px-4 bg-blue-400 hover:bg-blue-600 text-white rounded text-[13px] cursor-pointer">
                                            Return Save
                                        </button>
                                        <button
                                            className="flex items-center gap-1 py-2 px-4 bg-yellow-400 hover:bg-yellow-600 text-white rounded text-[13px] cursor-pointer">
                                            <BsEraser size={15}/> Clear
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*CustomerPick Modal*/}
                {openCustomerPickModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCustomerPickModal(false)}/>
                        <div
                            className="w-[90%] max-w-5xl relative bg-white rounded shadow mx-4 px-4 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCustomerPickModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold pb-4 border-b border-gray-300">
                                Existing Customers
                            </h3>

                            {/*Data Table One */}
                            <div className="bg-white p-2 rounded">
                                {/* Top Controls */}
                                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
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

                                    {/* Search */}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Product Name..."
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
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead className="bg-gray-50">
                                        <tr className="border border-gray-200">
                                            <th className="p-3 border border-gray-200">
                                                <CustomCheckbox/>
                                            </th>
                                            <th className="p-3 border border-gray-200 text-left">SI</th>
                                            <th className="p-3 border border-gray-200 text-left">Code</th>
                                            <th className="p-3 border border-gray-200 text-left">Name</th>
                                            <th className="p-3 border border-gray-200 text-center">Contact No.</th>
                                            <th className="p-3 border border-gray-200 text-center">Address</th>
                                            <th className="p-3 border border-gray-200 text-center">Sales Due</th>
                                            <th className="p-3 border border-gray-200 text-center">Hire Due</th>
                                            <th className="p-3 border border-gray-200 text-center">Total Due</th>
                                            <th className="p-3 border border-gray-200 text-center">DMS Code</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {paginatedData.length === 0 && (
                                            <tr>
                                                <td
                                                    colSpan={10}
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

                                                <td className="p-3 border border-gray-200">
                                                    {(page - 1) * entries + index + 1}
                                                </td>

                                                <td className="p-3 border border-gray-200">
                                                    {item.name}
                                                </td>
                                                <td className="p-3 border border-gray-200">
                                                    {item.GodownName}
                                                </td>
                                                <td className="p-3 border border-gray-200">
                                                    {item.Company}
                                                </td>
                                                <td className="p-3 border border-gray-200 font-medium">
                                                    {item.Category}
                                                </td>
                                                <td className="p-3 border border-gray-200">
                                                    {item.Color}
                                                </td>
                                                <td className="p-3 border border-gray-200 text-center">
                                                    {item.MRPRate}
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

                            <div className="flex justify-end gap-3 mt-4 text-[14px]">
                                <button onClick={() => setOpenCustomerPickModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/*ProductPick Modal*/}
                {openProductPickModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenProductPickModal(false)}/>
                        <div
                            className="w-[90%] max-w-5xl relative bg-white rounded shadow mx-4 px-4 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenProductPickModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold pb-4 border-b border-gray-300">
                                Existing Products
                            </h3>

                            {/*Data Table One */}
                            <div className="bg-white p-2 rounded">
                                {/* Top Controls */}
                                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
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

                                    {/* Search */}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Product Name..."
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
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead className="bg-gray-50">
                                        <tr className="border border-gray-200">
                                            <th className="p-3 border border-gray-200">
                                                <CustomCheckbox/>
                                            </th>
                                            <th className="p-3 border border-gray-200 text-left">SI</th>
                                            <th className="p-3 border border-gray-200 text-left">Code</th>
                                            <th className="p-3 border border-gray-200 text-left">Name</th>
                                            <th className="p-3 border border-gray-200 text-center">Godown Name</th>
                                            <th className="p-3 border border-gray-200 text-center">Color</th>
                                            <th className="p-3 border border-gray-200 text-center">Category</th>
                                            <th className="p-3 border border-gray-200 text-center">Barcode NO</th>
                                            <th className="p-3 border border-gray-200 text-center">MRP Rate</th>
                                            <th className="p-3 border border-gray-200 text-center">Stock Quantity</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {paginatedData.length === 0 && (
                                            <tr>
                                                <td
                                                    colSpan={10}
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

                                                <td className="p-3 border border-gray-200">
                                                    {(page - 1) * entries + index + 1}
                                                </td>

                                                <td className="p-3 border border-gray-200">
                                                    {item.name}
                                                </td>
                                                <td className="p-3 border border-gray-200">
                                                    {item.GodownName}
                                                </td>
                                                <td className="p-3 border border-gray-200">
                                                    {item.Company}
                                                </td>
                                                <td className="p-3 border border-gray-200 font-medium">
                                                    {item.Category}
                                                </td>
                                                <td className="p-3 border border-gray-200">
                                                    {item.Color}
                                                </td>
                                                <td className="p-3 border border-gray-200 text-center">
                                                    {item.MRPRate}
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

                            <div className="flex justify-end gap-3 mt-4 text-[14px]">
                                <button onClick={() => setOpenProductPickModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
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