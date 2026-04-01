"use client";
import React, {useRef, useState} from 'react';
import Image from "next/image";
import {IoImageOutline} from "react-icons/io5";

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

    // Image preview Brand
    const [previewBrand, setPreviewBrand] = useState<string | null>(null);
    const fileRefBrand = useRef<HTMLInputElement | null>(null);
    const handleImageChangeBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileBrand = e.target.files?.[0];
        if (fileBrand) {
            setPreviewBrand(URL.createObjectURL(fileBrand));
        }
    };
    const handleRemoveBrand = () => {
        setPreviewBrand(null);
        if (fileRefBrand.current) {
            fileRefBrand.current.value = "";
        }
    };

    // Tab System
    const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>System Information</h2>
                    </div>

                    <div className="tab mt-4 flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setActiveTab("tab1")}
                            className={`py-2 px-4 border text-[12px] rounded cursor-pointer transition ${
                                activeTab === "tab1"
                                    ? "bg-primary text-white border-primary"
                                    : "bg-transparent text-primary border-primary hover:bg-primary hover:text-white"
                            }`}
                        >
                            System Information
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("tab2")}
                            className={`py-2 px-4 border text-[12px] rounded cursor-pointer transition ${
                                activeTab === "tab2"
                                    ? "bg-primary text-white border-primary"
                                    : "bg-transparent text-primary border-primary hover:bg-primary hover:text-white"
                            }`}
                        >
                            System Configuration
                        </button>
                    </div>

                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-4 text-[12px]">
                        {/*Tab One*/}
                        {activeTab === "tab1" && (
                            <div className="tab_one_content grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col">
                                    <form className="border border-gray-300 rounded p-4">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    TelephoneNo
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    Device IP
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    Device SN
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    EmailAddress
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    WebAddress
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    SystemStartDate
                                                </label>
                                                <input
                                                    type="date"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </form>

                                    <form className="border border-gray-300 rounded p-4 mt-4">
                                        <h4 className="mb-4 text-md font-semibold">
                                            Logo
                                        </h4>
                                        <div className="input_box flex items-center gap-4">
                                            <div className="w-full">
                                                <div className="flex items-center gap-4 mb-2">
                                                    {/* Image Preview Box */}
                                                    <div
                                                        className="border custom_img_size border-gray-200 rounded flex items-center justify-center overflow-hidden">
                                                        {preview ? (
                                                            <Image
                                                                width={100}
                                                                height={100}
                                                                src={preview}
                                                                alt="Logo Preview"
                                                                className="object-cover"
                                                            />
                                                        ) : (
                                                            <IoImageOutline size={50}
                                                                            className="text-gray-400"/>
                                                        )}
                                                    </div>

                                                    {/* Remove Button */}
                                                    {preview && (
                                                        <button
                                                            type="button"
                                                            onClick={handleRemove}
                                                            className="px-4 py-2 text-[12px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
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
                                                    className="w-full text-[10px] border border-gray-300 rounded p-2
                                                    focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </form>

                                    <form className="border border-gray-300 rounded p-4 mt-4">
                                        <h4 className="mb-4 text-md font-semibold">
                                            Brand Logo
                                        </h4>
                                        <div className="input_box flex items-center gap-4">
                                            <div className="w-full">
                                                <div className="flex items-center gap-4 mb-2">
                                                    {/* Image Preview Box */}
                                                    <div
                                                        className="border custom_img_size border-gray-200 rounded flex items-center justify-center overflow-hidden">
                                                        {previewBrand ? (
                                                            <Image
                                                                width={100}
                                                                height={100}
                                                                src={previewBrand}
                                                                alt="Logo Preview"
                                                                className="object-cover"
                                                            />
                                                        ) : (
                                                            <IoImageOutline size={50}
                                                                            className="text-gray-400"/>
                                                        )}
                                                    </div>

                                                    {/* Remove Button */}
                                                    {previewBrand && (
                                                        <button
                                                            type="button"
                                                            onClick={handleRemoveBrand}
                                                            className="px-4 py-2 text-[12px] bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                                                        >
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>
                                                <input
                                                    ref={fileRefBrand}
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChangeBrand}
                                                    className="w-full text-[10px] border border-gray-300 rounded p-2
                                                    focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col">
                                    <form className="border border-gray-300 rounded p-4">
                                        <div className="input_box w-full mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    APIKey
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4">
                                                <button
                                                    className="py-2 px-4 bg-primary rounded text-white cursor-pointer">
                                                    Update Key
                                                </button>
                                            </div>
                                        </div>

                                        <div className="input_box w-full mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    ProductPhotoPath
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box w-full mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    SupplierPhotoPath
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box w-full mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    CustomerPhotoPath
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box w-full mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    CustomerNIDPatht
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box w-full mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    SupplierDocPath
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="input_box w-full mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    EmployeePhotoPath
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/*Tab Two*/}
                        {activeTab === "tab2" && (
                            <div className="tab_two_content grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col">
                                    <form className="border border-gray-300 rounded p-4">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    TelephoneNo
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    Device IP
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    Device SN
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    EmailAddress
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    WebAddress
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    SystemStartDate
                                                </label>
                                                <input
                                                    type="date"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col">
                                    <form className="border border-gray-300 rounded p-4">
                                        <div className="input_box mt-4 block md:flex items-center gap-4">
                                            <div className="w-full">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    From Date
                                                </label>
                                                <input
                                                    type="date"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-full mt-4 md:mt-0">
                                                <label className="block mb-1 text-[12px] font-medium">
                                                    To Date
                                                </label>
                                                <input
                                                    type="date"
                                                    placeholder=""
                                                    className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        <div className="border border-gray-300 rounded p-4 mt-4">
                            <div className="flex items-center justify-start gap-4">
                                <button
                                    className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Preview
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