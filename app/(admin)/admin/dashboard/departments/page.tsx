"use client";
import React, {useMemo, useState} from 'react';
import CustomCheckbox from "@/app/(admin)/admin/dashboard/helper/CustomCheckbox";
import {FaPlus, FaTrashAlt} from "react-icons/fa";
import {TfiReload} from "react-icons/tfi";
import {RiShareForward2Fill} from "react-icons/ri";
import {FaPencil} from "react-icons/fa6";
import {RxCross1} from "react-icons/rx";
import toast from "react-hot-toast";

type Stock = {
    id: number;
    name: string;
    GodownName: string;
    Company: string;
    Category: string;
    Department: string;
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
        Department: "Data",
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

    // ---------- CREATE / Edit / Delete Department ---------- //
    const [openCreateDepartmentModal, setOpenCreateDepartmentModal] = useState(false);
    const [openEditDepartmentModal, setOpenEditDepartmentModal] = useState(false);
    const [openDeleteDepartmentModal, setOpenDeleteDepartmentModal] = useState(false);
    const handleDepartmentDelete = () => {
        toast.success('Department deleted successfully!');
        setOpenDeleteDepartmentModal(false);
    };

    return (
        <>
            <section id="Department-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Existing Departments</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="flex justify-end">
                            <button onClick={() => setOpenCreateDepartmentModal(true)}
                                    className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                <FaPlus/> Create Department
                            </button>
                        </div>

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
                                                                className="px-4 py-2 text-[12px] text-black hover:bg-primary hover:text-white cursor-pointer transition-Departments"
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
                                    <th className="p-3 border border-gray-200 text-left">Department Code</th>
                                    <th className="p-3 border border-gray-200 text-left">Department Name</th>
                                    <th className="p-3 border border-gray-200 text-left">Status</th>
                                    <th className="p-3 border border-gray-200 text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {paginatedData.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={5}
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
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-200 p-3">
                                            <span
                                                className="px-3 py-1 bg-green-500 rounded text-white text-[12px] cursor-pointer inline-block transition select-none">
                                                Active
                                            </span>
                                        </td>
                                        <td className="p-3 border border-gray-200">
                                            <div className="flex justify-center gap-2">
                                                <button onClick={() => setOpenEditDepartmentModal(true)}
                                                        className="bg-blue-500 p-2 rounded text-white cursor-pointer hover:bg-blue-600 transition">
                                                    <FaPencil size={12}/>
                                                </button>
                                                <button onClick={() => setOpenDeleteDepartmentModal(true)}
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

                {/* CREATE Department MODAL */}
                {openCreateDepartmentModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCreateDepartmentModal(false)}/>
                        <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCreateDepartmentModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold mb-4">Create New Department</h3>
                            <div className="py-4 border-b border-t border-gray-200">
                                <form action="" method="">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Code<span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter Code"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Name<span className="text-red-400">*</span>
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
                                <button onClick={() => setOpenCreateDepartmentModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenCreateDepartmentModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add Department
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* EDIT Department MODAL */}
                {openEditDepartmentModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenEditDepartmentModal(false)}/>
                        <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenEditDepartmentModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold mb-4">Edit Department</h3>
                            <div className="py-4 border-b border-t border-gray-200">
                                <form action="" method="">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Code<span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter Code"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Name<span className="text-red-400">*</span>
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
                                <button onClick={() => setOpenEditDepartmentModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Cancel
                                </button>
                                <button onClick={() => setOpenEditDepartmentModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Update Department
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* DELETE Department MODAL */}
                {openDeleteDepartmentModal && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-custom-opacity"
                        onClick={() => setOpenDeleteDepartmentModal(false)}
                    >
                        <div
                            className="bg-white rounded shadow w-lg mx-4 px-6 py-4 relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button type='button'
                                    className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenDeleteDepartmentModal(false)}
                            >
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] text-gray-800 font-semibold mb-4">
                                Confirm Delete?
                            </h3>
                            <div className="body_text py-4 border-b border-t border-gray-200">
                                <p className="text-gray-500 text-[14px]">
                                    You are going to delete this Department.<br/>
                                    You want to delete it?
                                </p>
                            </div>
                            <div className="flex justify-end gap-3 mt-4 text-[14px]">
                                <button
                                    onClick={() => setOpenDeleteDepartmentModal(false)}
                                    className="px-4 py-2 rounded cursor-pointer bg-primary text-white hover:bg-dark-primary transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDepartmentDelete}
                                    className="px-4 py-2 rounded cursor-pointer bg-red-500 text-white hover:bg-red-700 transition"
                                >
                                    Delete
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