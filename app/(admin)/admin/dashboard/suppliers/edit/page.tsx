"use client";
import React, {useRef, useState} from 'react';
import {IoImageOutline} from "react-icons/io5";
import Image from "next/image";

function Page() {
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
                        <h2>Edit Supplier</h2>
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
                            {/* Tab Content */}
                            <div className="tab_content_wrap mt-4 border border-gray-200 p-4 rounded">
                                <div className="hire-content grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="col">
                                        <div className="bg-primary p-3 text-[14px] rounded">
                                            <h2 className="text-white font-semibold">
                                                Company Infomation
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
                                                    placeholder="00004"
                                                    className="w-full text-[14px] bg-gray-100 border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">

                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Owner Name
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
                                                    Supplier Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>

                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Owner Contact No.
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
                                                    Owner Email
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder=""
                                                    className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="bg-primary p-3 text-[14px] rounded">
                                            <h2 className="text-white font-semibold">
                                                Service Provider Man
                                            </h2>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Service Man Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Service Man Designation
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
                                                    Service Man Contact No
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
                                                Address Information
                                            </h2>
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
                                                    Post Office
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Post Code
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
                                                    Sector
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
                                                    Road
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Block
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
                                                Payment Information
                                            </h2>
                                        </div>
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Bank Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Account No
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
                                                    Branch Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Routing No
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
                                                    Swift Code
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
                                                Product Information
                                            </h2>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Product Category
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
                                                Delivery And Reciver Information
                                            </h2>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Delivery Man
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
                                                    Delivery Man Contact No
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
                            </div>
                        </div>
                        <div className="w-full flex justify-end mt-4">
                            <button
                                className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                Update Supplier
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;