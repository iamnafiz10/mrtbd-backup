"use client";
import React, {useEffect, useMemo, useState} from 'react';
import {FiPlusSquare, FiTrash2} from "react-icons/fi";
import {RxCross1} from "react-icons/rx";
import {FaCheck} from "react-icons/fa";
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
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Create Cash Collection</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Receipt No
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="00001"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
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

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                CollectionType
                                            </label>
                                            <div className="block md:flex items-center gap-2">
                                                <div className="relative w-full mt-4 md:mt-0">
                                                    <select
                                                        className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary">
                                                        <option value="option1">--Select--</option>
                                                        <option value="option2">Normal</option>
                                                        <option value="option3">Installment</option>
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
                                        <div className="w-full mt-4 md:mt-0">
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-2">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Customer Name
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

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Hire Invoice No
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Invoice Due
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
                                                Received Amount
                                            </label>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Due Amt.
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
                                                InterestAmt
                                            </label>
                                            <input
                                                type="number"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Adjustment
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
                                                Remind Date:
                                            </label>
                                            <input
                                                type="date"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <label className="mt-4 flex items-center gap-2 cursor-pointer select-none">
                                        <input type="checkbox" className="peer hidden"/>
                                        <div
                                            className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                                            <FaCheck className="text-white text-[10px]"/>
                                        </div>
                                        <span>Send SMS</span>
                                    </label>
                                </form>
                            </div>
                        </div>

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
                                            <th className="border border-primary px-4 py-2 text-left">Name *</th>
                                            <th className="border border-primary px-4 py-2 text-left">Bank Name *</th>
                                            <th className="border border-primary px-4 py-2 text-left">Cheque No *</th>
                                            <th className="border border-primary px-4 py-2 text-left">Paid Amount *</th>
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

                        <div className="border border-gray-300 rounded p-4 mt-4">
                            <div className="flex items-center gap-4">
                                <button
                                    className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                    Save Cash Collection
                                </button>
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
            </section>
        </>
    );
}

export default Page;