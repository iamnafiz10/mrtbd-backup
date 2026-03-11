"use client";
import React from 'react';

function Page() {
    return (
        <>
            <section id="product-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Existing Bank Loan Paid</h2>
                    </div>

                    <div className="w-full bg-white rounded border border-gray-200 p-6 mt-4">
                        <button
                            className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                            Get Due Loan List
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;