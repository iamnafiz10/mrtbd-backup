"use client";
import React, {useState} from 'react';
import {FiPlusSquare, FiTrash2} from "react-icons/fi";
import {FaCheck, FaChevronDown} from "react-icons/fa";

type PaymentRow = {
    id: number;
    paymentType: string;
};

function Page() {
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
    //-------- Change Type Accroding Select ---------------//
    const [collectionType, setCollectionType] = useState("Normal");

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
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Edit Cash Collection</h2>
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
                                        <div className="w-full flex items-center gap-2">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Supplier Name
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
                                                            placeholder="Select supplier"
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
                                                Collection Type
                                            </label>
                                            <div className="block md:flex items-center gap-2">
                                                <div className="relative w-full mt-4 md:mt-0">
                                                    <select
                                                        value={collectionType}
                                                        onChange={(e) => setCollectionType(e.target.value)}
                                                        className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="Normal">Normal</option>
                                                        <option value="Installment">Installment</option>
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
                                                InterestAmt
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
                                                {collectionType === "Installment" ? "Hire Invoice No" : "Invoice No"}
                                            </label>

                                            <input
                                                type="text"
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
                                    Save Cash Delivery
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;