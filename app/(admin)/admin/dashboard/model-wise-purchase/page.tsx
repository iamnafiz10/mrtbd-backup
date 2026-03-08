"use client";
import React, {useEffect, useMemo, useState} from 'react';
import {FaCheck} from "react-icons/fa";
import {RxCross1} from "react-icons/rx";
import CustomCheckbox from "@/app/(admin)/admin/dashboard/helper/CustomCheckbox";
import {FiPlusSquare} from "react-icons/fi";

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

    // Checkbox select only one at a time
    const [checkboxSelected, setCheckboxSelected] = useState<string>("pws");

    // -------- PWS Modal ---------- //
    const [openPWSModal, setOpenPWSModal] = useState(false);
    useEffect(() => {
        if (openPWSModal) {
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
    }, [openPWSModal]);

    // -------- CWP Modal ---------- //
    const [openCWPModal, setOpenCWPModal] = useState(false);
    useEffect(() => {
        if (openCWPModal) {
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
    }, [openCWPModal]);

    // -------- CTWS Modal ---------- //
    const [openCTWSModal, setOpenCTWSModal] = useState(false);
    useEffect(() => {
        if (openCTWSModal) {
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
    }, [openCTWSModal]);

    // -------- SupplierPick Modal ---------- //
    const [openSupplierPickModal, setOpenSupplierPickModal] = useState(false);
    useEffect(() => {
        if (openSupplierPickModal) {
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
    }, [openSupplierPickModal]);
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Model wise Purchase Details</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Form Date:
                                            </label>
                                            <input
                                                type="date"
                                                placeholder="Enter Address"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                To Date:
                                            </label>
                                            <input
                                                type="date"
                                                placeholder="Enter Address"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full">
                                            <div className="mb-4 flex items-center justify-between text-[14px]">
                                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={checkboxSelected === "pws"}
                                                        onChange={() => setCheckboxSelected("pws")}
                                                    />
                                                    <div
                                                        className={`w-4 h-4 border rounded flex items-center justify-center 
                                                        ${checkboxSelected === "pws" ? "bg-primary border-primary" : "border-gray-300"}`}
                                                    >
                                                        {checkboxSelected === "pws" &&
                                                            <FaCheck className="text-white text-[10px]"/>}
                                                    </div>
                                                    <span>Product Wise Purchase</span>
                                                </label>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <div onClick={() => setOpenPWSModal(true)}
                                                 className="icon_box flex items-center gap-1 bg-primary p-1 text-white rounded cursor-pointer">
                                                <FiPlusSquare size={20}/>
                                                Pick
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input_box mt-4 flex items-center gap-4">
                                        <div className="w-full">
                                            <div className="mb-4 flex items-center justify-between text-[14px]">
                                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={checkboxSelected === "cwp"}
                                                        onChange={() => setCheckboxSelected("cwp")}
                                                    />
                                                    <div
                                                        className={`w-4 h-4 border rounded flex items-center justify-center 
                                                        ${checkboxSelected === "cwp" ? "bg-primary border-primary" : "border-gray-300"}`}
                                                    >
                                                        {checkboxSelected === "cwp" &&
                                                            <FaCheck className="text-white text-[10px]"/>}
                                                    </div>
                                                    <span>Company Wise Purchase</span>
                                                </label>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <div onClick={() => setOpenCWPModal(true)}
                                                 className="icon_box flex items-center gap-1 bg-primary p-1 text-white rounded cursor-pointer">
                                                <FiPlusSquare size={20}/>
                                                Pick
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input_box mt-4 flex items-center gap-4">
                                        <div className="w-full">
                                            <div className="mb-4 flex items-center justify-between text-[14px]">
                                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={checkboxSelected === "ctws"}
                                                        onChange={() => setCheckboxSelected("ctws")}
                                                    />
                                                    <div
                                                        className={`w-4 h-4 border rounded flex items-center justify-center 
                                                        ${checkboxSelected === "ctws" ? "bg-primary border-primary" : "border-gray-300"}`}
                                                    >
                                                        {checkboxSelected === "ctws" &&
                                                            <FaCheck className="text-white text-[10px]"/>}
                                                    </div>
                                                    <span>Category Wise Purchase</span>
                                                </label>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <div onClick={() => setOpenCTWSModal(true)}
                                                 className="icon_box flex items-center gap-1 bg-primary p-1 text-white rounded cursor-pointer">
                                                <FiPlusSquare size={20}/>
                                                Pick
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Supplier
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <div onClick={() => setOpenSupplierPickModal(true)}
                                                 className="icon_box flex items-center gap-1 bg-primary p-1 text-white rounded cursor-pointer">
                                                <FiPlusSquare size={20}/>
                                                Pick
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded p-4 mt-4">
                            <div className="flex items-center gap-4">
                                <button onClick={() => window.print()}
                                        className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                    Preview
                                </button>
                                <div id="print-area" className="text-2xl">
                                    Print Data Coming Here...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*PWS Modal*/}
                {openPWSModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenPWSModal(false)}/>
                        <div
                            className="w-[90%] max-w-5xl relative bg-white rounded shadow mx-4 px-4 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenPWSModal(false)}>
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
                                            <th className="p-3 border border-gray-200 text-left">SI</th>
                                            <th className="p-3 border border-gray-200 text-left">Code</th>
                                            <th className="p-3 border border-gray-200 text-left">Name</th>
                                            <th className="p-3 border border-gray-200 text-left">Category</th>
                                            <th className="p-3 border border-gray-200 text-left">Pre. Stock</th>
                                            <th className="p-3 border border-gray-200 text-left">MRP Rate</th>
                                            <th className="p-3 border border-gray-200 text-left">P.Rate</th>
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
                                <button onClick={() => setOpenPWSModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {/*CWP Modal*/}
                {openCWPModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCWPModal(false)}/>
                        <div
                            className="w-[90%] max-w-5xl relative bg-white rounded shadow mx-4 px-4 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCWPModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold pb-4 border-b border-gray-300">
                                Existing Companies
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
                                            <th className="p-3 border border-gray-200 text-left">SI</th>
                                            <th className="p-3 border border-gray-200 text-left">Code</th>
                                            <th className="p-3 border border-gray-200 text-left">Name</th>
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
                                <button onClick={() => setOpenCWPModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {/*CTWS Modal*/}
                {openCTWSModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCTWSModal(false)}/>
                        <div
                            className="w-[90%] max-w-5xl relative bg-white rounded shadow mx-4 px-4 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCTWSModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold pb-4 border-b border-gray-300">
                                Existing Categories
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
                                            <th className="p-3 border border-gray-200 text-left">SI</th>
                                            <th className="p-3 border border-gray-200 text-left">Code</th>
                                            <th className="p-3 border border-gray-200 text-left">Name</th>
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
                                <button onClick={() => setOpenCTWSModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/*SupplierPick Modal*/}
                {openSupplierPickModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenSupplierPickModal(false)}/>
                        <div
                            className="w-[90%] max-w-5xl relative bg-white rounded shadow mx-4 px-4 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenSupplierPickModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold pb-4 border-b border-gray-300">
                                Existing Suppliers
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
                                            <th className="p-3 border border-gray-200 text-left">SI</th>
                                            <th className="p-3 border border-gray-200 text-left">Code</th>
                                            <th className="p-3 border border-gray-200 text-left">Name</th>
                                            <th className="p-3 border border-gray-200 text-left">Contact No.</th>
                                            <th className="p-3 border border-gray-200 text-left">Total Due</th>
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
                                                    {item.Company}
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
                                <button onClick={() => setOpenSupplierPickModal(false)}
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