"use client";
import CommonButton from "@/components/CommonButton";
import { EnhancedDataTable } from "@/components/EnhancedDataTable"; // Updated import
import { ArrowBigLeft, Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SessionSettingsComponent() {
    const [viewMode, setViewMode] = useState(null);
    const [selectedSessionItem, setSelectedSessionItem] = useState(null);
    const router = useRouter();

    // Dummy data for the table with SN, Session, and Action
    const data = [
        {
            id: 1,
            session_name: "Spring 2025",
            start_date: "2025-03-01",
            end_date: "2025-06-01",
            status: "Active",
        },
        {
            id: 2,
            session_name: "Fall 2025",
            start_date: "2025-09-01",
            end_date: "2025-12-01",
            status: "Inactive",
        },
        {
            id: 3,
            session_name: "Winter 2025",
            start_date: "2025-12-01",
            end_date: "2026-03-01",
            status: "Active",
        },
        {
            id: 4,
            session_name: "Spring 2025",
            start_date: "2025-03-01",
            end_date: "2025-06-01",
            status: "Active",
        },
        {
            id: 5,
            session_name: "Fall 2025",
            start_date: "2025-09-01",
            end_date: "2025-12-01",
            status: "Inactive",
        },
        {
            id: 6,
            session_name: "Winter 2025",
            start_date: "2025-12-01",
            end_date: "2026-03-01",
            status: "Active",
        },
        {
            id: 7,
            session_name: "Spring 2025",
            start_date: "2025-03-01",
            end_date: "2025-06-01",
            status: "Active",
        },
        {
            id: 8,
            session_name: "Fall 2025",
            start_date: "2025-09-01",
            end_date: "2025-12-01",
            status: "Inactive",
        },
        {
            id: 9,
            session_name: "Winter 2025",
            start_date: "2025-12-01",
            end_date: "2026-03-01",
            status: "Active",
        },
        {
            id: 10,
            session_name: "Spring 2025",
            start_date: "2025-03-01",
            end_date: "2025-06-01",
            status: "Active",
        },
        {
            id: 11,
            session_name: "Fall 2025",
            start_date: "2025-09-01",
            end_date: "2025-12-01",
            status: "Inactive",
        },
        {
            id: 12,
            session_name: "Winter 2025",
            start_date: "2025-12-01",
            end_date: "2026-03-01",
            status: "Active",
        },
        {
            id: 13,
            session_name: "Spring 2025",
            start_date: "2025-03-01",
            end_date: "2025-06-01",
            status: "Active",
        },
        {
            id: 14,
            session_name: "Fall 2025",
            start_date: "2025-09-01",
            end_date: "2025-12-01",
            status: "Inactive",
        },
        {
            id: 15,
            session_name: "Winter 2025",
            start_date: "2025-12-01",
            end_date: "2026-03-01",
            status: "Active",
        },
        {
            id: 16,
            session_name: "Spring 2025",
            start_date: "2025-03-01",
            end_date: "2025-06-01",
            status: "Active",
        },
        {
            id: 17,
            session_name: "Fall 2025",
            start_date: "2025-09-01",
            end_date: "2025-12-01",
            status: "Inactive",
        },
        {
            id: 18,
            session_name: "Winter 2025",
            start_date: "2025-12-01",
            end_date: "2026-03-01",
            status: "Active",
        },
        {
            id: 19,
            session_name: "Spring 2025",
            start_date: "2025-03-01",
            end_date: "2025-06-01",
            status: "Active",
        },
        {
            id: 20,
            session_name: "Fall 2025",
            start_date: "2025-09-01",
            end_date: "2025-12-01",
            status: "Inactive",
        },
        {
            id: 21,
            session_name: "Winter 2025",
            start_date: "2025-12-01",
            end_date: "2026-03-01",
            status: "Active",
        },
        // Add more dummy data as needed
    ];

    const columns = [
        {
            accessorKey: "sn",
            header: "SN",
            size: 50,
            cell: ({ row }) => row.index + 1, // Serial Number based on row index
        },
        {
            accessorKey: "session_name",
            header: "Session",
            size: 200,
        },
        {
            header: "Action",
            id: "actions",
            cell: ({ row }) => (
                <div className="flex gap-x-4">
                    <p
                        className="cursor-pointer text-blue-500 flex items-center gap-x-2"
                        onClick={() => {
                            setSelectedSessionItem(row.original);
                            setViewMode("edit");
                        }}
                    >
                        <Edit size={18} /> {/* Edit Icon */}
                        Edit
                    </p>
                    <p
                        className="cursor-pointer text-red-500 flex items-center gap-x-2"
                        onClick={() => {
                            setSelectedSessionItem(row.original);
                            // Handle delete confirmation here
                        }}
                    >
                        <Trash size={18} /> {/* Trash Icon */}
                        Delete
                    </p>
                </div>
            ),
        },
    ];

    const resetStates = () => {
        setViewMode(null);
        setSelectedSessionItem(null);
    };

    return (
        <div className="p-5">
            {viewMode === null && (
                <div>
                    <div className="mb-4 flex justify-between">
                        <div className="flex gap-x-4">
                            <div>
                                <p
                                    className="cursor-pointer text-blue-500 flex items-center gap-x-2 bg-gray-200 rounded-full"
                                    onClick={() => {
                                       router.back() ;
                                    }}
                                >
                                    <ArrowBigLeft size={40} />
                                </p>
                            </div>
                            <div className="text-[24px] font-[700] ">
                                Session Settings
                            </div>
                        </div>

                        <CommonButton
                            name="Create"
                            bgColor="#4999ff"
                            textColor="#ffffff"
                            textSize="16px"
                            fontWeight="500"
                            leading="22.4px"
                            px="20px"
                            height="40px"
                            hoverColor="rgb(73 153 255 / 88%)"
                            onClick={() => setViewMode("create")}
                        />
                    </div>
                    <EnhancedDataTable // Use the enhanced DataTable here
                        columns={columns}
                        data={data} // Use the dummy data here
                        allowRowSelect={true} // Optional: Enable row selection if needed
                    // tableTitle="Session Settings" // Optional: Add a title
                    />
                </div>
            )}

            {viewMode && (
                <div>
                    {/* Render your session details view here */}
                    <h2>{viewMode === "create" ? "Create Session" : "Edit Session"}</h2>
                    {/* Include form or details for the selected session item */}
                </div>
            )}
        </div>
    );
}
