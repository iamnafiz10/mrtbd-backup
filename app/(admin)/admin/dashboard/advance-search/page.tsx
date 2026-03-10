"use client";
import React, {useMemo, useState} from 'react';

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
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Search By IMEI</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1">
                            <div className="col">
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
                                                        <th className="p-3 border border-gray-200 text-center">Sales
                                                            Rate
                                                        </th>
                                                        <th className="p-3 border border-gray-200 text-center">CustomerCode</th>
                                                        <th className="p-3 border border-gray-200 text-center">Customer
                                                            Name
                                                        </th>
                                                        <th className="p-3 border border-gray-200 text-center">Sales
                                                            Date
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
                                                        <th className="p-3 border border-gray-200 text-center">Sales
                                                            Rate
                                                        </th>
                                                        <th className="p-3 border border-gray-200 text-center">CustomerCode</th>
                                                        <th className="p-3 border border-gray-200 text-center">Customer
                                                            Name
                                                        </th>
                                                        <th className="p-3 border border-gray-200 text-center">Sales
                                                            Date
                                                        </th>
                                                        <th className="p-3 border border-gray-200 text-center">Return
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;