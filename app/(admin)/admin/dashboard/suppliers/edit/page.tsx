"use client";
import React, {useRef, useState} from 'react';
import {IoImageOutline} from "react-icons/io5";
import Image from "next/image";
import {RxCross1} from "react-icons/rx";
import {FaPlus} from "react-icons/fa";

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

    // Button Click To Showing Info //
    const [showPaymentD, setShowPaymentD] = useState(false);

    const [openDealerMoreInfoModal, setOpenDealerMoreInfoModal] = useState(false);
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Edit Supplier</h2>
                    </div>

                    <div className="w-full custom_padding bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="tab_wrap">
                            {/* Tab Content */}
                            <div className="tab_content_wrap mt-4 border border-gray-200 p-4 rounded">
                                <div className="hire-content grid grid-cols-1">

                                    <div className="col">
                                        <div className="bg-primary p-3 text-[14px] rounded">
                                            <h2 className="text-white font-semibold">
                                                Company Information
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
                                                <label className="block mb-1 text-[14px] font-medium">
                                                    Company Name
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
                                                    Owner Email
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder=""
                                                    className="w-full text-[14px]  border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
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
                                    </div>
                                    <div className="col mt-6">
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

                                    <div className="flex justify-start mt-4">
                                        <div className="col">
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
                                        </div>
                                    </div>

                                    <div className="col mt-4">
                                        <button onClick={() => setOpenDealerMoreInfoModal(true)}
                                                className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[12px] cursor-pointer">
                                            <FaPlus/> Add More Info
                                        </button>
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

                {/* Dealer More Info Modal */}
                {openDealerMoreInfoModal && (
                    <div className="fixed inset-0 z-50 flex justify-center overflow-y-auto">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenDealerMoreInfoModal(false)}/>
                        <div
                            className="relative bg-white rounded shadow w-2xl mt-10 mb-10 max-h-[90vh] flex flex-col z-10 text-[12px]">
                            {/* Modal Header - Fixed */}
                            <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
                                <button
                                    className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenDealerMoreInfoModal(false)}
                                >
                                    <RxCross1 size={18}/>
                                </button>
                                <h3 className="text-[16px] font-semibold">Add More Information</h3>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="overflow-y-auto px-6 py-4 flex-grow">
                                <form action="" method="">
                                    <div className="col">
                                        <h4 className="text-lg text-gray-700 font-semibold">
                                            (1) Add Address/Product Info
                                        </h4>
                                        <div className="bg-primary p-3 text-[14px] rounded mt-4">
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
                                    </div>


                                    <div className="col mt-4">
                                        <button
                                            type="button"
                                            onClick={() => setShowPaymentD(!showPaymentD)}
                                            className="cursor-pointer text-lg">
                                            (2) Add Payment/Delivery Info <span
                                            className="ml-1">{showPaymentD ? "-" : "+"}</span>
                                        </button>
                                    </div>
                                    <div
                                        className={`col transition-all duration-500 overflow-hidden ${
                                            showPaymentD ? "max-h-[1200px] opacity-100 mt-6" : "max-h-0 opacity-0"
                                        }`}
                                    >
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
                                </form>
                            </div>
                            {/* Modal Footer - Fixed */}
                            <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
                                <div className="flex justify-end gap-3 mt-4 text-[12px]">
                                    <button onClick={() => setOpenDealerMoreInfoModal(false)}
                                            className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                        Cancel
                                    </button>
                                    <button onClick={() => setOpenDealerMoreInfoModal(false)}
                                            className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Page;