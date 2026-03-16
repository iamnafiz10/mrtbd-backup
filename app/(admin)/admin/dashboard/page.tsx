"use client";
import React, {useEffect, useMemo, useState} from 'react';
import MonthlySalesReport from "@/app/(admin)/admin/dashboard/helper/MonthlySalesReport";
import MonthlyExpenseReport from "@/app/(admin)/admin/dashboard/helper/MonthlyExpenseReport";
import {RxCross1} from "react-icons/rx";
import CustomCheckbox from "@/app/(admin)/admin/dashboard/helper/CustomCheckbox";
import {FaHandHoldingDollar} from "react-icons/fa6";
import {LuShoppingCart} from "react-icons/lu";
import {BsGraphUp} from "react-icons/bs";
import {SlHandbag} from "react-icons/sl";

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
    // -------- LowStock Modal Start ---------- //
    const [openLowStockModal, setOpenLowStockModal] = useState(false);
    useEffect(() => {
        if (openLowStockModal) {
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
    }, [openLowStockModal]);
    // ************ LowStock Modal End ********** //

    // -------- Stock Modal Start ---------- //
    const [openStockModal, setOpenStockModal] = useState(false);
    useEffect(() => {
        if (openStockModal) {
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
    }, [openStockModal]);
    // ************ Stock Modal End ********** //

    // -------- Advance Modal Start ---------- //
    const [openAdvanceModal, setOpenAdvanceModal] = useState(false);
    useEffect(() => {
        if (openAdvanceModal) {
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
    }, [openAdvanceModal]);
    // ************ Advance Modal End ********** //

    // -------- Today Modal Start ---------- //
    const [openTodayModal, setOpenTodayModal] = useState(false);
    useEffect(() => {
        if (openTodayModal) {
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
    }, [openTodayModal]);
    // ************ Today Modal End ********** //

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
    return (
        <>
            <section id="dashboard-section">
                <div className="container_wrap mt-0 md:mt-10">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 text-gray-800 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Dashboard</h2>
                    </div>

                    <div className="border border-gray-200 p-4 mt-4 bg-white">
                        <h4 className="text-[14px] text-primary font-bold">Today Data</h4>
                        <div
                            className="mt-1 w-full block space-y-4 md:space-y-0 md:flex items-center justify-center gap-2">
                            <div onClick={() => setOpenLowStockModal(true)}
                                 className="input_box mx-auto cursor-pointer w-full mt-2 bg-yellow-500 rounded p-2 text-white text-center">
                                <h2 className="text-[14px]">Low Stock Products</h2>
                            </div>
                            <div onClick={() => setOpenStockModal(true)}
                                 className="input_box mx-auto cursor-pointer w-full mt-2 bg-primary rounded p-2 text-white text-center">
                                <h2 className="text-[14px]">Search Stock</h2>
                            </div>
                            <div onClick={() => setOpenAdvanceModal(true)}
                                 className="input_box mx-auto cursor-pointer w-full mt-2 bg-blue-400 rounded p-2 text-white text-center">
                                <h2 className="text-[14px]">Advance Search</h2>
                            </div>
                            <div onClick={() => setOpenTodayModal(true)}
                                 className="input_box mx-auto cursor-pointer w-full mt-2 bg-primary rounded p-2 text-white text-center">
                                <h2 className="text-[14px]">Today</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
                            <div
                                className="col py-3 px-4 bg-[#FBE2E9] shadow rounded hover:-translate-y-2 transform transition duration-500">
                                <div className="box flex items-center justify-between">
                                    <div className="details text-[13px] text-gray-800">
                                        <h4 className="font-semibold">Sales amount</h4>
                                        <h4 className="text-[18px] font-semibold">
                                            ৳0
                                        </h4>
                                    </div>
                                    <div className="icon bg-green-400 text-white p-2 rounded-full">
                                        <FaHandHoldingDollar size={25}/>
                                    </div>
                                </div>
                                <h4 className="mt-4 text-gray-600">
                                    **** **** **** ****
                                </h4>
                            </div>
                            <div
                                className="col py-3 px-4 bg-[#FEE2FE] shadow rounded hover:-translate-y-2 transform transition duration-500">
                                <div className="box flex items-center justify-between">
                                    <div className="details text-[13px] text-gray-800">
                                        <h4 className="font-semibold">Purchase amount</h4>
                                        <h4 className="text-[18px] font-semibold">
                                            ৳0
                                        </h4>
                                    </div>
                                    <div className="icon bg-[#800080] text-white p-2 rounded-full">
                                        <LuShoppingCart size={25}/>
                                    </div>
                                </div>
                                <h4 className="mt-4 text-gray-600">
                                    **** **** **** ****
                                </h4>
                            </div>
                            <div
                                className="col py-3 px-4 bg-[#EBE2EB] shadow rounded hover:-translate-y-2 transform transition duration-500">
                                <div className="box flex items-center justify-between">
                                    <div className="details text-[13px] text-gray-800">
                                        <h4 className="font-semibold">Expense amount</h4>
                                        <h4 className="text-[18px] font-semibold">
                                            ৳0
                                        </h4>
                                    </div>
                                    <div className="icon bg-[#008000] text-white p-2 rounded-full">
                                        <BsGraphUp size={25}/>
                                    </div>
                                </div>
                                <h4 className="mt-4 text-gray-600">
                                    **** **** **** ****
                                </h4>
                            </div>
                            <div
                                className="col py-3 px-4 bg-[#ECECFE] shadow rounded hover:-translate-y-2 transform transition duration-500">
                                <div className="box flex items-center justify-between">
                                    <div className="details text-[13px] text-gray-800">
                                        <h4 className="font-semibold">Collection amount</h4>
                                        <h4 className="text-[18px] font-semibold">
                                            ৳0
                                        </h4>
                                    </div>
                                    <div className="icon bg-[#0000FF] text-white p-2 rounded-full">
                                        <SlHandbag size={25}/>
                                    </div>
                                </div>
                                <h4 className="mt-4 text-gray-600">
                                    **** **** **** ****
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
                        <div className="col">
                            <MonthlySalesReport/>
                        </div>
                        <div className="col">
                            <MonthlyExpenseReport/>
                        </div>
                    </div>
                </div>


                {/*LowStock Modal*/}
                {openLowStockModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenLowStockModal(false)}/>
                        <div
                            className="w-[90%] max-w-5xl relative bg-white rounded shadow mx-4 px-4 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenLowStockModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold pb-4 border-b border-gray-300">Low Stock products</h3>

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
                                            <th className="p-3 border border-gray-200 text-left">Name</th>
                                            <th className="p-3 border border-gray-200 text-left">Product Name</th>
                                            <th className="p-3 border border-gray-200 text-left">Company</th>
                                            <th className="p-3 border border-gray-200 text-center">Qualtity</th>
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
                                                    <CustomCheckbox/>
                                                </td>

                                                <td className="p-3 border border-gray-200">
                                                    {(page - 1) * entries + index + 1}
                                                </td>

                                                <td className="p-3 border border-gray-200">
                                                    {item.name}
                                                </td>
                                                <td className="p-3 border border-gray-200">
                                                    {item.Color}
                                                </td>
                                                <td className="p-3 border border-gray-200 text-center">
                                                    {item.MRPRate}
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
                                <button onClick={() => setOpenLowStockModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/*Stock Modal*/}
                {openStockModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenStockModal(false)}/>
                        <div
                            className="w-[90%] max-w-5xl relative bg-white rounded shadow mx-4 px-4 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenStockModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold pb-4 border-b border-gray-300">Stock</h3>

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
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead className="bg-gray-50">
                                        <tr className="border border-gray-200">
                                            <th className="p-3 border border-gray-200">
                                                <CustomCheckbox/>
                                            </th>
                                            <th className="p-3 border border-gray-200 text-left">Name</th>
                                            <th className="p-3 border border-gray-200 text-left">Godown Name</th>
                                            <th className="p-3 border border-gray-200 text-left">Company</th>
                                            <th className="p-3 border border-gray-200 text-center">Category</th>
                                            <th className="p-3 border border-gray-200 text-center">Color</th>
                                            <th className="p-3 border border-gray-200 text-center">MRP Rate</th>
                                            <th className="p-3 border border-gray-200 text-center">Stock Qty</th>
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
                                <button onClick={() => setOpenStockModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/*Advance Modal*/}
                {openAdvanceModal && (
                    <div className="fixed inset-0 z-50 flex justify-center overflow-y-auto">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenAdvanceModal(false)}/>
                        <div
                            className="relative bg-white rounded shadow w-full max-w-6xl mt-10 mb-10 max-h-[90vh] flex flex-col z-10 text-[14px]">
                            {/* Modal Header - Fixed */}
                            <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
                                <button
                                    className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenAdvanceModal(false)}
                                >
                                    <RxCross1 size={18}/>
                                </button>
                                <h3 className="text-[16px] font-semibold">Advance</h3>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="overflow-y-auto px-6 py-4 flex-grow">
                                {/*Data Table */}
                                <div className="bg-white p-2 rounded">
                                    {/* Top Controls */}
                                    <div className="flex items-center justify-center gap-2 my-4">
                                        <h3 className="font-semibold text-[14px]">
                                            Search By IMEI:
                                        </h3>

                                        {/* Search */}
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Enter IMEI..."
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

                                    <div className="block md:flex gap-4">
                                        <div className="col w-full">
                                            {/* Table */}
                                            <div className="overflow-x-auto">
                                                <div
                                                    className="header_wrap py-2 px-4 bg-primary text-white font-semibold text-[12px]">
                                                    <h2>Purchase Details</h2>
                                                </div>
                                                <div className="w-full text-[12px] overflow-hidden">
                                                    <table
                                                        className="w-full border-collapse border border-primary text-[#1e293b]">
                                                        <tbody>
                                                        {/* Row 1 */}
                                                        <tr className="border-b border-primary">
                                                            <td className="w-1/3 border-r border-primary p-3 text-center font-bold">
                                                                Challan Date:
                                                            </td>
                                                            <td className="w-[10%] border-r border-primary p-3">
                                                                {/* Value or Input goes here */}
                                                            </td>
                                                            <td className="w-1/3 border-r border-primary p-3 text-center font-bold">
                                                                Challan No:
                                                            </td>
                                                            <td className="w-[10%] p-3">
                                                                {/* Value or Input goes here */}
                                                            </td>
                                                        </tr>

                                                        {/* Row 2 */}
                                                        <tr>
                                                            <td className="w-1/3 border-r border-primary p-3 text-center font-bold">
                                                                Supplier Code:
                                                            </td>
                                                            <td className="w-[10%] border-r border-primary p-3">
                                                                {/* Value or Input goes here */}
                                                            </td>
                                                            <td className="w-1/3 border-r border-primary p-3 text-center font-bold">
                                                                Supplier Name:
                                                            </td>
                                                            <td className="w-[10%] p-3">
                                                                {/* Value or Input goes here */}
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                {/*Data Table*/}
                                                <table className="w-full mt-4 border-collapse text-[12px]">
                                                    <thead className="bg-gray-50">
                                                    <tr className="border border-gray-200">
                                                        <th className="p-3 border border-gray-200 text-left">Sl</th>
                                                        <th className="p-3 border border-gray-200 text-left">Code</th>
                                                        <th className="p-3 border border-gray-200 text-left">Product</th>
                                                        <th className="p-3 border border-gray-200 text-center">IMEI</th>
                                                        <th className="p-3 border border-gray-200 text-center">Purchase
                                                            Rate
                                                        </th>
                                                        <th className="p-3 border border-gray-200 text-center">QTY</th>
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
                                                        <tr key={item.id}
                                                            className="border border-gray-200 hover:bg-gray-50">
                                                            <td className="p-3 border border-gray-200">
                                                                {item.name}
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
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col w-full">
                                            {/* Table */}
                                            <div className="overflow-x-auto">
                                                <div
                                                    className="header_wrap py-2 px-4 bg-[#18BC9C] text-white font-semibold text-[12px]">
                                                    <h2>Sales Details</h2>
                                                </div>
                                                <div className="w-full text-[12px] overflow-hidden">
                                                    <table
                                                        className="w-full border-collapse border border-primary text-[#1e293b]">
                                                        <tbody>
                                                        {/* Row 1 */}
                                                        <tr className="border-b border-primary">
                                                            <td className="w-1/3 border-r border-primary p-3 text-center font-bold">
                                                                Invoice Date:
                                                            </td>
                                                            <td className="w-[10%] border-r border-primary p-3">
                                                                {/* Value or Input goes here */}
                                                            </td>
                                                            <td className="w-1/3 border-r border-primary p-3 text-center font-bold">
                                                                Invoice No:
                                                            </td>
                                                            <td className="w-[10%] p-3">
                                                                {/* Value or Input goes here */}
                                                            </td>
                                                        </tr>

                                                        {/* Row 2 */}
                                                        <tr>
                                                            <td className="w-1/3 border-r border-primary p-3 text-center font-bold">
                                                                Customer Code:
                                                            </td>
                                                            <td className="w-[10%] border-r border-primary p-3">
                                                                {/* Value or Input goes here */}
                                                            </td>
                                                            <td className="w-1/3 border-r border-primary p-3 text-center font-bold">
                                                                Customer Name:
                                                            </td>
                                                            <td className="w-[10%] p-3">
                                                                {/* Value or Input goes here */}
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                {/*Data Table*/}
                                                <table className="w-full mt-4 border-collapse text-[12px]">
                                                    <thead className="bg-gray-50">
                                                    <tr className="border border-gray-200">
                                                        <th className="p-3 border border-gray-200 text-left">Sl</th>
                                                        <th className="p-3 border border-gray-200 text-left">Code</th>
                                                        <th className="p-3 border border-gray-200 text-left">Product</th>
                                                        <th className="p-3 border border-gray-200 text-center">IMEI</th>
                                                        <th className="p-3 border border-gray-200 text-center">Sales
                                                            Rate
                                                        </th>
                                                        <th className="p-3 border border-gray-200 text-center">QTY</th>
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
                                                        <tr key={item.id}
                                                            className="border border-gray-200 hover:bg-gray-50">
                                                            <td className="p-3 border border-gray-200">
                                                                {item.name}
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
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block md:flex gap-4 mt-6 overflow-x-auto">
                                        <div className="col w-full">
                                            {/* Table */}
                                            <div
                                                className="header_wrap py-2 px-4 bg-[#F39C12] text-white font-semibold text-[12px]">
                                                <h2>Replacement Details</h2>
                                            </div>
                                            {/*Data Table*/}
                                            <table className="w-full mt-4 border-collapse text-[12px]">
                                                <thead className="bg-gray-50">
                                                <tr className="border border-gray-200">
                                                    <th className="p-3 border border-gray-200 text-left">Sl</th>
                                                    <th className="p-3 border border-gray-200 text-left">Code</th>
                                                    <th className="p-3 border border-gray-200 text-left">Product</th>
                                                    <th className="p-3 border border-gray-200 text-center">IMEI</th>
                                                    <th className="p-3 border border-gray-200 text-center">Sales Rate
                                                    </th>
                                                    <th className="p-3 border border-gray-200 text-center">CustomerCode</th>
                                                    <th className="p-3 border border-gray-200 text-center">Customer
                                                        Name
                                                    </th>
                                                    <th className="p-3 border border-gray-200 text-center">Sales Date
                                                    </th>
                                                    <th className="p-3 border border-gray-200 text-center">Replace
                                                        Date
                                                    </th>
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
                                                    <tr key={item.id}
                                                        className="border border-gray-200 hover:bg-gray-50">
                                                        <td className="p-3 border border-gray-200">
                                                            {item.name}
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

                                        <div className="col w-full mt-4 md:mt-0">
                                            {/* Table */}
                                            <div
                                                className="header_wrap py-2 px-4 bg-[#E74C3C] text-white font-semibold text-[12px]">
                                                <h2>Sales Return Details</h2>
                                            </div>
                                            {/*Data Table*/}
                                            <table className="w-full mt-4 border-collapse text-[12px]">
                                                <thead className="bg-gray-50">
                                                <tr className="border border-gray-200">
                                                    <th className="p-3 border border-gray-200 text-left">Sl</th>
                                                    <th className="p-3 border border-gray-200 text-left">Code</th>
                                                    <th className="p-3 border border-gray-200 text-left">Product</th>
                                                    <th className="p-3 border border-gray-200 text-center">IMEI</th>
                                                    <th className="p-3 border border-gray-200 text-center">Sales Rate
                                                    </th>
                                                    <th className="p-3 border border-gray-200 text-center">CustomerCode</th>
                                                    <th className="p-3 border border-gray-200 text-center">Customer
                                                        Name
                                                    </th>
                                                    <th className="p-3 border border-gray-200 text-center">Sales Date
                                                    </th>
                                                    <th className="p-3 border border-gray-200 text-center">Return Date
                                                    </th>
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
                                                    <tr key={item.id}
                                                        className="border border-gray-200 hover:bg-gray-50">
                                                        <td className="p-3 border border-gray-200">
                                                            {item.name}
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

                                    <div className="block md:flex gap-4 mt-6 overflow-x-auto">
                                        <div className="col w-full">
                                            {/* Table */}
                                            <div
                                                className="header_wrap py-2 px-4 bg-[#000000] text-white font-semibold text-[12px]">
                                                <h2>Transfer Details</h2>
                                            </div>
                                            {/*Data Table*/}
                                            <table className="w-full mt-4 border-collapse text-[12px]">
                                                <thead className="bg-gray-50">
                                                <tr className="border border-gray-200">
                                                    <th className="p-3 border border-gray-200 text-left">Sl</th>
                                                    <th className="p-3 border border-gray-200 text-left">Date</th>
                                                    <th className="p-3 border border-gray-200 text-left">TransferNo</th>
                                                    <th className="p-3 border border-gray-200 text-center">Code</th>
                                                    <th className="p-3 border border-gray-200 text-center">
                                                        Product
                                                    </th>
                                                    <th className="p-3 border border-gray-200 text-center">IMEI</th>
                                                    <th className="p-3 border border-gray-200 text-center">
                                                        P. Rate
                                                    </th>
                                                    <th className="p-3 border border-gray-200 text-center">
                                                        From Concern
                                                    </th>
                                                    <th className="p-3 border border-gray-200 text-center">
                                                        To Concern
                                                    </th>
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
                                                    <tr key={item.id}
                                                        className="border border-gray-200 hover:bg-gray-50">
                                                        <td className="p-3 border border-gray-200">
                                                            {item.name}
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
                            </div>
                            {/* Modal Footer - Fixed */}
                            <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
                                <div className="flex justify-end gap-3 text-[14px]">
                                    <button onClick={() => setOpenAdvanceModal(false)}
                                            className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/*Today Modal*/}
                {openTodayModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenTodayModal(false)}/>
                        <div
                            className="w-[90%] max-w-5xl relative bg-white rounded shadow mx-4 px-4 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenTodayModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold pb-4 border-b border-gray-300">Today{`'`}s Installment(02 Mar 2026)</h3>

                            {/*Today's Installment*/}
                            <div className="grid grid-cols-1">
                                <div className="w-full mx-auto mt-4 bg-white py-4 text-[14px] border border-gray-200 rounded">
                                    <div
                                        className="p-4 border-b border-gray-200 block md:flex items-center justify-end">
                                        <button type='button'
                                                className="cursor-pointer py-1 px-4 bg-primary rounded text-white">
                                            Print
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto w-full">
                                        <table className="min-w-max text-[12px] w-full text-left border-collapse">
                                            <thead>
                                            <tr className="text-gray-800 font-bold border-b border-gray-200">
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">SI</th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Action</th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Invoice
                                                    No
                                                </th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Sales
                                                    Date
                                                </th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Payment
                                                    Date
                                                </th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Remind
                                                    Date
                                                </th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Code</th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Customer
                                                    Name
                                                </th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Address &
                                                    Contact
                                                </th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Product
                                                    Name
                                                </th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Installment</th>
                                                <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap">Default
                                                    Amount
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="text-gray-800">
                                            <tr className="bg-gray-50 border-b border-gray-200">
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">1</td>
                                                <td className="px-6 py-2 border-r border-gray-200 text-primary hover:underline cursor-pointer whitespace-nowrap">
                                                    ACW20254
                                                </td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                                <td className="px-6 py-2 border-r border-gray-200 whitespace-nowrap">DATA</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-4 text-[14px]">
                                <button onClick={() => setOpenTodayModal(false)}
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