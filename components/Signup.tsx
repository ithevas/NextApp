"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

const Signup = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/signup", formData);
            if (res.data.msg) {
                router.push("/auth/login");
            } else {
                console.error("User already exists!");
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };

    return (
        <div className="flex justify-center h-screen">
            <div className="shadow-md my-auto p-4">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="text-center font-bold text-xl mb-6">Sign Up</div>
                    <input
                        type="email"
                        className="border-2 px-2 py-1 mb-4 outline-none"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className="border-2 px-2 py-1 mb-4 outline-none"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        className="border-2 px-2 py-1 mb-4 outline-none"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="bg-gray-700 text-white font-semibold px-2 py-1">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;