"use client";
import React, {useState} from 'react';
import {FiPlusSquare, FiTrash2} from "react-icons/fi";

type PaymentRow = {
    id: number;
    paymentType: string;
};

function Page() {
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
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Edit CC Loan</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Loan No.
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="00001"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Penalty %
                                                <span className="text-red-400 text-[12px]"> (If failed to pay)</span>
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
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                placeholder=""
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Total Paid
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
                                                Bank
                                            </label>
                                            <div className="block md:flex items-center gap-2">
                                                <div className="relative w-full mt-4 md:mt-0">
                                                    <select
                                                        className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary">
                                                        <option value="option1">--Select a Bank--</option>
                                                        <option value="option2">Islami Bank 0001</option>
                                                        <option value="option3">City Bank 0002</option>
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
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Sactioned Amount
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
                                                Interset %
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>

                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Total
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="border border-gray-300 rounded p-4">
                            <div className="w-full overflow-x-auto">
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
                                                <div className="flex justify-end items-center mb-3">
                                                    {/* Remove */}
                                                    {index !== 0 && (
                                                        <FiTrash2
                                                            onClick={() => removeRow(row.id)}
                                                            className="text-red-500 cursor-pointer"
                                                            size={18}
                                                        />
                                                    )}
                                                </div>

                                                <div className="mb-3">
                                                    <label className="text-sm font-medium block mb-1">
                                                        Schedule
                                                    </label>
                                                    {index + 1}
                                                </div>


                                                <div className="mb-3">
                                                    <label className="text-sm font-medium block mb-1">
                                                        Received Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="text-sm font-medium block mb-1">
                                                        Amount
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="0"
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="text-sm font-medium block mb-1">
                                                        Remarks
                                                    </label>

                                                    <input
                                                        type="text"
                                                        placeholder=""
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
                                            <th className="border border-primary px-2 py-2 w-12">Schedule</th>
                                            <th className="border border-primary px-4 py-2 text-left">Received Date</th>
                                            <th className="border border-primary px-4 py-2 text-left">Amount</th>
                                            <th className="border border-primary px-4 py-2 text-left">Remarks</th>
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
                                                    <td className="border border-primary px-2 py-2 text-center">
                                                        {index + 1}
                                                    </td>

                                                    <td className="border border-primary px-2 py-2">
                                                        <input
                                                            type="date"
                                                            placeholder=""
                                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                        />
                                                    </td>

                                                    <td className="border border-primary px-2 py-2">
                                                        <input
                                                            type="number"
                                                            placeholder="0"
                                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                        />
                                                    </td>

                                                    <td className="border border-primary px-2 py-2">
                                                        <input
                                                            type="text"
                                                            placeholder=""
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

                        <div className="flex items-center gap-4 mt-4">
                            <button
                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                Save Loan
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;