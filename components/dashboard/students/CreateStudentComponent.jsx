"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import CreateEditStudentComponent from './CreateEditStudentComponent';

const CreateStudent = () => {
    const router = useRouter();

    const handleClose = () => {
        router.push('/students/students-list'); // Redirect after saving
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Create Student</h1>
            <CreateEditStudentComponent isOpen={true} onClose={handleClose} />
        </div>
    );
};

export default CreateStudent;
