function Page() {
    return (
        <>
            <section id="sms-section" className="mt-10">
                <div className="container">
                    <div
                        className="page_header block md:flex items-center justify-between bg-gray-100 border border-gray-200 py-3 px-4 rounded font-semibold text-[16px]">
                        <h2>Send Many SMS</h2>
                        <button type='button'
                                className="py-2 px-4 cursor-pointer font-normal bg-primary text-white rounded text-[14px] hover:bg-dark-primary">
                            Download Template
                        </button>
                    </div>
                    <div className="w-full p-6 bg-white rounded border border-gray-200 mt-6 text-[14px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col">
                                <form className="border border-gray-300 rounded p-4">
                                    <div className="input_box mt-4 block md:flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Upload Excel
                                            </label>
                                            <input
                                                type="file"
                                                placeholder=""
                                                className="w-full text-[12px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="input_box mt-4 flex items-center gap-4">
                                        <div className="w-full">
                                            <label className="block mb-1 text-[14px] font-medium">
                                                Message
                                            </label>
                                            <textarea rows={2}
                                                      className="w-full text-[14px] border border-gray-300 rounded p-3 py-2 focus:outline-none focus:border-primary"></textarea>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mt-4">
                                        <button
                                            className="flex items-center gap-1 py-2 px-4 bg-primary hover:bg-dark-primary text-white rounded text-[13px] cursor-pointer">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;