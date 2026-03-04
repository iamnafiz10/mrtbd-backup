"use client";
import React, {useRef, useState} from 'react';
import {IoImageOutline} from "react-icons/io5";
import Image from "next/image";

function Page() {
    //----------------- Tab Logic --------------------//
    const [activeTab, setActiveTab] = useState<'retail' | 'dealer' | 'hire' | 'branch'>('retail');
    const tabBtnStyle = (tab: string) =>
        `py-1.5 px-4 border border-primary text-[14px] rounded cursor-pointer transition
     ${
            activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-transparent text-primary hover:bg-primary hover:text-white'
        }`;

    //------------------ Product / Salse Type Select To Come Input Box --------------//
    const [typeProduct, setTypeProduct] = useState<string>('');
    const [salesType, setSalesType] = useState<string>('');

    // Image preview
    const [preview, setPreview] = useState<string | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };
    const handleRemove = () => {
        setPreview(null);
        if (fileRef.current) {
            fileRef.current.value = "";
        }
    };
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Create Customer</h2>
                    </div>

                    <div className="input_box block md:flex items-center gap-4">
                        <div className="w-full">
                            <div className="flex items-center gap-4 my-4">
                                {/* Image Preview Box */}
                                <div
                                    className="w-[120px] h-[120px] border border-gray-200 rounded flex items-center justify-center overflow-hidden">
                                    {preview ? (
                                        <Image
                                            width={100}
                                            height={100}
                                            src={preview}
                                            alt="Logo Preview"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <IoImageOutline size={60} className="text-gray-400"/>
                                    )}
                                </div>

                                {/* Remove Button */}
                                {preview && (
                                    <button
                                        type="button"
                                        onClick={handleRemove}
                                        className="px-4 py-2 text-[13px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                            <input
                                ref={fileRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-1/2 text-[12px] border border-gray-300 rounded p-3 py-2
                focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div className="w-full"></div>
                    </div>

                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="tab_wrap">
                            {/* Tabs */}
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className={tabBtnStyle('retail')}
                                    onClick={() => setActiveTab('retail')}
                                >
                                    Retail
                                </button>

                                <button
                                    type="button"
                                    className={tabBtnStyle('dealer')}
                                    onClick={() => setActiveTab('dealer')}
                                >
                                    Dealer
                                </button>

                                <button
                                    type="button"
                                    className={tabBtnStyle('hire')}
                                    onClick={() => setActiveTab('hire')}
                                >
                                    Hire
                                </button>

                                <button
                                    type="button"
                                    className={tabBtnStyle('branch')}
                                    onClick={() => setActiveTab('branch')}
                                >
                                    Branch
                                </button>
                            </div>

                            <h5 className="text-[13px] mt-2">
                                <b>Note:</b> Select <span className="text-primary font-bold">Customer Type</span> and
                                create a customer
                            </h5>

                            {/* Tab Content */}
                            <div className="tab_content_wrap mt-4 border border-gray-200 p-4 rounded">
                                {activeTab === 'retail' && (
                                    <div className="retail-content grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="col">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Customer Information
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        disabled
                                                        placeholder="R00002"
                                                        className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">

                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Father Name
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
                                                        Mobile No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Product Type
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Type
                                                    </label>
                                                    <select
                                                        value={typeProduct}
                                                        onChange={(e) => setTypeProduct(e.target.value)}
                                                        className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--- Select a type---</option>
                                                        <option value="batteryEB">ব্যাটারি ইবি</option>
                                                        <option value="value2">রিক্সা / ভ্যান ব্যাটারী</option>
                                                        <option value="value3">স্পেয়ার পার্টস</option>
                                                    </select>
                                                </div>
                                            </div>


                                            {typeProduct === 'batteryEB' && (
                                                <div className="under_col mt-10">
                                                    <div className="bg-primary p-3 text-[14px] rounded">
                                                        <h2 className="text-white font-semibold">
                                                            Address Info Type
                                                        </h2>
                                                    </div>
                                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                                        <div className="w-full">
                                                            <label className="block mb-1 text-[14px] font-medium">
                                                                Village
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder=""
                                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                            />
                                                        </div>
                                                        <div className="w-full mt-4 md:mt-0">
                                                            <label className="block mb-1 text-[14px] font-medium">
                                                                Post Office
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
                                                                Post Code
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder=""
                                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                            />
                                                        </div>
                                                        <div className="w-full mt-4 md:mt-0">
                                                            <label className="block mb-1 text-[14px] font-medium">
                                                                Thana
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
                                                                District
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder=""
                                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="under_col mt-10">
                                                <div className="bg-primary p-3 text-[14px] rounded">
                                                    <h2 className="text-white font-semibold">
                                                        Refer
                                                    </h2>
                                                </div>
                                                <div className="input_box mt-4 block md:flex items-center gap-4">
                                                    <div className="w-full">
                                                        <label className="block mb-1 text-[14px] font-medium">
                                                            Sales Type
                                                        </label>
                                                        <select
                                                            value={salesType}
                                                            onChange={(e) => setSalesType(e.target.value)}
                                                            className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                        >
                                                            <option value="">--- Select a type---</option>
                                                            <option value="ShowRoomSales">Show Room Sales</option>
                                                            <option value="OthersSales">Others Sales</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {salesType === 'ShowRoomSales' && (
                                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                                        <div className="w-full">
                                                            <label className="block mb-1 text-[14px] font-medium">
                                                                Show Room Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder=""
                                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {salesType === 'OthersSales' && (
                                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                                        <div className="w-full">
                                                            <label className="block mb-1 text-[14px] font-medium">
                                                                Full Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder=""
                                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                            />
                                                        </div>
                                                        <div className="w-full mt-4 md:mt-0">
                                                            <label className="block mb-1 text-[14px] font-medium">
                                                                Mobile No
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder=""
                                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'dealer' && (
                                    <div className="dealer-content grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="col">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Dealer Information
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        disabled
                                                        placeholder="D00002"
                                                        className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">

                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Shop Name
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
                                                        Trade License No
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>

                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Tin No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Mobile No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Contact Information
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Block
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Road
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
                                                        Sector
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Village
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
                                                        Post Office
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>

                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Post Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Thana
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        District
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mt-6">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Manager Information
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Manager Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Manager Mobile No
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mt-6">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Due Limited
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Due Limit
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
                                                        Agreement Paper <span className="text-red-400 text-[12px]">(max: 5 MB each)</span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        placeholder=""
                                                        className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Dealer NID <span className="text-red-400 text-[12px]">(max: 5 MB each)</span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        placeholder=""
                                                        className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        BankCheque <span className="text-red-400 text-[12px]">(max: 5 MB each)</span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        placeholder=""
                                                        className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        TradeLicense <span className="text-red-400 text-[12px]">(max: 5 MB each)</span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        placeholder=""
                                                        className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Tin Certificate <span className="text-red-400 text-[12px]">(max: 5 MB each)</span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        placeholder=""
                                                        className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'hire' && (
                                    <div className="hire-content grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="col">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Customer Information
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        disabled
                                                        placeholder="R00002"
                                                        className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">

                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Father Name
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
                                                        Date Of Birth
                                                    </label>
                                                    <input
                                                        type="date"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>

                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Gender
                                                    </label>
                                                    <select
                                                        className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--- Select---</option>
                                                        <option value="value1">বপুরুষ</option>
                                                        <option value="value2">মহিলা</option>
                                                        <option value="value3">তৃতীয় লিঙ্গ</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Marital Status
                                                    </label>
                                                    <select
                                                        className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--- Select---</option>
                                                        <option value="value1">None</option>
                                                        <option value="value2">Married</option>
                                                        <option value="value3">UnMarried</option>
                                                    </select>
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Religion
                                                    </label>
                                                    <select
                                                        className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--- Select---</option>
                                                        <option value="value1">ইসলাম</option>
                                                        <option value="value2">হিন্দু</option>
                                                        <option value="value3">খিস্ট্রান</option>
                                                        <option value="value4">সাওতাল</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Mobile No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Contact Information
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Village
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Post Office
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
                                                        Post Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Thana
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
                                                        District
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mt-6">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Guarantor Infomation
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Guar. Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Guar. Father Name
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
                                                        Guar. Profession
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mt-6">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Guarnt Contact Infomation
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Village
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Post Office
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
                                                        Post Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Thana
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
                                                        District
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mt-6">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Refer
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Sales Type
                                                    </label>
                                                    <select
                                                        className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--- Select a type---</option>
                                                        <option value="value1">Show Room Sales</option>
                                                        <option value="value2">Others Sales</option>
                                                    </select>
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Show Room Name
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
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Mobile No
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'branch' && (
                                    <div className="branch-content grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="col">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Customer Information
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        disabled
                                                        placeholder="R00002"
                                                        className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">

                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Father Name
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
                                                        Date Of Birth
                                                    </label>
                                                    <input
                                                        type="date"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>

                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Gender
                                                    </label>
                                                    <select
                                                        className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--- Select---</option>
                                                        <option value="value1">বপুরুষ</option>
                                                        <option value="value2">মহিলা</option>
                                                        <option value="value3">তৃতীয় লিঙ্গ</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Marital Status
                                                    </label>
                                                    <select
                                                        className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--- Select---</option>
                                                        <option value="value1">None</option>
                                                        <option value="value2">Married</option>
                                                        <option value="value3">UnMarried</option>
                                                    </select>
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Religion
                                                    </label>
                                                    <select
                                                        className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--- Select---</option>
                                                        <option value="value1">ইসলাম</option>
                                                        <option value="value2">হিন্দু</option>
                                                        <option value="value3">খিস্ট্রান</option>
                                                        <option value="value4">সাওতাল</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Mobile No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Contact Information
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Village
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Post Office
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
                                                        Post Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Thana
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
                                                        District
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mt-6">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Guarantor Infomation
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Guar. Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Guar. Father Name
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
                                                        Guar. Profession
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mt-6">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Guarnt Contact Infomation
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Village
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Post Office
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
                                                        Post Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Thana
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
                                                        District
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mt-6">
                                            <div className="bg-primary p-3 text-[14px] rounded">
                                                <h2 className="text-white font-semibold">
                                                    Refer
                                                </h2>
                                            </div>
                                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                                <div className="w-full">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Sales Type
                                                    </label>
                                                    <select
                                                        className="block w-full rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary"
                                                    >
                                                        <option value="">--- Select a type---</option>
                                                        <option value="value1">Show Room Sales</option>
                                                        <option value="value2">Others Sales</option>
                                                    </select>
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Show Room Name
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
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                                <div className="w-full mt-4 md:mt-0">
                                                    <label className="block mb-1 text-[14px] font-medium">
                                                        Mobile No
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-full flex justify-end mt-4">
                            <button
                                className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                Add Customer
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;