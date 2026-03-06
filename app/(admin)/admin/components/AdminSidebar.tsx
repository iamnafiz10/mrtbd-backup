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
import {FaUsers} from "react-icons/fa";
import {MdOutlineInventory2} from "react-icons/md";
import {CgCalculator} from "react-icons/cg";

/* ---------------- TYPES ---------------- */
interface MenuItemUI {
    id: number;
    title: string;
    icon: React.ReactNode;
    path: string;
    subItems?: { id: number; title: string; path: string }[];
}

/* ---------------- STATIC MENU ---------------- */
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
        title: "Settings",
        icon: <FiSettings className="h-5 w-5"/>,
        path: "/admin/settings",
    },
];

/* ---------------- HELPERS ---------------- */
const findOpenId = (
    items: MenuItemUI[],
    isActive: (path: string) => boolean
): number | null => {
    for (const it of items) {
        if (
            it.subItems?.some((s) => isActive(s.path)) ||
            (it.subItems && isActive(it.path))
        ) {
            return it.id;
        }
    }
    return null;
};

/* ---------------- COMPONENT ---------------- */
const AdminSidebar = () => {
    const pathname = usePathname();

    const isActive = (path: string) =>
        pathname === path || pathname.startsWith(path + "/");

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);

    /* Detect mobile */
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
            {/* Mobile menu button */}
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
                        ? `fixed top-0 left-0 z-30 h-full w-[240px] ${
                            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`
                        : `${isCollapsed ? "w-fit" : "w-[240px]"}`
                }`}
            >
                {/* Header */}
                <div className="flex items-center h-[48px] justify-between px-4 border-b border-gray-300">
                    {(!isCollapsed || isMobile) && (
                        <h2 className="font-bold text-[15px]">
                            MR Trade International
                        </h2>
                    )}

                    {!isMobile && (
                        <button onClick={() => setIsCollapsed(!isCollapsed)}>
                            {isCollapsed ? <FiChevronRight/> : <FiChevronLeft/>}
                        </button>
                    )}

                    {isMobile && (
                        <button className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                            <FiX size={20}/>
                        </button>
                    )}
                </div>

                {/* Menu */}
                <div className="p-4 space-y-2">
                    {menuItems.map((item) => {
                        const active =
                            isActive(item.path) ||
                            item.subItems?.some((s) => isActive(s.path));
                        const isOpen = openMenuId === item.id;

                        return (
                            <div key={item.id}>
                                {/* Main */}
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
                                    <Link href={item.path}>
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
                                        {item.subItems.map((sub) => (
                                            <Link key={sub.id} href={sub.path}>
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
                                        ))}
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