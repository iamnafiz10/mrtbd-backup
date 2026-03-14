"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {
    FiHome,
    FiChevronLeft,
    FiChevronRight,
    FiMenu,
    FiX,
    FiChevronDown,
    FiSettings,
} from "react-icons/fi";

import {FaRegFlag, FaRegMoneyBillAlt, FaUsers} from "react-icons/fa";
import {MdOutlineInventory2, MdSms, MdWork} from "react-icons/md";
import {CgCalculator} from "react-icons/cg";
import {LuChartColumnIncreasing} from "react-icons/lu";

/* ---------------- TYPES ---------------- */

interface SubSubItem {
    id: number;
    title: string;
    path: string;
}

interface SubItem {
    id: number;
    title: string;
    path?: string;
    children?: SubSubItem[];
}

interface MenuItemUI {
    id: number;
    title: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: SubItem[];
}

/* ---------------- MENU ---------------- */

const menuItems: MenuItemUI[] = [
    {
        id: 1,
        title: "Dashboard",
        icon: <FiHome className="h-5 w-5"/>,
        path: "/admin/dashboard",
    },
    {
        id: 2,
        title: "Basic Modules",
        icon: <FiSettings className="h-5 w-5"/>,
        path: "/admin/basic",
        subItems: [
            {id: 21, title: "Company", path: "/admin/dashboard/company"},
            {id: 22, title: "Category", path: "/admin/dashboard/categories"},
            {id: 23, title: "Color", path: "/admin/dashboard/colors"},
            {id: 24, title: "Product", path: "/admin/dashboard/products"},
            {id: 25, title: "Bank", path: "/admin/dashboard/banks"},
            {id: 26, title: "Department", path: "/admin/dashboard/departments"},
            {id: 27, title: "Holiday", path: "/admin/dashboard/holiday"},
            {id: 28, title: "Godown", path: "/admin/dashboard/godowns"},
            {id: 29, title: "Capacity", path: "/admin/dashboard/capacity"},
            {id: 299, title: "Payment", path: "/admin/dashboard/payment"},
        ],
    },
    {
        id: 3,
        title: "Staff",
        icon: <FaUsers className="h-5 w-5"/>,
        path: "/admin/basic",
        subItems: [
            {id: 31, title: "Employees", path: "/admin/dashboard/employees"},
        ],
    },
    {
        id: 4,
        title: "Customers & Suppliers",
        icon: <MdOutlineInventory2 className="h-5 w-5"/>,
        path: "/admin/basic",
        subItems: [
            {id: 41, title: "Customer", path: "/admin/dashboard/customers"},
            {id: 42, title: "Supplier", path: "/admin/dashboard/suppliers"},
        ],
    },
    {
        id: 5,
        title: "Inventory Management",
        icon: <CgCalculator className="h-5 w-5"/>,
        path: "/admin/basic",
        subItems: [
            {id: 51, title: "Purchase Orders", path: "/admin/dashboard/purchase-orders"},
            {id: 52, title: "Retail Sales", path: "/admin/dashboard/retail-sales"},
            {id: 53, title: "Hire Sales", path: "/admin/dashboard/hire-sales"},
            {id: 54, title: "Dealer Sales", path: "/admin/dashboard/dealer-sales"},
            {id: 55, title: "Sales Return", path: "/admin/dashboard/sales-return"},
            {id: 56, title: "Purchase Return", path: "/admin/dashboard/purchase-return"},
            {id: 57, title: "Replacement Order", path: "/admin/dashboard/replacement-orders"},
            {id: 58, title: "Stock", path: "/admin/dashboard/stocks"},
            {id: 59, title: "Stock Details", path: "/admin/dashboard/stock-details"},
            {id: 591, title: "Transfer", path: "/admin/dashboard/transfer"},
        ],
    },
    {
        id: 6,
        title: "Account Management",
        icon: <MdWork className="h-5 w-5"/>,
        path: "/admin/basic",
        subItems: [
            {id: 61, title: "Expense/Income Head", path: "/admin/dashboard/expense-income"},
            {id: 62, title: "Expense", path: "/admin/dashboard/expense"},
            {id: 63, title: "Cash Collection", path: "/admin/dashboard/cash-collection"},
            {id: 64, title: "Cash Delivery", path: "/admin/dashboard/cash-delivery"},
            {id: 65, title: "Income", path: "/admin/dashboard/income"},
            {id: 66, title: "Bank Transaction", path: "/admin/dashboard/bank-transaction"},
        ],
    },
    {
        id: 7,
        title: "SMS Service",
        icon: <MdSms className="h-5 w-5"/>,
        path: "/admin/basic",
        subItems: [
            {id: 71, title: "SMS Inbox", path: "/admin/dashboard/sms-inbox"},
            {id: 72, title: "Send SMS", path: "/admin/dashboard/send-sms"},
            {id: 73, title: "SMS Bill", path: "/admin/dashboard/sms-bill"},
            {id: 74, title: "SMS Report", path: "/admin/dashboard/sms-report"},
            {id: 75, title: "SMS Service Setting", path: "/admin/dashboard/sms-service-setting"},
            {id: 76, title: "Send Bulk SMS", path: "/admin/dashboard/send-bulk-sms"},
        ],
    },
    {
        id: 8,
        title: "Accounting Report",
        icon: <LuChartColumnIncreasing className="h-5 w-5"/>,
        path: "/admin/basic",
        subItems: [
            {id: 81, title: "Cash In Hand", path: "/admin/dashboard/cash-in-hand"},
            {id: 82, title: "Trail Balance", path: "/admin/dashboard/trial-balance"},
            {id: 83, title: "Profit And Loss Account", path: "/admin/dashboard/profit-and-loss-account"},
            {id: 84, title: "Balance Sheet", path: "/admin/dashboard/balance-sheet"},
        ],
    },
    {
        id: 9,
        title: "MIS Report",
        icon: <FaRegFlag className="h-5 w-5"/>,
        subItems: [
            {
                id: 91,
                title: "Basic Report",
                children: [
                    {id: 911, title: "Employee Information", path: "/admin/dashboard/employee-information"},
                    {id: 912, title: "Product Information", path: "#"},
                    {id: 913, title: "Stock Details Report", path: "/admin/dashboard/stock-details-report"},
                    {id: 914, title: "Stock Summary Report", path: "/admin/dashboard/stock-summary-report"},
                    {id: 915, title: "Stock Ledger", path: "/admin/dashboard/stock-ledger"},
                    {id: 916, title: "Stock Quantity Report", path: "/admin/dashboard/stock-quantity-report"},
                    {
                        id: 917,
                        title: "Stock Forcasting Report (Product Wise)",
                        path: "/admin/dashboard/stock-forcasting-report-pw"
                    },
                    {
                        id: 918,
                        title: "Stock Forcasting Report (Concern Wise)",
                        path: "/admin/dashboard/stock-forcasting-report-cw"
                    },
                ],
            },
            {
                id: 92,
                title: "Purchase Report",
                children: [
                    {id: 921, title: "Supplier Ledger", path: "/admin/dashboard/supplier-ledger"},
                    {id: 922, title: "Daily Purchase Report", path: "/admin/dashboard/daily-purchase-report"},
                    {id: 923, title: "Monthly Purchase Report", path: "/admin/dashboard/monthly-purchase-report"},
                    {id: 924, title: "Yearly Purchase Report", path: "/admin/dashboard/yearly-purchase-report"},
                    {id: 925, title: "Supplier Wise Purchase", path: "/admin/dashboard/supplier-wise-purchase"},
                    {id: 926, title: "Supplier Cash Delivery", path: "/admin/dashboard/supplier-cash-delivery"},
                    {id: 927, title: "Supplier Due Report", path: "/admin/dashboard/supplier-due-report"},
                    {id: 928, title: "Model Wise Purchase", path: "/admin/dashboard/model-wise-purchase"},
                    {id: 929, title: "Vat Report", path: "/admin/dashboard/vat-report"},
                ],
            },
            {
                id: 10,
                title: "Sales Report",
                children: [
                    {id: 101, title: "Daily Sales Report", path: "/admin/dashboard/daily-sales-report"},
                    {id: 102, title: "Monthly Sales Report", path: "/admin/dashboard/monthly-sales-report"},
                    {id: 103, title: "Yearly Sales Report", path: "/admin/dashboard/yearly-sales-report"},
                    {id: 104, title: "Replacement Report", path: "/admin/dashboard/replacement-report"},
                    {id: 105, title: "Model Wise Sales", path: "/admin/dashboard/model-wise-sales"},
                ],
            },
            {
                id: 11,
                title: "Hire Sales Report",
                children: [
                    {id: 111, title: "Installment Collection", path: "/admin/dashboard/installment-collection"},
                    {id: 112, title: "Upcoming Installment", path: "/admin/dashboard/upcoming-installment"},
                    {id: 113, title: "Defaulting Customer", path: "/admin/dashboard/defaulting-customer"},
                    {id: 114, title: "Default Customer Summary", path: "/admin/dashboard/default-customer-summary"},
                    {id: 115, title: "Hire Account Details", path: "/admin/dashboard/hire-account-details"},
                ],
            },
            {
                id: 12,
                title: "SR Report",
                children: [
                    {id: 121, title: "SR Wise Sales Report", path: "/admin/dashboard/sr-wise-sales-report"},
                    {id: 122, title: "SR Wise Sales Details", path: "/admin/dashboard/sr-wise-sales-details"},
                    {id: 123, title: "SR Wise Customer Due", path: "/admin/dashboard/sr-wise-customer-due"},
                    {
                        id: 124,
                        title: "SR Wise Customer Sales Summary",
                        path: "/admin/dashboard/sr-wise-customer-sales-summary"
                    },
                    {id: 125, title: "SR Visit Report", path: "/admin/dashboard/sr-visit-report"},
                    {id: 126, title: "SR Wise Customer Status", path: "/admin/dashboard/sr-wise-customer-status"},
                    {id: 127, title: "SR Wise Cash Collection", path: "#"},
                    {id: 128, title: "SR Commission Report", path: "/admin/dashboard/sr-commission-report"},
                ],
            },
            {
                id: 13,
                title: "Customer Wise Report",
                children: [
                    {id: 131, title: "Customer Wise Sales Report", path: "/admin/dashboard/customer-wise-sales-report"},
                    {id: 132, title: "Category Wise Custom Due", path: "/admin/dashboard/category-wise-custom-due"},
                    {id: 133, title: "Customer Ledger Report", path: "/admin/dashboard/customer-ledger-report"},
                    {
                        id: 134,
                        title: "Customer Due Report [Date Wise]",
                        path: "/admin/dashboard/customer-due-report-date-wise"
                    },
                    {id: 135, title: "Customer Cash Collection", path: "/admin/dashboard/customer-cash-collection"},
                ],
            },
            {
                id: 14,
                title: "Managment Report",
                children: [
                    {id: 141, title: "Expense Report", path: "/admin/dashboard/expense-report"},
                    {
                        id: 142,
                        title: "Product Wise Benefit Report",
                        path: "/admin/dashboard/product-wise-benefit-report"
                    },
                    {id: 143, title: "Income Report", path: "/admin/dashboard/income-report"},
                    {id: 144, title: "Adjustment Report", path: "/admin/dashboard/adjustment-report"},
                    {id: 145, title: "Transaction Summary Report", path: "/admin/dashboard/transaction-summary-report"},
                    {id: 146, title: "Monthly Transaction Report", path: "/admin/dashboard/monthly-transaction-report"},
                    {id: 147, title: "Showroom Analysis Report", path: "/admin/dashboard/showroom-analysis-report"},
                ],
            },
            {
                id: 15,
                title: "Advance Search",
                path: "/admin/dashboard/advance-search",
            },
            {
                id: 16,
                title: "Bank Report",
                children: [
                    {id: 161, title: "Bank Transaction Report", path: "/admin/dashboard/bank-transaction-report"},
                    {id: 162, title: "Bank Ledger", path: "/admin/dashboard/bank-ledger"},
                ],
            },
            {
                id: 17,
                title: "Transfer Report",
                path: "/admin/dashboard/transfer-report",
            },
        ],
    },
    {
        id: 40,
        title: "Bank Loan",
        icon: <FaRegFlag className="h-5 w-5"/>,
        subItems: [
            {
                id: 401,
                title: "CC Loan",
                path: "/admin/dashboard/cc-loan",
            },
            {
                id: 402,
                title: "Bank Loan",
                path: "/admin/dashboard/bank-loan",
            },
            {
                id: 403,
                title: "Bank Loan Collection",
                path: "/admin/dashboard/bank-loan-collection",
            },
            {
                id: 404,
                title: "Bank Loan Report",
                path: "/admin/dashboard/bank-loan-report",
            },
        ],
    },
    {
        id: 50,
        title: "Investment",
        icon: <FaRegMoneyBillAlt className="h-5 w-5"/>,
        subItems: [
            {
                id: 401,
                title: "Investment Heads",
                path: "/admin/dashboard/investment-heads",
            },
            {
                id: 402,
                title: "Asset",
                children: [
                    {id: 4021, title: "Fixed Asset", path: "/admin/dashboard/fixed-asset"},
                    {id: 4022, title: "Current Asset", path: "/admin/dashboard/current-asset"},
                ],
            },
            {
                id: 403,
                title: "Liability",
                children: [
                    {id: 4031, title: "Liability Receive", path: "/admin/dashboard/liability-receive"},
                    {id: 4032, title: "Liability Pay", path: "/admin/dashboard/liability-pay"},
                    {id: 4033, title: "Liability Report", path: "/admin/dashboard/liability-report"},
                ],
            },
        ],
    },
];

