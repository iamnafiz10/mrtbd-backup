"use client";
import React, {useMemo, useState} from 'react';
import CustomCheckbox from "@/app/(admin)/admin/dashboard/helper/CustomCheckbox";

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
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Create Bank Loan</h2>
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
                                                Installment Size
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
                                                No Of Installment
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
                                                SDPS
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
                                                Amount
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>

                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Savings
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
                                                Penalty %
                                                <span
                                                    className="text-[12px] text-red-400">(If failed at schedule date)</span>
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
                                                Processing Fee %
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

                        <div className="flex items-center justify-between gap-4 mt-4">
                            <button
                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                Save Loan
                            </button>
                            <button
                                className="flex items-center gap-1 py-2 px-4 bg-yellow-400 hover:bg-yellow-600 text-white rounded text-[13px] cursor-pointer">
                                Generate Schedule
                            </button>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto mt-6">
                            <table className="w-full border-collapse">
                                <thead className="bg-gray-50">
                                <tr className="border border-gray-200">
                                    <th className="p-3 border border-gray-200">
                                        <CustomCheckbox/>
                                    </th>
                                    <th className="p-3 border border-gray-200 text-center">SI</th>
                                    <th className="p-3 border border-gray-200 text-left">Schedule</th>
                                    <th className="p-3 border border-gray-200 text-left">Pay Date</th>
                                    <th className="p-3 border border-gray-200 text-left">Opening</th>
                                    <th className="p-3 border border-gray-200 text-left">Installment</th>
                                    <th className="p-3 border border-gray-200 text-left">Closing</th>
                                    <th className="p-3 border border-gray-200 text-left">Status</th>
                                    <th className="p-3 border border-gray-200 text-left">Remarks</th>
                                </tr>
                                </thead>
                                <tbody>
                                {paginatedData.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={11}
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
                                        <span
                                            className="px-3 py-1 bg-green-500 rounded text-white text-[12px] cursor-pointer inline-block transition select-none">
                                                Active
                                            </span>
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
            </section>
        </>
    );
}

export default Page;