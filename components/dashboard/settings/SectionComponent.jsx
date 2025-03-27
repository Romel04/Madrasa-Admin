"use client";
import React, { useState } from "react";
import CommonButton from "@/components/CommonButton";
import { EnhancedDataTable } from "@/components/EnhancedDataTable";
import { ArrowBigLeft, Edit, Trash, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogDescription, 
    DialogFooter 
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
  import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner";

// Section Modal Component
const SectionModal = ({ isOpen, onClose, mode, initialData, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (!formData.title) {
            toast.error("Please fill in all required fields");
            return;
        }

        const submissionData = initialData?.id
            ? { ...formData, id: initialData.id }
            : { ...formData, id: Date.now() }; // Generate temporary ID for new sections

        onSubmit(submissionData);
        toast.success(`${mode === "create" ? "Created" : "Updated"} section successfully!`);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{mode === "create" ? "Create New Section" : "Edit Section"}</DialogTitle>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-6 items-center gap-4">
                        <Label htmlFor="title" className="text-right">Title <span className="text-red-500">*</span></Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="col-span-5"
                            placeholder="e.g., Section A"
                        />
                    </div>
                </div>
                
                <DialogFooter>
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit}>{mode === "create" ? "Create" : "Update"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

// Confirm Delete Modal Component
const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, sectionName }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[300px]">
                <DialogHeader>
                    <DialogTitle>Confirm Delete</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                    <p>Are you sure you want to delete the section &quot;{sectionName}&quot;?</p>
                </div>
                <DialogFooter>
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="button" onClick={onConfirm}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

// Main Section Component
export default function SectionComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState("create");
    const [selectedSection, setSelectedSection] = useState(null);
    const [sections, setSections] = useState([
        // Your existing section data
        {
            id: 1,
            title: "A",
        },
        {
            id: 2,
            title: "B",
        },
        {
            id: 3,
            title: "C",
        },
        {
            id: 4,
            title: "A",
        },
        {
            id: 5,
            title: "B",
        },
        {
            id: 6,
            title: "C",
        },
        {
            id: 7,
            title: "A",
        },
        {
            id: 8,
            title: "B",
        },
        {
            id: 9,
            title: "C",
        },
        {
            id: 10,
            title: "A",
        },
        {
            id: 11,
            title: "B",
        },
        {
            id: 12,
            title: "C",
        },
        {
            id: 13,
            title: "A",
        },
        {
            id: 14,
            title: "B",
        },
        {
            id: 15,
            title: "C",
        },
        {
            id: 16,
            title: "A",
        },
        {
            id: 17,
            title: "B",
        },
        {
            id: 18,
            title: "C",
        },
        {
            id: 19,
            title: "A",
        },
        {
            id: 20,
            title: "B",
        },
        {
            id: 21,
            title: "C",
        },
        // Add more sections as needed
    ]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const router = useRouter();

    const handleCreateSection = () => {
        setModalMode("create");
        setSelectedSection(null);
        setIsModalOpen(true);
    };

    const handleEditSection = (section) => {
        setModalMode("edit");
        setSelectedSection(section);
        setIsModalOpen(true);
    };

    const handleSubmitSection = (sectionData) => {
        if (modalMode === "create") {
            setSections((prev) => [...prev, sectionData]);
        } else {
            setSections((prev) => prev.map((section) => (section.id === sectionData.id ? sectionData : section)));
        }
    };

    const handleDeleteSection = (sectionToDelete) => {
        setSelectedSection(sectionToDelete);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        setSections((prev) => prev.filter((section) => section.id !== selectedSection.id));
        toast.success(`Deleted section "${selectedSection.title}" successfully!`);
        setIsDeleteModalOpen(false);
    };

    const columns = [
        {
            accessorKey: "sn",
            header: "SN",
            size: 50,
            cell: ({ row }) => row.index + 1,
        },
        {
            accessorKey: "title",
            header: "Section",
            size: 200,
        },
        {
            header: "Action",
            id: "actions",
            size: 200,
            cell: ({ row }) => (
                <div className="flex gap-x-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-500 hover:bg-blue-700"
                        onClick={() => handleEditSection(row.original)}
                    >
                        <Edit size={16} className="mr-2" /> Edit
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:bg-red-700"
                        onClick={() => handleDeleteSection(row.original)}
                    >
                        <Trash size={16} className="mr-2" /> Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="p-5">
            <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    <div>
                        <p
                            className="cursor-pointer text-blue-500 flex items-center gap-x-2 bg-gray-200 rounded-full"
                            onClick={() => {
                                router.back();
                            }}
                        >
                            <ArrowBigLeft size={40} />
                        </p>
                    </div>
                    <h1 className="text-2xl font-bold">Section Settings</h1>
                </div>
                <Button onClick={handleCreateSection} className="flex items-center gap-x-2">
                    <Plus size={16} /> Create Section
                </Button>
            </div>

            <EnhancedDataTable 
                columns={columns}
                data={sections}
                allowRowSelect={true}
            />

            {/* Modal for Create/Edit */}
            <SectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mode={modalMode}
                initialData={selectedSection}
                onSubmit={handleSubmitSection}
            />

            {/* Confirm Delete Modal */}
            <ConfirmDeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                sectionName={selectedSection?.title}
            />

            {/* Toast Notifications */}
            <Toaster />
        </div>
    );
}
