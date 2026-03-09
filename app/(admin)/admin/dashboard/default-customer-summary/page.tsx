"use client";
import React from 'react';

function Page() {
    return (
        <>
            <section id="category-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Default Customer Summary</h2>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="border border-gray-300 rounded p-4 mt-4">
                            <div className="flex items-center gap-4">
                                <button onClick={() => window.print()}
                                        className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                    Preview
                                </button>
                                <div id="print-area" className="text-2xl">
                                    Print Data Coming Here...
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