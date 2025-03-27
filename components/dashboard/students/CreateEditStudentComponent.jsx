"use client";
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select"; // Assuming a custom Select component
import { Toaster, toast } from "sonner"; // Import Sonner for notifications
import DatePicker from 'react-datepicker';

const CreateEditStudentComponent = ({ isOpen , onClose, initialData }) => {
    const [formData, setFormData] = useState({
        form_no: initialData?.form_no || '',
        date: initialData?.date || '',
        admission_type: initialData?.admission_type || '',
        name: initialData?.name || '',
        father_name: initialData?.father_name || '',
        mother_name: initialData?.mother_name || '',
        dob: initialData?.dob || '',
        birth_certificate: initialData?.birth_certificate || '',
        previous_madrasha: initialData?.previous_madrasha || '',
        previous_class: initialData?.previous_class || '',
        new_student_result: initialData?.new_student_result || '',
        student_type: initialData?.student_type || '',
        session: initialData?.session || '',
        class: initialData?.class || '',
        gender: initialData?.gender || '',
        orphan: initialData?.orphan || '',
        village: initialData?.village || '',
        post_office: initialData?.post_office || '',
        police_station: initialData?.police_station || '',
        district: initialData?.district || '',
        guardian_name: initialData?.guardian_name || '',
        guardian_nid: initialData?.guardian_nid || '',
        relation: initialData?.relation || '',
        mobile: initialData?.mobile || '',
        admission_fee: initialData?.admission_fee || '',
        admission_fee_receive: initialData?.admission_fee_receive || '',
        admission_fee_discount: initialData?.admission_fee_discount || '',
        guardian_address: initialData?.guardian_address || '',
        photo: null,
        other_documents: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files
        }));
    };

    const handleSubmit = () => {
        // Add validation logic here if needed
        toast.success('Student data saved successfully!');
        onClose(); // Call onClose to redirect after saving
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{initialData ? 'Edit Student' : 'Create Student'}</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    {/* General Information */}
                    <h2 className="text-lg font-bold">General Information</h2>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="form_no">ফর্ম নং/Form No*</Label>
                            <Input
                                id="form_no"
                                name="form_no"
                                value={formData.form_no}
                                onChange={handleInputChange}
                                placeholder="Enter Form No"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="date">তারিখ/Date*</Label>
                            <DatePicker
                                id="date"
                                name="date"
                                selected={formData.date}
                                onChange={(date) => setFormData({ ...formData, date })}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="admission_type">ভর্তির ধরন/Admission Type*</Label>
                            <Select
                                id="admission_type"
                                name="admission_type"
                                value={formData.admission_type}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Admission Type</option>
                                <option value="new">New</option>
                                <option value="transfer">Transfer</option>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="name">নাম/Student Name*</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter Student Name"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="father_name">পিতা/Father Name*</Label>
                            <Input
                                id="father_name"
                                name="father_name"
                                value={formData.father_name}
                                onChange={handleInputChange}
                                placeholder="Enter Father&apos;s Name"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="mother_name">মাতা/Mother Name*</Label>
                            <Input
                                id="mother_name"
                                name="mother_name"
                                value={formData.mother_name}
                                onChange={handleInputChange}
                                placeholder="Enter Mother&apos;s Name"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="dob">জন্ম তারিখ/Date Of Birth</Label>
                            <DatePicker
                                id="dob"
                                name="dob"
                                selected={formData.dob}
                                onChange={(date) => setFormData({ ...formData, dob: date })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="birth_certificate">জন্ম নিবন্ধন/Birth Certificate*</Label>
                            <Input
                                id="birth_certificate"
                                name="birth_certificate"
                                value={formData.birth_certificate}
                                onChange={handleInputChange}
                                placeholder="Enter Birth Certificate No"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="previous_madrasha">পূর্ববর্তী মাদ্রাসার নাম/Previous Madrasha</Label>
                            <Input
                                id="previous_madrasha"
                                name="previous_madrasha"
                                value={formData.previous_madrasha}
                                onChange={handleInputChange}
                                placeholder="Enter Previous Madrasha Name"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="previous_class">পূর্ববর্তী ক্লাসের নাম/Previous Class</Label>
                            <Input
                                id="previous_class"
                                name="previous_class"
                                value={formData.previous_class}
                                onChange={handleInputChange}
                                placeholder="Enter Previous Class Name"
                            />
                        </div>
                    </div>

                    {/* Academic Information */}
                    <h2 className="text-lg font-bold">Academic Information</h2>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="new_student_result">নতুন ছাত্রের রেজাল্ট/New Student Result</Label>
                            <Input
                                id="new_student_result"
                                name="new_student_result"
                                value={formData.new_student_result}
                                onChange={handleInputChange}
                                placeholder="Enter New Student Result"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="student_type">ছাত্রের ধরন/Student Type*</Label>
                            <Select
                                id="student_type"
                                name="student_type"
                                value={formData.student_type}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Student Type</option>
                                <option value="regular">Regular</option>
                                <option value="irregular">Irregular</option>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="session">ছাত্রের সেশন/Session*</Label>
                            <Select
                                id="session"
                                name="session"
                                value={formData.session}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Session</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="class">ক্লাস/Class*</Label>
                            <Select
                                id="class"
                                name="class"
                                value={formData.class}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Class</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="gender">ছাত্রের লিঙ্গ/Student Gender*</Label>
                            <Select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="orphan">এতিম</Label>
                            <Select
                                id="orphan"
                                name="orphan"
                                value={formData.orphan}
                                onChange={handleInputChange}
                            >
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Select>
                        </div>
                    </div>

                    {/* Address Information */}
                    <h2 className="text-lg font-bold">Address Information</h2>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="village">গ্রাম/Village</Label>
                            <Input
                                id="village"
                                name="village"
                                value={formData.village}
                                onChange={handleInputChange}
                                placeholder="Enter Village Name"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="post_office">ডাকঘর/Post Office</Label>
                            <Input
                                id="post_office"
                                name="post_office"
                                value={formData.post_office}
                                onChange={handleInputChange}
                                placeholder="Enter Post Office Name"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="police_station">থানা/Police Station</Label>
                            <Input
                                id="police_station"
                                name="police_station"
                                value={formData.police_station}
                                onChange={handleInputChange}
                                placeholder="Enter Police Station Name"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="district">জেলা/District</Label>
                            <Input
                                id="district"
                                name="district"
                                value={formData.district}
                                onChange={handleInputChange}
                                placeholder="Enter District Name"
                            />
                        </div>
                    </div>

                    {/* Guardian Information */}
                    <h2 className="text-lg font-bold">Guardian Information</h2>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="guardian_name">অভিভাবকের নাম/Gurdian Name</Label>
                            <Input
                                id="guardian_name"
                                name="guardian_name"
                                value={formData.guardian_name}
                                onChange={handleInputChange}
                                placeholder="Enter Guardian Name"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="guardian_nid">অভিভাবকের এন আই ডি/Gurdian NID</Label>
                            <Input
                                id="guardian_nid"
                                name="guardian_nid"
                                value={formData.guardian_nid}
                                onChange={handleInputChange}
                                placeholder="Enter Guardian NID"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="relation">সম্পর্ক/Relation</Label>
                            <Input
                                id="relation"
                                name="relation"
                                value={formData.relation}
                                onChange={handleInputChange}
                                placeholder="Enter Relation"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="mobile">মোবাইল/Mobile*</Label>
                            <Input
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                placeholder="Enter Mobile Number"
                                required
                            />
                        </div>
                    </div>

                    {/* Admission Fee Information */}
                    <h2 className="text-lg font-bold">Admission Fee Information</h2>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="admission_fee">ভর্তি ফী /Admission Fee*</Label>
                            <Input
                                id="admission_fee"
                                name="admission_fee"
                                type="number"
                                value={formData.admission_fee}
                                onChange={handleInputChange}
                                placeholder="Enter Admission Fee"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="admission_fee_receive">ভর্তি ফী গ্রহণ/Admission Fee Receive*</Label>
                            <Input
                                id="admission_fee_receive"
                                name="admission_fee_receive"
                                type="number"
                                value={formData.admission_fee_receive}
                                onChange={handleInputChange}
                                placeholder="Enter Admission Fee Received"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="admission_fee_discount">ভর্তি ফী ডিসকাউন্ট/Admission Fee Discount</Label>
                            <Input
                                id="admission_fee_discount"
                                name="admission_fee_discount"
                                type="number"
                                value={formData.admission_fee_discount}
                                onChange={handleInputChange}
                                placeholder="Enter Admission Fee Discount"
                            />
                        </div>
                    </div>

                    {/* Additional Information */}
                    <h2 className="text-lg font-bold">Additional Information</h2>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="guardian_address">অভিভাবকের ঠিকানা/Gurdian&apos;s Address</Label>
                            <Input
                                id="guardian_address"
                                name="guardian_address"
                                value={formData.guardian_address}
                                onChange={handleInputChange}
                                placeholder="Enter Guardian&apos;s Address"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="photo">ছাত্রের ছবি/Photo</Label>
                            <Input
                                id="photo"
                                name="photo"
                                type="file"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Label htmlFor="other_documents">অন্যান্য ডকুমেন্টস/Other Documents</Label>
                            <Input
                                id="other_documents"
                                name="other_documents"
                                type="file"
                                multiple
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CreateEditStudentComponent;