/* ---------------- COMPONENT ---------------- */

const AdminSidebar = () => {
    const pathname = usePathname();

    const isActive = (path?: string) => {
        if (!path) return false;
        return pathname === path || pathname.startsWith(path + "/");
    };

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [openSubMenuId, setOpenSubMenuId] = useState<number | null>(null);

    /* Detect Mobile */

    useEffect(() => {
        const check = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            if (mobile) {
                setIsCollapsed(true);
                setIsMobileMenuOpen(false);
            }
        };

        check();
        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <>
            {/* Mobile Menu Button */}

            {isMobile && !isMobileMenuOpen && (
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="fixed top-[6px] left-4 z-50 p-2 cursor-pointer rounded-md bg-primary text-white shadow-lg"
                >
                    <FiMenu size={18}/>
                </button>
            )}

            {/* Sidebar */}

            <aside
                className={`text-[14px] bg-white border-r border-gray-200 transition-all duration-300
        ${
                    isMobile
                        ? `fixed top-0 left-0 z-30 h-full w-[300px] ${
                            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`
                        : `${isCollapsed ? "w-fit" : "w-[300px]"}`
                }`}
            >
                {/* Header */}

                <div className="flex items-center h-[48px] justify-between px-4 border-b border-gray-300">
                    {(!isCollapsed || isMobile) && (
                        <h2 className="font-bold text-[15px]">MR Trade International</h2>
                    )}

                    {!isMobile && (
                        <button onClick={() => setIsCollapsed(!isCollapsed)}>
                            {isCollapsed ? <FiChevronRight/> : <FiChevronLeft/>}
                        </button>
                    )}

                    {isMobile && (
                        <button
                            className="cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FiX size={20}/>
                        </button>
                    )}
                </div>

                {/* Menu */}

                <div className="p-4 space-y-2">
                    {menuItems.map((item) => {
                        const active =
                            isActive(item.path) ||
                            item.subItems?.some((sub) =>
                                sub.children?.some((c) => isActive(c.path))
                            );

                        const isOpen = openMenuId === item.id;

                        return (
                            <div key={item.id}>
                                {/* Main Menu */}

                                {item.subItems ? (
                                    <div
                                        onClick={() =>
                                            setOpenMenuId(isOpen ? null : item.id)
                                        }
                                        className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
                    ${
                                            active
                                                ? "bg-primary text-white"
                                                : "hover:bg-gray-100"
                                        }`}
                                    >
                                        <div className="flex gap-2 items-center">
                                            {item.icon}
                                            {(!isCollapsed || isMobile) && item.title}
                                        </div>

                                        {(!isCollapsed || isMobile) && (
                                            <FiChevronDown
                                                className={isOpen ? "rotate-180" : ""}
                                            />
                                        )}
                                    </div>
                                ) : (
                                    <Link href={item.path || "#"}>
                                        <div
                                            className={`px-3 py-2 rounded-lg flex gap-2 items-center
                      ${
                                                active
                                                    ? "bg-primary text-white"
                                                    : "hover:bg-gray-100"
                                            }`}
                                        >
                                            {item.icon}
                                            {(!isCollapsed || isMobile) && item.title}
                                        </div>
                                    </Link>
                                )}

                                {/* Submenu */}

                                {item.subItems && isOpen && (!isCollapsed || isMobile) && (
                                    <div className="pl-6 mt-1 space-y-1">
                                        {item.subItems.map((sub) => {
                                            const subOpen = openSubMenuId === sub.id;

                                            return (
                                                <div key={sub.id}>
                                                    {/* Sub Item */}

                                                    {sub.children ? (
                                                        <div
                                                            onClick={() =>
                                                                setOpenSubMenuId(
                                                                    subOpen ? null : sub.id
                                                                )
                                                            }
                                                            className="p-2 rounded-md text-sm cursor-pointer hover:bg-gray-100 flex justify-between"
                                                        >
                                                            {sub.title}

                                                            <FiChevronDown
                                                                className={`${
                                                                    subOpen ? "rotate-180" : ""
                                                                }`}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <Link href={sub.path || "#"}>
                                                            <div
                                                                className={`p-2 rounded-md text-sm
                                ${
                                                                    isActive(sub.path)
                                                                        ? "bg-primary/10 text-primary"
                                                                        : "hover:bg-gray-100"
                                                                }`}
                                                            >
                                                                {sub.title}
                                                            </div>
                                                        </Link>
                                                    )}

                                                    {/* Sub Sub Menu */}

                                                    {sub.children && subOpen && (
                                                        <div className="pl-4 space-y-1">
                                                            {sub.children.map((child) => (
                                                                <Link key={child.id} href={child.path}>
                                                                    <div
                                                                        className={`p-2 rounded-md text-sm
                                    ${
                                                                            isActive(child.path)
                                                                                ? "bg-primary/10 text-primary"
                                                                                : "hover:bg-gray-100"
                                                                        }`}
                                                                    >
                                                                        {child.title}
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;