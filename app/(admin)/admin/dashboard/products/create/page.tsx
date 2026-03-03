"use client";
import React, {useEffect, useState} from 'react';
import {FiPlusSquare} from "react-icons/fi";
import {RxCross1} from "react-icons/rx";

function Page() {
    // ---------- Company / Category / Capacity Modal ---------- //
    const [openCompanyModal, setOpenCompanyModal] = useState(false);
    const [openCategoryModal, setOpenCategoryModal] = useState(false);
    const [openCapacityModal, setOpenCapacityModal] = useState(false);
    useEffect(() => {
        const isAnyModalOpen = openCompanyModal || openCategoryModal || openCapacityModal;
        if (isAnyModalOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [openCompanyModal, openCategoryModal, openCapacityModal]);

    // ------------- Category Dropdown -----------------//
    const [isOpen, setIsOpen] = useState(false);
    // Added extra options to demonstrate the scroll feature
    const options = ['Battery', 'Charger easy Bike', 'Parts', 'HAP', 'Distill Water', 'Cable'];
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Create Product</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <form action="" method="">
                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Code
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Code"
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Hire Rate 2 Month
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
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Hire Rate 3 Month
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
                                        Company
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                        <div onClick={() => setOpenCompanyModal(true)}
                                             className="icon_box bg-primary p-1 text-white rounded cursor-pointer">
                                            <FiPlusSquare size={20}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Hire Rate 6 Month
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
                                        Category
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                        <div onClick={() => setOpenCategoryModal(true)}
                                             className="icon_box bg-primary p-1 text-white rounded cursor-pointer">
                                            <FiPlusSquare size={20}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Service Warrenty
                                    </label>
                                    <div className="block md:flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                        <div className="relative w-full mt-4 md:mt-0">
                                            <select
                                                className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:ring-0 focus:border-primary">
                                                <option value="option2">Month(s)</option>
                                                <option value="option1">Years(s)</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Capacity
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                        <div onClick={() => setOpenCapacityModal(true)}
                                             className="icon_box bg-primary p-1 text-white rounded cursor-pointer">
                                            <FiPlusSquare size={20}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Motor Warrenty
                                    </label>
                                    <div className="block md:flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                        <div className="relative w-full mt-4 md:mt-0">
                                            <select
                                                className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:ring-0 focus:border-primary">
                                                <option value="option2">Month(s)</option>
                                                <option value="option1">Years(s)</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        DD Lefting Price
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            placeholder="0.00"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        SpareParts Warrenty
                                    </label>
                                    <div className="block md:flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                        <div className="relative w-full mt-4 md:mt-0">
                                            <select
                                                className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:ring-0 focus:border-primary">
                                                <option value="option2">Month(s)</option>
                                                <option value="option1">Years(s)</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        MRP
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            placeholder="0.00"
                                            className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div className="w-full mt-4 md:mt-0">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Product Type
                                    </label>
                                    <div className="block md:flex items-center gap-2">
                                        <div className="relative w-full mt-4 md:mt-0">
                                            <select
                                                className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary">
                                                <option value="option1">--Select an unit--</option>
                                                <option value="option2">ExistingBC</option>
                                                <option value="option3">NoBarcode</option>
                                                <option value="option3">AutoBC</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="input_box mt-4 block md:flex items-end gap-4">
                                <div className="w-full">
                                    <label className="block mb-1 text-[14px] font-medium">
                                        Unit Type
                                    </label>
                                    <div className="block md:flex items-center gap-2">
                                        <div className="relative w-full mt-4 md:mt-0">
                                            <select
                                                className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:outline-none focus:ring-0 focus:border-primary">
                                                <option value="option1">--Select an unit--</option>
                                                <option value="option2">PCS</option>
                                                <option value="option3">Carton</option>
                                                <option value="option4">Jar</option>
                                                <option value="option5">Litter</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <button
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                        Add Product
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Company MODAL */}
                {openCompanyModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCompanyModal(false)}/>
                        <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCompanyModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold mb-4">Company Name</h3>
                            <div className="py-4 border-b border-t border-gray-200">
                                <form action="" method="">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Name
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
                                <button onClick={() => setOpenCompanyModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                                <button onClick={() => setOpenCompanyModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Category MODAL */}
                {openCategoryModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCategoryModal(false)}/>
                        <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCategoryModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold mb-4">Category Name</h3>
                            <div className="py-4 border-b border-t border-gray-200">
                                <form action="" method="">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter Name"
                                                className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full"></div>
                                    </div>

                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Parent Category
                                            </label>
                                            <div className="relative">
                                                <input
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    type="text"
                                                    placeholder=""
                                                    className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                                />
                                                {/* Dropdown Menu */}
                                                {isOpen && (
                                                    <>
                                                        <div
                                                            className="fixed inset-0 z-10"
                                                            onClick={() => setIsOpen(false)}
                                                        />

                                                        <ul className="absolute right-0 mt-2 w-full bg-[#f7f7f7] border border-gray-300 rounded shadow-2xl z-20 overflow-hidden">
                                                            <div
                                                                className="max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
                                                                {options.map((option, index) => (
                                                                    <li
                                                                        key={index}
                                                                        onClick={() => {
                                                                            console.log(option);
                                                                            setIsOpen(false);
                                                                        }}
                                                                        className="px-4 py-2 text-[12px] text-black hover:bg-primary hover:text-white cursor-pointer transition-colors"
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
                                        <div className="w-full"></div>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-end gap-3 mt-4 text-[14px]">
                                <button onClick={() => setOpenCategoryModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                                <button onClick={() => setOpenCategoryModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Capacity MODAL */}
                {openCapacityModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-modal-opacity"
                             onClick={() => setOpenCapacityModal(false)}/>
                        <div className="relative bg-white rounded shadow w-2xl mx-4 px-6 py-4 z-10 text-[14px]">
                            <button className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-red-500"
                                    onClick={() => setOpenCapacityModal(false)}>
                                <RxCross1 size={18}/>
                            </button>
                            <h3 className="text-[16px] font-semibold mb-4">Capacity Name</h3>
                            <div className="py-4 border-b border-t border-gray-200">
                                <form action="" method="">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full mt-4 md:mt-0">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Name
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
                                <button onClick={() => setOpenCapacityModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-red-500 text-white hover:bg-red-700 transition">
                                    Close
                                </button>
                                <button onClick={() => setOpenCapacityModal(false)}
                                        className="px-4 py-2 cursor-pointer rounded bg-primary text-white hover:bg-dark-primary transition">
                                    Add
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