"use client";
import React, { useEffect, useState } from 'react';
import CreateEditStudentComponent from './CreateEditStudentComponent'; // Import the shared component
import { useRouter } from 'next/navigation';

const EditStudent = () => {
    const router = useRouter();
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            const id = new URLSearchParams(window.location.search).get('id');
            // Fetch student data from your API or state management
            const response = await fetch(`/api/students/${id}`);
            const data = await response.json();
            setStudentData(data);
        };

        fetchStudentData();
    }, []);

    const handleClose = () => {
        router.push('/students/students-list'); // Redirect after saving
    };

    return (
        studentData && (
            <CreateEditStudentComponent isOpen={true} onClose={handleClose} initialData={studentData} />
        )
    );
};

export default EditStudent;
